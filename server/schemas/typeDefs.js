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
        projects: [String]
        litReviews: [LitReview]
        comments: [Comment]
        litReviewCount: Int
    }

    type ArraySchema {
        fieldName: String!
    }
    
    type Project {
        _id: ID
        projectName: String
        projectDetails: String
        projectType: String
        projectMembers: [ArraySchema]
        projectSuggestedFields: [String]
        projectLitReviewOutline: [ArraySchema]
        projectLitReview: [LitReview]
    }

    type Department {
        _id: ID
        departmentName: String
        departmentState: String
        departmentArea: String
        departmentDescription: String
        departmentMembers: [User]
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
        articleSourceType: String
        articleNotes: String
    }

    type Comment {
        _id: ID
        username: String
        commentTime: String
        commentType: String
        commentBody: String
    }

    type Query {
        me: User
        users: [User]
        user(username: String): User
        litReviews(username: String): [LitReview]
        projects: [Project]
        comments: [Comment]
    }

    type Mutation {
        login(username: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!, department: String, projects: [String]): Auth
        addLitReview(searchTerm: String, project: String, articleSubject: String, articleLink: String, articleDatabase: String, articleYear: String, articleSourceType: String, articleNotes: String): LitReview
        addProject(projectName: String, projectDetails: String, projectType: String, projectMembers: [ArraySchemaInput], projectSuggestedFields: [String], projectLitReviewOutline: [ArraySchemaInput]): Project
        addComment(commentType: String, commentBody: String): Comment
    }

    input ArraySchemaInput {
        fieldName: String!
    }
`;

module.exports = typeDefs;
