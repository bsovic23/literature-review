const {
    User,
    LitEntry
} = require('../models');

const resolvers = {
    Query: {
        // User Queries
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
    }
};

module.exports = resolvers;