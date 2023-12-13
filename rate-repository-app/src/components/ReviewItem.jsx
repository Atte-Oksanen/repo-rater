import { StyleSheet, Text, View } from "react-native"

const ReviewItem = ({ review }) => {
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: 'white',
      marginBottom: 10,
      padding: 5
    },
    rating: {
      border: '2px solid blue',
      borderRadius: '100%',
      width: 35,
      height: 35,
      padding: 2,
      margin: 3
    },
    ratingText: {
      color: 'blue',
      textAlign: 'center',
      fontWeight: 500
    },
    userName: {
      fontWeight: 'bold'
    },
    dateText: {
      color: '#4d4d4d'
    }
  })

  return (
    <View style={styles.container}>
      <View style={styles.rating}>
        <Text style={styles.ratingText}>
          {review.node.rating}
        </Text>
      </View>
      <View style={{ width: '80%' }}>
        <Text>
          <Text style={styles.userName}>
            {Object.keys(review.node).includes('user') ? review.node.user.username : review.node.repository.fullName}
          </Text>
          <br />
          <Text style={styles.dateText}>
            {new Date(review.node.createdAt).toLocaleDateString("en-GB")}
          </Text>
          <br />
          <br />
          {review.node.text}
        </Text>
      </View>
    </View>

  )
}

export default ReviewItem