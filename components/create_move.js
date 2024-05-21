import React, { useState, useRef, useEffect } from 'react';
import { SafeAreaView, navigation, View, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MapView, { Circle } from 'react-native-maps';
import { Icon } from 'react-native-elements';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Slider from '@react-native-community/slider';
import { Ionicons } from '@expo/vector-icons';

<<<<<<< HEAD
const MapWithRadius = ({author}) => {
=======
const MapWithRadius = ( {navigation} ) => {
>>>>>>> 04530e4e4c0a731b85b582e51c5ae56653b63cac
  const mapRef = useRef(null);
  const [region, setRegion] = useState({
    latitude: 37.7749,
    longitude: -122.4194,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [radius, setRadius] = useState(8047); // 5 miles in meters
  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.animateToRegion(region);
    }
  }, [region]);
  const handleButtonPress = () => {
    alert('Move Created by!' + author + ' at ' + region.latitude + ', ' + region.longitude + ' with a radius of ' + (radius / 1609.34).toFixed(2) + ' miles');
    const moveInitInfo = {
      creator: author,
      questions: [], // Add questions here
      location: {
        latitude: region.latitude,
        longitude: region.longitude,
        radius: radius,
  },
},
createMove(moveInitInfo)
        .then(() => {
            console.log('Move created successfully');
            // navigation.navigate('waiting_room');
        })
        .catch((error) => {
            console.error('Error creating move:', error);
        });
 };
  const handleZoom = (type) => {
    console.log('handleZoom called', type);
    let newDelta = type === 'in' ? region.latitudeDelta / 2 : region.latitudeDelta * 2;
    if (mapRef.current) {
      mapRef.current.animateToRegion({ 
        ...region, 
        latitudeDelta: newDelta, 
        longitudeDelta: newDelta 
      }, 500);
    }
  };
  
  return (
    <View style={{ flex: 1 }}>
      <GooglePlacesAutocomplete containerStyle={styles.searchBarContainer}
        placeholder="Search for location"
        fetchDetails={true}
        onPress={(data, details = null) => {
          setRegion({
            ...region,
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
          });
        }}
        query={{
          key: 'AIzaSyCIPBNyynklZF6t7snFBUNaYDNP6VoM0EU',
          language: 'en',
        }}
        styles={{
          //center the search bar

          container: { marginTop: 55, flex: 0, position: 'absolute', width: '80%', alignSelf:'center',justifySelf: 'center', zIndex: 1 },
          listView: { backgroundColor: 'white' }
        }}
      />
      <MapView
        style={{ flex: 1 }}
        ref={mapRef}
        initialRegion={region}
        onRegionChange={setRegion}
        // move map to new region
        region={region}
        zoomEnabled={true}

      >
        <Circle
          center={{ latitude: region.latitude, longitude: region.longitude }}
          radius={radius}
          fillColor="rgba(100, 100, 240, 0.5)"
          strokeColor="rgba(100, 100, 240, 1)"
        />
      </MapView>
  
  <Icon style={styles.zoom}
  name='zoom-in'
  type='material'
  onPress={() => handleZoom('in')}
/>
<Icon
  name='zoom-out'
  type='material'
  onPress={() => handleZoom('out')}
/>
      <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={handleButtonPress}> 
            <Text style={styles.buttonContainer.text}>
            Create Move
            </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.sliderContainer}>
      <Text>Adjust Radius: {(radius / 1609.34).toFixed(2)} miles</Text>        
      <Slider
          style={{ width: '100%', height: 40 }}
          minimumValue={160.934}
          maximumValue={4828.03} // 3 miles in meters
          value={radius}
          onValueChange={value => setRadius(value)}
          minimumTrackTintColor="#0000FF"
          maximumTrackTintColor="#000000"
        />
      </View>

     
    </View>
  );
};

const styles = StyleSheet.create({
zoom: {
  position: 'absolute',
  top: 20,
  right: 20,
  backgroundColor: 'white',
  padding: 10,
  borderRadius: 20,
},
  buttonContainer: {
    position: 'absolute',
    bottom: 110,
    // decrease height of button
      height: 50,
      backgroundColor: 'white',

    padding: 10,
      borderWidth: 3,
      borderColor: 'black',
      justifySelf: 'center',
      alignSelf: 'center',
      width: 200,
      borderRadius: 20,
      padding: 10,
      text: {
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 'bold',
      }
    
  },
  sliderContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 20,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    padding: 10,
  }
});

export default MapWithRadius;
