import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import UsersApi from "./app/api/UsersApi";
import TopBar from "./app/components/TopBar";
import { IUser, IUserList } from "./app/domain/interfaces";
import StartScreen from "./app/screens/StartScreen";
import colors from "./app/utils/colors";

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <StartScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.white,
    flex: 1,
  },
});
