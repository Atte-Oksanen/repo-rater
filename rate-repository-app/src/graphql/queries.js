import { gql } from "@apollo/client";

export const GET_REPOS = gql`
query Repositories {
  repositories {
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
      }
    }
  }
}
`

export const ME = gql`
query Me {
  me {
    username
  }
}
`