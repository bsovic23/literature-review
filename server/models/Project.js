const { Schema, model } = require('mongoose');

const arraySchema = new Schema({
    fieldName: {
        type: String,
        required: true,
    },
});

const projectSchema = new Schema(
    {
        projectName: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        projectDetails: {
            type: String
        },
        projectType: {
            type: String
        },
        projectMembers: [arraySchema],
        projectSuggestedFields: [
            {
                type: String
            }
        ],
        projectLitReviewOutline: [arraySchema],
        projectLitReviews: [
            {
                type: Schema.Types.ObjectId,
                ref: 'LitReview'
            }
        ]
    }
);

const Project = model('Project', projectSchema);

module.exports = Project;