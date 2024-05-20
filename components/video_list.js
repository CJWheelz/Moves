/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect }  from 'react';
import { SearchBar } from 'react-native-elements';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import youtubeSearch from '../services/youtube-api';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'rgb(240,240,240)',
    },
    thumbnail: {
      width: 100,
      height: 100,
      marginRight: 5,
      backgroundColor: 'black',
    },
    rightContainer: {
      flex: 1,
      padding: 5,
      height: 100,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 3,
    },
    subtitle: {
      fontSize: 12,
    },
    separator: {
      height: 1,
      backgroundColor: 'rgb(200,200,200)',
    },
    listView: {
      backgroundColor: 'rgb(240,240,240)',
    },
    loading: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });  

const VideoCell = ({ video }) => {
  const navigation = useNavigation();
  return (
    <TouchableHighlight 
      onPress={() => { 
        navigation.navigate('Detail', { video })
      }} 
      underlayColor="orange"
    >
      <View>
        <View style={styles.container}>
          <Image
            source={{ uri: video.snippet.thumbnails.default.url }}
            style={styles.thumbnail}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{video.snippet.title}</Text>
            <Text style={styles.subtitle}>{video.snippet.description}</Text>
          </View>
        </View>
        <View style={styles.separator} />
      </View>
    </TouchableHighlight>
  );
}

const VideoList = () => {
  const [query, setQuery] = useState('');
  const [dataSource, setDataSource] = useState([]);
  
  // add useEffect here
  useEffect(() => {
    youtubeSearch(query)
      .then((responseData) => {
        setDataSource(responseData);
      }).catch((error) => {
        console.log(error);
      });
  }, [query]);

  return (
    <View>
      <SearchBar
        showsCancelButton={false}
        onChangeText={(newQuery) => {
          setQuery(newQuery);
        }}
        value={query}
        inputContainerStyle={{ backgroundColor: 'white' }}
        containerStyle={{ backgroundColor: "#c4302b" }}
      />

      <FlatList
        data={dataSource}
        renderItem={({ item }) => { return <VideoCell video={item} /> }}
        keyExtractor={(item) => item.snippet.thumbnails.default.url}
        style={styles.listView}
      />
    </View>
  );
}

export default VideoList;