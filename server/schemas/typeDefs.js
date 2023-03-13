const { gql } = require('apollo-server-express');

const typeDefs = gql`
    
    type User {
        _id: ID
        username: String
        email: String
        password: String
        department: String
        litReview: [LitEntry]
        litReviewCount: Int
    }

    type LitEntry {
        _id: ID
        username: String
        createdAt: String
        searchTerm: String
        project: String
        articleSubject: String
        articleDatabase: String
        articleYear: String
        articleNotes: String
    }

    type Query {
        users: [User]
        user(username: String): user
        litEntries(username: String): [litEntry]
    }

    type Resolvers {
        addUser()
    }
`;

module.exports = typeDefs;
