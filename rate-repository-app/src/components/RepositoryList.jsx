import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useReposisitories from '../hooks/useRepositories'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const repositories = useReposisitories()
  return (
    <FlatList
      data={repositories.repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={item => <RepositoryItem repo={item} />}
      style={{ backgroundColor: '#bfbfbf' }}
    />
  );
};

export default RepositoryList;