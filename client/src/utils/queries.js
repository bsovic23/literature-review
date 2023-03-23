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

export const QUERY_ME = gql`
    query me {
        me {
        _id
        username
        email
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

export const QUERY_ME_BASIC = gql`
    {
        me {
        _id
        username
        email
        litReviewCount
        litReviews {
            _id
            createdAt
            project
            articleSubject
        }
    }
}
`;