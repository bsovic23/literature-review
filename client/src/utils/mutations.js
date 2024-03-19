import { gql } from '@apollo/client';

export const MUTATION_LOGIN = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
        token
        user {
            _id
            username
        }
        }
    }
`;

export const MUTATION_ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
        }
        }
    }
`;

export const MUTATION_ADD_LITENTRY = gql`
    mutation addLitReview($searchTerm: String, $project: String, $articleSubject: String, $articleLink: String, $articleDatabase: String, $articleYear: String, $articleSourceType: String, $articleNotes: String) {
        addLitReview(searchTerm: $searchTerm, project: $project, articleSubject: $articleSubject, articleLink: $articleLink, articleDatabase: $articleDatabase, articleYear: $articleYear, articleSourceType: $articleSourceType, articleNotes: $articleNotes) {
        _id
        username
        createdAt
        searchTerm
        project
        articleSubject
        articleLink
        articleDatabase
        articleYear
        articleSourceType
        articleNotes
        }
    }
`

export const MUTATION_ADD_PROJECT = gql`
    mutation Mutation($projectName: String, $projectDetails: String, $projectType: String, $projectMembers: [String], $projectSuggestedFields: [String], $projectLitReviewOutline: [ProjectLitReviewOutlineInput]) {
        addProject(projectName: $projectName, projectDetails: $projectDetails, projectType: $projectType, projectMembers: $projectMembers, projectSuggestedFields: $projectSuggestedFields, projectLitReviewOutline: $projectLitReviewOutline) {
        _id
        projectName
        projectDetails
        projectType
        projectMembers
        projectSuggestedFields
        }
    }
`;

export const MUTATION_ADD_COMMENT = gql`
    mutation Mutation($commentType: String, $commentBody: String) {
        addComment(commentType: $commentType, commentBody: $commentBody) {
        _id
        username
        commentTime
        commentType
        commentBody
        }
    }
`