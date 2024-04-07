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

        // LitEntry Queries - NEED TO UPDATE AND CHANGE 
        /*
        litReviews: async (parent, { username }) => {
            const params = username ? { username } : {};
            return LitReview.find(params).sort({ createdAt: -1 });
        },

        */

        // Project Queries
        projects: async () => {
            return Project.find();
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

        // Project Mutations
        addProject: async (parent, args, context) => {
            if (context.user) {
                const { projectMembers } = args;

                const project = await Project.create({ 
                    ... args,
                    projectLitReviewOutline: args.projectLitReviewOutline,
                });

                await Promise.all(projectMembers.map(async (member) => {

                    const { fieldName } = member;
                    await User.findOneAndUpdate(
                        { username: fieldName },
                        { $push: { projects: project.projectName }},
                        { new: true }
                    );
                }));

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { projects: project.projectName }},
                    { new: true }
                );
            
                return project;
            }

            throw new AuthenticationError('You must be logged in');
        },

        // Literature Review Mutations

        // TO DO: 1) lit review id pushed to user array of lit reviews 2) lit review pushed to project
        addLitReview: async (parent, { projectName, litReviewData }, context) => {
        
            if (context.user) {
                try {
                    // If logged in -> find project by projectName
                    const project = await Project.findOne({ projectName });
        
                    if (!project) {
                        throw new Error('Project not found');
                    }
                    
                    // Create litReview in litReview Model
                    const litReview = await LitReview.create({ fields: litReviewData });

                    // Add litReview ID to users litReviewId
                    await User.findByIdAndUpdate(
                        { _id: context.user._id },
                        { $push: { litReviews: litReview._id }},
                        { new: true }
                    );
                    
                    // Push the litReviewData to the projectLitReviews Array
                    await Project.findOneAndUpdate(
                        { projectName },
                        { $push: { projectLitReviews: litReview._id }},
                        { new: true }
                    );
                    
                    return litReview;

                } catch (error) {
                    throw new Error(`Failed to add lit review: ${error.message}`);
                }
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