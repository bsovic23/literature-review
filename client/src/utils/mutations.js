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
    mutation addLitReview($searchTerm: String, $project: String, $articleSubject: String, $articleLink: String, $articleDatabase: String, $articleYear: String, $articleNotes: String) {
        addLitReview(searchTerm: $searchTerm, project: $project, articleSubject: $articleSubject, articleLink: $articleLink, articleDatabase: $articleDatabase, articleYear: $articleYear, articleNotes: $articleNotes) {
        _id
        username
        createdAt
        searchTerm
        project
        articleSubject
        articleLink
        articleDatabase
        articleYear
        articleNotes
        }
    }
`