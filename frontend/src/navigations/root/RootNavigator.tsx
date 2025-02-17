import React from "react";
import { StyleSheet, View } from "react-native";
import AuthStackNavigator from "../AuthStackNavigator";
import MainDrawerNavigator from "../drawer/MainDrawerNavigator";

function RootNavigator({}) {
  const isLogIn = true;
  return <>{isLogIn ? <MainDrawerNavigator /> : <AuthStackNavigator />}</>;
}

const styles = StyleSheet.create({});

export default RootNavigator;
