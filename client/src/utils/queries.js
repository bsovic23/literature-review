import { gql } from '@apollo/client';

export const QUERY_LITREVIEWS = gql`
    query litEntries($username: String) {
        litEntries(username: $username) {
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