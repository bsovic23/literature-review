const { Schema, model } = require('mongoose');

const projectLitReviewOutlineSchema = new Schema({
    fieldName: {
        type: String,
        required: true,
    },
    fieldType: {
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
        projectLitReviewOutline: [projectLitReviewOutlineSchema],
        projectLitReview: [
            {
                type: Schema.Types.ObjectId,
                ref: 'LitReview'
            }
        ]
    }
);

const Project = model('Project', projectSchema);

module.exports = Project;