const { Schema, model } = require('mongoose');

const litReviewSchema = new Schema(
    {
        username: {
            type: String
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        searchTerm: {
            type: String
        },
        project: {
            type: String,
        },
        articleSubject: {
            type: String
        },
        articleLink: {
            type: String
        },
        articleDatabase: {
            type: String
        },
        articleYear: {
            type: String
        },
        articleNotes: {
            type: String
        }
    }
);

const LitReview = model('LitReview', litReviewSchema);

module.exports = LitReview;