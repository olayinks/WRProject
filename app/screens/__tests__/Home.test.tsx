import React from "react";
import renderer from "react-test-renderer";
import ListItem from "../../components/ListItem";
import { IUserList } from "../../domain/interfaces";
import Home from "../Home";
import userApi from "./api/users.json";

describe("<Home />", () => {
  it("has 1 child", () => {
    let userList = userApi as IUserList;
    const tree: any = renderer.create(<Home users={userList.items} />).toJSON();
    expect(tree?.children?.length).toBe(1);
  });
});

describe("Testing ListItem", () => {
  test("ListItem should have 3 children", () => {
    let userList = userApi as IUserList;
    let user = userList.items[0];
    user.user_options = {
      isBlocked: false,
      isFollowing: false,
      isLongPressed: false,
    };

    const componentTree: any = renderer
      .create(
        <ListItem
          isBlockedUser={user.user_options.isBlocked}
          isFollowingUser={user.user_options.isFollowing}
          name={user.display_name}
          reputation={user.reputation}
          image={user.profile_image}
          selectedId={user.account_id}
          showButtonBar={user.user_options.isLongPressed}
        />
      )
      .toJSON();

    expect(componentTree?.children?.length).toBe(1);
  });
});
