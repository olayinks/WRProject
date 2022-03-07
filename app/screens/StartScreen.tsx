import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import TopBar from "../components/TopBar";
import Home from "./Home";
import colors from "../utils/colors";
import UsersApi from "../api/UsersApi";
import { IUser, IUserList } from "../domain/interfaces";

const StartScreen = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("Loading !!!");
  const [statusBackground, setStatusBackground] = useState(colors.grey);

  useEffect(() => {
    console.log("Starting");
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const { data, ok, problem, status } = await UsersApi.getUsers();

    console.log("orError", status);
    if (ok) {
      let userResponse = data as IUserList;
      setUsers(userResponse.items);
      setLoading(false);
      setStatus("Loaded");
      console.log(userResponse);
    } else {
      setStatusBackground(colors.danger);
      setStatus(`An error occured - ${problem}`);
    }
  };
  return (
    <View>
      <TopBar title={"World Remit"} />
      {loading ? (
        <View style={styles.viewStyle}>
          <Text
            style={[styles.textStyle, { backgroundColor: statusBackground }]}
          >
            {status}
          </Text>
        </View>
      ) : (
        <Home users={users} />
      )}
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  textStyle: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: colors.danger,
  },
});
