import { FlatList, View } from "react-native"
import useQueryReviews from "../hooks/useQueryReviews"
import ReviewItem from "./ReviewItem"

const UserReviews = () => {
  const reviews = useQueryReviews()
  if (!reviews) {
    return null
  }
  const ItemSeparator = () => <View style={{ height: 10, backgroundColor: '#bfbfbf' }} />;
  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      style={{ backgroundColor: '#bfbfbf' }}
    />
  )
}

export default UserReviews