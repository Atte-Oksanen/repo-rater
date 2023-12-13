import { useParams } from "react-router-native"
import { Pressable, StyleSheet, View, Text, FlatList } from "react-native"
import { useQuery } from "@apollo/client"
import { GET_REPO } from "../graphql/queries"
import RepositoryItem from "./RepositoryItem"
import { openURL } from "expo-linking"
import ReviewItem from "./ReviewItem"

const SingleRepoView = () => {
  const repoId = useParams().id
  const repoInfo = useQuery(GET_REPO, { variables: { repositoryId: repoId } })

  const styles = StyleSheet.create({
    button: {
      padding: 5,
      backgroundColor: '#007dff',
      color: 'white',
      borderRadius: 3,
      separator: {
        height: 10,
        backgroundColor: '#bfbfbf'
      }
    }
  })
  if (repoInfo.loading) {
    return null
  }
  const ItemSeparator = () => <View style={styles.separator} />;
  return (
    <View style={{ backgroundColor: '#bfbfbf', height: '100%' }}>
      <View style={{ backgroundColor: 'white' }}>
        <View style={{ marginBottom: 10, padding: 5 }}>
          <RepositoryItem repo={repoInfo.data.repository} />
          <Pressable style={styles.button} onPress={() => openURL(repoInfo.data.repository.url)}>
            <Text style={{ color: 'white', textAlign: 'center' }}>
              Open in Github
            </Text>
          </Pressable>
        </View>
        <FlatList
          data={repoInfo.data.repository.reviews.edges}
          renderItem={({ item }) => <ReviewItem review={item} />}
          keyExtractor={({ id }) => id}
          ItemSeparatorComponent={ItemSeparator}
          style={{ backgroundColor: '#bfbfbf' }}
        />

      </View>
    </View>
  )
}

export default SingleRepoView