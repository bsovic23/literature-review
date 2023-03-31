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
        litReviews: [LitReview]
        litReviewCount: Int
    }

    type LitReview {
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
        litReviews(username: String): [LitReview]
        projects(project: String): [LitReview]
    }

    type Mutation {
        login(username: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!, department: String): Auth
        addLitReview(searchTerm: String, project: String, articleSubject: String, articleLink: String, articleDatabase: String, articleYear: String, articleNotes: String): LitReview
    }
`;

module.exports = typeDefs;
