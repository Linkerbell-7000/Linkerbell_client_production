import React, { useEffect } from "react";
import { Animated, StyleProp, ViewStyle } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Favorite from "../screens/favorite";
import Home from "../screens/home";
import Trending from "../screens/trending";
import List from "../screens/list";
import Mypage from "../screens/myPage";
import useLinkData from "../hooks/useLinkData";
import useApp from "../hooks/useApp";
import EditPassword from "../screens/editPassword";

type NavProps = {
  focused: boolean;
  color: string;
};

const HomeStack = (): JSX.Element => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{ header: () => null }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Mypage" component={Mypage} />
      <Stack.Screen name="EditPassword" component={EditPassword} />
    </Stack.Navigator>
  );
};

const BottomTabNav = (): JSX.Element => {
  const Tab = createBottomTabNavigator();
  const {
    fetchAllList,
    updateCategoriesUrlList,
    all_category_url_list,
  } = useLinkData();
  useEffect(() => {
    fetchAllList();
  }, []);

  useEffect(() => {
    updateCategoriesUrlList(all_category_url_list);
  }, [all_category_url_list]);

  const renderTapBarStyle = ():
    | Animated.WithAnimatedValue<StyleProp<ViewStyle>>
    | undefined => {
    return {
      borderRadius: 0,
      borderTopLeftRadius: 28,
      borderTopRightRadius: 28,

      backgroundColor: "#fff",
      position: "absolute",
      bottom: 0,
      paddingBottom: 0,
      height: 68,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.08,
      shadowRadius: 16,
      elevation: 19,
    };
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // eslint-disable-next-line react/display-name
        tabBarIcon: ({ focused }: NavProps) => {
          let iconName = "";
          const { name } = route;
          const renderColor = focused ? "#4e4e4e" : "#b9b9b9";
          if (name === "Home") {
            iconName = "home";
          } else if (name === "Favorite") {
            iconName = "bookmark-multiple";
          } else if (name === "Trending") {
            iconName = "file-document-box";
          } else if (name === "Mypage") {
            iconName = "account";
          }
          return (
            <MaterialCommunityIcons
              name={`${iconName}-outline`}
              size={name === "Home" ? 32 : 28}
              color={renderColor}
            />
          );
        },
      })}
      tabBarOptions={{ style: renderTapBarStyle() }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarLabel: "",
        }}
      />
      {/* <Tab.Screen
        name="Trending"
        component={Trending}
        options={{
          tabBarLabel: "",
        }}
      /> */}
      <Tab.Screen
        name="Mypage"
        component={Mypage}
        options={{
          tabBarLabel: "",
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
