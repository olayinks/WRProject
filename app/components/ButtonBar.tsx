import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import colors from "../utils/colors";
import { IUser } from "../domain/interfaces";

interface Prop {
  title1?: string;
  title2?: string;
  onPress1?: (event: GestureResponderEvent) => void;
  onPress2?: () => void;
}
export default function ButtonBar({
  onPress1,
  title1,
  onPress2,
  title2,
}: Prop) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onPress1}>
        <Text style={styles.text}>{title1}</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={onPress2}>
        <Text style={styles.text}>{title2}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    marginRight: 4,
    marginTop: 2,
    paddingHorizontal: 20,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: colors.secondary,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
