import { Image, StyleSheet, Text, View } from "react-native"
import ItemTextField from "./ItemTextField"
import React from "react"
import { Link } from "react-router-native"

const RepositoryItem = ({ repo }) => {

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
    },
    image: {
      height: 40,
      width: 40,
      borderRadius: 3,
      marginRight: 20
    },
    language: {
      padding: 5,
      backgroundColor: '#007dff',
      color: 'white',
      borderRadius: 3
    },
    lightText: {
      color: '#4d4d4d'
    },
    bold: {
      fontWeight: '500'
    },
    textMargin: {
      lineHeight: 25
    }
  })
  return (
    <Link to={`/repository/${repo.id}`}>
      <View testID="repoItem" style={{ padding: 5, marginBottom: 5, backgroundColor: 'white' }}>
        <View style={styles.container}>
          <Image source={{ uri: repo.ownerAvatarUrl }} style={styles.image} />
          <Text>
            <Text style={{ ...styles.bold, ...styles.textMargin }}>
              {repo.fullName}
            </Text>
            <br />
            <Text style={{ ...styles.textMargin, ...styles.lightText }}>
              {repo.description}
            </Text>
            <br />
            <Text style={{ ...styles.language, ...styles.textMargin }}>
              {repo.language}
            </Text>
            <br />
          </Text>
        </View>
        <View style={{ ...styles.container, flex: 4, padding: 5 }}>
          <ItemTextField mainElement={repo.stargazersCount} secondaryElement={'Stars'} />
          <ItemTextField mainElement={repo.forksCount} secondaryElement={'Forks'} />
          <ItemTextField mainElement={repo.reviewCount} secondaryElement={'Reviews'} />
          <ItemTextField mainElement={repo.ratingAverage} secondaryElement={'Rating'} />
        </View>
      </View>
    </Link>
  )
}

export default RepositoryItem