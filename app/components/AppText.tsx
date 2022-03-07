import React, { ReactNode } from "react";
import { Text, StyleSheet, Platform, TextStyle } from "react-native";

interface Prop{
    children?:ReactNode,
    style?: TextStyle
}

function AppText({ children, style }:Prop): JSX.Element {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "san-francisco",
  },
});

export default AppText;
