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
        comments: [Comment]
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
        projectLitReviews: [LitReview]
    }

    type LitReview {
        _id: ID
        createdAt: String!
        fields: [LitReviewField!]!
    }
    
    type LitReviewField {
        fieldName: String!
        fieldValue: String!
    }

    type Department {
        _id: ID
        departmentName: String
        departmentState: String
        departmentArea: String
        departmentDescription: String
        departmentMembers: [User]
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
        projects: [Project]
        comments: [Comment]
    }

    type Mutation {
        login(username: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!, department: String, projects: [String]): Auth
        addProject(projectName: String, projectDetails: String, projectType: String, projectMembers: [ArraySchemaInput], projectSuggestedFields: [String], projectLitReviewOutline: [ArraySchemaInput]): Project
        addLitReview(projectName: String, litReviewData: [LitReviewDataInput]): LitReview
        addComment(commentType: String, commentBody: String): Comment
    }

    input ArraySchemaInput {
        fieldName: String!
    }
    
    input LitReviewDataInput {
        fieldName: String!
        fieldValue: String!
    }
`;

module.exports = typeDefs;
