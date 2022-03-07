import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../utils/colors";
import AppText from "./AppText";

interface prop {
  title: string;
}
export default function TopBar({ title }: prop) {
  return (
    <View style={styles.container}>
      <AppText style={styles.titleText}>{title}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    height: 52,
    flexDirection: "row",
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 20,
  },
});
