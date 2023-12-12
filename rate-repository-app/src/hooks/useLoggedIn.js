import { useQuery } from "@apollo/client"
import { ME } from "../graphql/queries"
import { useEffect, useState } from "react"

const useLoggedIn = () => {
  const [user, setUser] = useState()
  const userQuery = useQuery(ME, { fetchPolicy: 'network-only' })
  useEffect(() => {
    if (!userQuery.loading) {
      setUser(userQuery.data.me)
    }
  }, [userQuery])
  return { loggedIn: user ? true : false }
}

export default useLoggedIn