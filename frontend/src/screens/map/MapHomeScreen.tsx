import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

function MapHomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <MapView style={styles.mapContainer} provider={PROVIDER_GOOGLE} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 1,
  },
});

export default MapHomeScreen;
