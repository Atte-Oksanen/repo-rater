import { FlatList, View, StyleSheet, TextInput } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories'
import React, { useState } from 'react';
import DropdownComponent from './DropDown';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = ({ repos }) => {
  const [menuOrder, setOrder] = useState({ mutation: 'CREATED_AT', dir: 'DESC' })
  const [searchText, setText] = useState('')
  const repositories = repos || useRepositories({ ...menuOrder, searchKeyword: searchText })

  return (
    <View>
      <TextInput
        onChangeText={value => setText(value)}
        value={searchText}
        placeholder='Search'
        style={{
          border: '1px solid #bfbfbf',
          padding: 5,
          borderRadius: 3,
          margin: 5
        }}
      />
      <DropdownComponent value={menuOrder} setValue={setOrder} />
      <FlatList
        data={repositories.repositories}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={item => <RepositoryItem repo={item.item} />}
        style={{ backgroundColor: '#bfbfbf' }}
      />
    </View>
  );
};

export default RepositoryList;