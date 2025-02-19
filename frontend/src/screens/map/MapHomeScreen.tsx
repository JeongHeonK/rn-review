import React from "react";
import { StyleSheet, Text, View } from "react-native";
import useAuth from "../../hooks/queries/useAuth";
import CustomButton from "../../components/CustomButton";

function MapHomeScreen() {
  const { logoutMutation } = useAuth();
  return (
    <View>
      <Text>map screen</Text>
      <CustomButton
        label="로그아웃"
        variant="filled"
        size="large"
        onPress={() => {
          logoutMutation.mutate(null);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default MapHomeScreen;
