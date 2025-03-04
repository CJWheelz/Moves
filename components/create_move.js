// i asked chatgpt to fix the map and make it smooth for me, and it worked so i used the code
import React, { useState, useRef, useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MapView, { Circle } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Slider from '@react-native-community/slider';
import useStore from '../store';

const MapWithRadius = ({ navigation }) => {
  const mapRef = useRef(null);
  const [region, setRegion] = useState({
    latitude: 37.7749,
    longitude: -122.4194,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [radius, setRadius] = useState(1609); // 1 mile in meters
  const setRadiusSlice = useStore((state) => state.createMoveSlice.setRadius);
  const setLocationSlice = useStore((state) => state.createMoveSlice.setLocation);
  const creator = useStore((state) => state.createMoveSlice.creator);
  const createMove = useStore((state) => state.createMoveSlice.createMove);
  const setJoinCode_create = useStore((state) => state.createMoveSlice.setJoinCode);
  const setJoinCode2_join = useStore((state) => state.joinMoveSlice.setJoinCode);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.animateToRegion(region, 1000); // Animate map to new region
    }
  }, [region]);

  const handleButtonPress = async () => {
    const moveInitInfo = {
      creator: creator,
      questions: [], // Add questions here
      location: {
        latitude: region.latitude,
        longitude: region.longitude,
      },
      radius: radius,
      status: 'IN_PROGRESS',
    };
    await setRadiusSlice(radius);
    await setLocationSlice(moveInitInfo.location);
    try {
      const response = await createMove(navigation);
      setJoinCode_create(response.data);
      setJoinCode2_join(response.data);
      console.log(response.data);
    } catch (error) {
      alert('Create Move Failed: ' + error);
    }
  };

  const handleZoom = (type) => {
    let newDelta = type === 'in' ? region.latitudeDelta / 2 : region.latitudeDelta * 2;
    if (mapRef.current) {
      mapRef.current.animateToRegion({
        ...region,
        latitudeDelta: newDelta,
        longitudeDelta: newDelta,
      }, 500);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <GooglePlacesAutocomplete
        containerStyle={styles.searchBarContainer}
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
          container: { marginTop: 55, flex: 0, position: 'absolute', width: '80%', alignSelf: 'center', zIndex: 1 },
          listView: { backgroundColor: 'white' },
        }}
      />
      <MapView
        style={{ flex: 1 }}
        ref={mapRef}
        initialRegion={region}
        onRegionChangeComplete={(newRegion) => setRegion(newRegion)}
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
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Create Move</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.sliderContainer}>
        <Text>Adjust Radius: {(radius / 1609.34).toFixed(2)} miles</Text>
        <Slider
          style={{ width: '100%', height: 40 }}
          minimumValue={160.934}
          maximumValue={4828.03} // 3 miles in meters
          value={radius}
          onValueChange={(value) => setRadius(value)}
          minimumTrackTintColor="#0000FF"
          maximumTrackTintColor="#000000"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    marginTop: 55,
    flex: 0,
    position: 'absolute',
    width: '80%',
    alignSelf: 'center',
    zIndex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 110,
    height: 50,
    backgroundColor: 'white',
    padding: 10,
    borderWidth: 3,
    borderColor: 'black',
    justifySelf: 'center',
    alignSelf: 'center',
    width: 200,
    borderRadius: 20,
    textAlign: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  sliderContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 20,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    padding: 10,
  },
});

export default MapWithRadius;
