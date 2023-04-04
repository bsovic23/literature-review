const { Schema, model } = require('mongoose');

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