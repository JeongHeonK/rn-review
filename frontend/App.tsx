import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import AuthStackNavigator from "./src/navigation/AuthStackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <AuthStackNavigator />
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
