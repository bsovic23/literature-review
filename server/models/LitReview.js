const { Schema, model } = require('mongoose');

const LitReviewField = new Schema({
    fieldName: {
        type: String,
        required: true,
    },
    fieldValue: {
        type: String,
        required: true,
    }
});

const litReviewSchema = new Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    fields: [LitReviewField]
});

const LitReview = model('LitReview', litReviewSchema);

module.exports = LitReview;