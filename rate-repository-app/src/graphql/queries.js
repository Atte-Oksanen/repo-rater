import { gql } from "@apollo/client";

export const GET_REPOS = gql`
query Repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String) {
  repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
    edges {
      node {
         language
        fullName
        description
        forksCount
        ownerAvatarUrl
        ratingAverage
        reviewCount
        stargazersCount
        id
      }
    }
  }
}
`
export const GET_REPO = gql`
query Repository($repositoryId: ID!) {
  repository(id: $repositoryId) {
    description
    forksCount
    fullName
    id
    language
    ownerName
    ratingAverage
    reviewCount
    stargazersCount
    ownerAvatarUrl
    url
    reviews {
      edges {
        node {
          createdAt
          rating
          text
          user {
            username
          }
        }
      }
    }
  }
}
`
export const ME = gql`
query getCurrentUser($includeReviews: Boolean = false) {
    me {
      reviews @include(if: $includeReviews) {
        edges {
          node {
            # review fields...
            rating
            repository {
              fullName
              language
            }
            text
            id
            createdAt
          }
        }
      }
      id
    }
  }
`