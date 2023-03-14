const {
    User,
    LitEntry
} = require('../models');

const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // User Queries
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('litReview');

                return userData;  
            }

            throw new AuthenticationError('Not logged in');
        },

        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('litReview');
        },

        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('litReview');
        },

        // LitEntry Queries
        litEntries: async (parent, { username }) => {
            const params = username ? { username } : {};
            return LitEntry.find(params).sort({ createdAt: -1 });
        }
    },
    Mutation: {
        // User Mutations
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });

            if (!user) {
                throw new AuthenticationError('Incorrect Credentials - un');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect Credentials - pw')
            }

            const token = signToken(user);
            return { token, user };
        },

        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },

        // Literature Review Mutations
        addLitReview: async ( parent, args, context) => {
            if (context.user) {
                const litEntry = await LitEntry.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { litReview: litEntry._id }},
                    { new: true }
                );

                return litEntry;
            }

            throw new AuthenticationError('You must be logged in');
        }
    }
};

module.exports = resolvers;