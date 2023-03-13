const { Schema, model } = require('mongoose');

const litEntrySchema = new Schema(
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
            type: String
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

const LitEntry = model('LitEntry', litEntrySchema);

module.exports = LitEntry;