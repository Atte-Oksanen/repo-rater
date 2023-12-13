import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client'
import { GET_REPOS } from '../graphql/queries'

const useRepositories = (params) => {
  const repoQuery = useQuery(GET_REPOS,
    { variables: { orderBy: params.mutation, orderDirection: params.dir, searchKeyword: params.searchKeyword } },
    { fetchPolicy: 'cache-and-network' })
  const [repositories, setRepositories] = useState()
  useEffect(() => {
    if (!repoQuery.loading) {
      setRepositories(repoQuery.data.repositories.edges.map(edge => edge.node))
    }
  }, [repoQuery])

  return { repositories, loading: repoQuery.loading };
};

export default useRepositories;