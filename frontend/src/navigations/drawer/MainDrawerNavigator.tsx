import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { StyleSheet, View } from "react-native";
import MapHomeScreen from "../../screens/MapHomeScreen";
import FeedHomeScreen from "../../screens/FeedHomeScreen";
import CalendarHomeScreen from "../../screens/CalendarHomeScreen";

const Drawer = createDrawerNavigator();

function MainDrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MapHome" component={MapHomeScreen} />
      <Drawer.Screen name="FeedHome" component={FeedHomeScreen} />
      <Drawer.Screen name="CalendarHome" component={CalendarHomeScreen} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});

export default MainDrawerNavigator;
