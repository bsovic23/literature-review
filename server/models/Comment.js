const { model, Schema } = require('mongoose');

const commentSchema = Schema(
    {
    username: {
        type: String
    },
    commentTime: {
        type: Date,
        default: Date.now
    },
    commentType: {
        type: String
    },
    commentBody: {
        type: String
    }
}
);

const Comment = model('Comment', commentSchema);

module.exports = Comment;