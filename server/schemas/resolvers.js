const {
    User,
    LitReview,
    Project,
    Department,
    Comment
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
                .populate('litReviews');

                return userData;  
            }

            throw new AuthenticationError('Not logged in');
        },

        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('litReviews');
        },

        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('litReviews');
        },

        // LitEntry Queries
        litReviews: async (parent, { username }) => {
            const params = username ? { username } : {};
            return LitReview.find(params).sort({ createdAt: -1 });
        },
        // Project Queries
        projects: async () => {
            return Project.find()
            .populate('projectLitReview');
        },

        // Comment Queries
        comments: async () => {
            return Comment.find();
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
                const litReview = await LitReview.create({ ...args, username: context.user.username });
                const { project } = args;

                await Promise.all([
                User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { litReviews: litReview._id }},
                    { new: true }
                ),
                Project.findOneAndUpdate(
                    { projectName: project },
                    { $push: { projectLitReview: litReview._id }},
                    { new: true }
                ),
                ]);

                return litReview;
            }

            throw new AuthenticationError('You must be logged in');
        },

        // Project Mutations
        addProject: async (parent, args, context) => {
            if (context.user) {
                const project = await Project.create({ ... args })
            
                return project;
            }

            throw new AuthenticationError('You must be logged in');
        },

        // Commment Mutations
        addComment: async (parent, args, context) => {
            if (context.user) {
                const comment = await Comment.create({ ... args, username: context.user.username });

                User.findByIdAndUpdate([
                    { _id: context.user._id },
                    { $push: { comments: comment._id }},
                    { new: true }
                ]);

                return comment
            }

            throw new AuthenticationError('You need to be logged in to submit a comment');
        }
    }
};

module.exports = resolvers;