import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Image,
  GestureResponderEvent,
} from "react-native";
import React, { useState } from "react";
import colors from "../utils/colors";
import AppText from "./AppText";
import ButtonBar from "./ButtonBar";

interface IListProp {
  name: string;
  selectedId: number;
  reputation: number;
  isFollowingUser: boolean;
  isBlockedUser: boolean;
  image?: string;
  showButtonBar: boolean;
  onLongPress?: () => void;
  onFollow?: () => void;
  onBlock?: () => void;
  onPress?: () => void;
}

export default function ListItem({
  selectedId,
  image,
  name,
  reputation,
  isBlockedUser,
  isFollowingUser,
  showButtonBar,
  onLongPress,
  onPress,
  onBlock,
  onFollow,
}: IListProp) {
  let backgroundColor = isBlockedUser ? colors.grey : colors.white;
  let followingIconPath = "../../assets/following.png";
  let blockedIconPath = "../../assets/block.png";
  return (
    <TouchableHighlight
      underlayColor={colors.light}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <View style={[styles.container, { backgroundColor: backgroundColor }]}>
        {image && <Image style={styles.image} source={{ uri: image }} />}
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{name}</AppText>
          {reputation && (
            <AppText style={styles.subTitle}>{reputation}</AppText>
          )}
          {showButtonBar && (
            <View style={styles.buttonContainer}>
              <ButtonBar
                title1={isFollowingUser ? "Unfollow" : "Follow"}
                title2={"Block"}
                onPress1={onFollow}
                onPress2={onBlock}
              />
            </View>
          )}
        </View>
        {isFollowingUser && !isBlockedUser && (
          <Image
            style={styles.iconContainer}
            source={require(followingIconPath)}
          />
        )}
        {isBlockedUser && (
          <Image
            style={styles.iconContainer}
            source={require(blockedIconPath)}
          />
        )}
      </View>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  blockedContainer: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.grey,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  iconContainer: {
    marginLeft: "auto",
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonContainer: {
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});
