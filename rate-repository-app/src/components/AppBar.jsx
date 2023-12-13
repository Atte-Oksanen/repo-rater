import { View, StyleSheet, Text, ScrollView, Pressable } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';
import useLoggedIn from '../hooks/useLoggedIn';
import { useApolloClient } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    // ...
  },
  text: {
    color: 'white'
  }
});

const AppBar = () => {
  const { loggedIn } = useLoggedIn()
  const apolloClient = useApolloClient()
  const authStorage = useAuthStorage()

  const logOut = async () => {
    await authStorage.removeAccessToken()
    apolloClient.resetStore()
  }
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to='/'>
          <Text style={styles.text}>Repositories</Text>
        </Link>
        {!loggedIn &&
          <>
            <Link to='/signin'>
              <Text style={styles.text}>Sign in</Text>
            </Link>
            <Link to='/signup'>
              <Text style={styles.text}>Sign up</Text>
            </Link>
          </>
        }
        {loggedIn &&
          <>
            <Link to='/new-review'>
              <Text style={styles.text}>Create a review</Text>
            </Link>
            <Link to='/my-reviews'>
              <Text style={styles.text}>My reviews</Text>
            </Link>

            <Pressable onPress={() => logOut()}>
              <Text style={styles.text}>Sign out</Text>
            </Pressable>
          </>
        }
      </ScrollView>
    </View>
  );
};

export default AppBar;