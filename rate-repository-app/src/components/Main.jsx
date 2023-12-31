import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import { NativeRouter, Route, Routes, Navigate } from 'react-router-native';
import SignIn from './SignIn';
import SingleRepoView from './SingleRepoView';
import NewReview from './NewReview';
import SignUp from './SignUp';
import UserReviews from './UserReviews';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <NativeRouter>
      <AppBar />
      <Routes>
        <Route path='/' element={
          <View style={styles.container}>
            <RepositoryList />
          </View>
        } />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/repository/:id' element={<SingleRepoView />} />
        <Route path='/new-review' element={<NewReview />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/my-reviews' element={<UserReviews />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </NativeRouter>
  );
};

export default Main;