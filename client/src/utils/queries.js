import { gql } from '@apollo/client';

export const QUERY_LITREVIEWS = gql`
    query litReviews($username: String) {
        litReviews(username: $username) {
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
`;

export const QUERY_USER = gql`
    query user($username: String) {
        user(username: $username) {
        _id
        username
        email
        password
        department
        litReviews {
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
        litReviewCount
        }
    }
`;