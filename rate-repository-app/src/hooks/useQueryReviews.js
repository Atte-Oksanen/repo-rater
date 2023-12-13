import { useQuery } from "@apollo/client"
import { useEffect, useState } from "react"
import { ME } from "../graphql/queries"

const useQueryReviews = () => {
  const [reviews, setReviews] = useState()
  const userQuery = useQuery(ME, { variables: { includeReviews: true } }, { fetchPolicy: 'network-only' })
  useEffect(() => {
    if (!userQuery.loading) {
      setReviews(userQuery.data.me.reviews.edges)
    }
  }, [userQuery])
  return reviews
}

export default useQueryReviews