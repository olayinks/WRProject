import { FlatList } from "react-native";
import React, { useState } from "react";
import { IUser } from "../domain/interfaces";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";

interface propUser {
  users: IUser[];
}
export default function Home({ users }: propUser) {
  const [localUsers, setLocalUsers] = useState(
    users.map((user) => ({
      ...user,
      user_options: {
        isBlocked: false,
        isFollowing: false,
        isLongPressed: false,
      },
    }))
  );
  const [selectedId, setSelectedId] = useState<number>();
  const handleFollow = (selectedUser: IUser) => {
    setSelectedId(selectedUser.account_id);
    let allUsers: IUser[] = [];
    localUsers.forEach((user) => {
      if (user.account_id == selectedUser.account_id) {
        user.user_options.isFollowing = !user.user_options.isFollowing;
      }
      allUsers.push(user);
      setLocalUsers(allUsers);
    });
  };
  const handleLongPress = (selectedUser: IUser) => {
    let allUsers: IUser[] = [];
    localUsers.forEach((user) => {
      if (user.account_id === selectedId) {
        user.user_options.isLongPressed = false;
      }
      if (user.account_id === selectedUser.account_id)
        if (user.user_options.isBlocked)
          user.user_options.isLongPressed = false;
        else user.user_options.isLongPressed = true;
      allUsers.push(user);
    });
    setLocalUsers(allUsers);
    setSelectedId(selectedUser.account_id);
  };
  const handlePress = (selectedUser: IUser) => {
    if (selectedUser.account_id != selectedId) {
      let allUsers: IUser[] = [];
      localUsers.forEach((user) => {
        if (user.account_id === selectedId) {
          user.user_options.isLongPressed = false;
        }
        allUsers.push(user);
      });
      setLocalUsers(allUsers);
      setSelectedId(selectedUser.account_id);
    }
  };
  const handleBlock = (selectedUser: IUser) => {
    setSelectedId(selectedUser.account_id);
    let allUsers: IUser[] = [];
    localUsers.forEach((user) => {
      if (user.account_id == selectedUser.account_id) {
        user.user_options.isBlocked = true;
        user.user_options.isLongPressed = false;
      }
      allUsers.push(user);
      setLocalUsers(allUsers);
    });
  };

  return (
    <FlatList
      data={localUsers}
      keyExtractor={(user) => user.account_id.toString()}
      ItemSeparatorComponent={() => <ListItemSeparator />}
      extraData={selectedId}
      renderItem={({ item }) => (
        <ListItem
          selectedId={item.account_id}
          isBlockedUser={item.user_options?.isBlocked}
          isFollowingUser={item.user_options?.isFollowing}
          name={item.display_name}
          reputation={item.reputation}
          image={item.profile_image}
          key={item.account_id}
          showButtonBar={item.user_options.isLongPressed}
          onLongPress={() => handleLongPress(item)}
          onFollow={() => handleFollow(item)}
          onBlock={() => handleBlock(item)}
          onPress={() => handlePress(item)}
        />
      )}
    />
  );
}
