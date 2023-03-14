const { gql } = require('apollo-server-express');

const typeDefs = gql`
    
    type Auth {
        token: ID!
        user: User
    }

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
        articleLink: String
        articleDatabase: String
        articleYear: String
        articleNotes: String
    }

    type Query {
        me: User
        users: [User]
        user(username: String): User
        litEntries(username: String): [LitEntry]
    }

    type Mutation {
        login(username: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!, department: String): Auth
        addLitReview(searchTerm: String, project: String, articleSubject: String, articleLink: String, articleDatabase: String, articleYear: String, articleNotes: String): LitEntry
    }
`;

module.exports = typeDefs;
