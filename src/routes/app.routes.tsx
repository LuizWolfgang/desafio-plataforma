import React from "react";
import { Platform } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { StackCourses } from "./stack.routes";
import { Home } from "../screens/Home";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#8f7a7a",
        tabBarInactiveTintColor: "#323030",
        tabBarStyle: {
          backgroundColor: `${theme.colors.header}`,
          borderTopWidth: 0,
          height: Platform.OS === "android" ? 60 : 80,
          paddingBottom: Platform.OS === "android" ? 10 : 25,
          paddingTop: 6,
        },
        tabBarLabelStyle: {
          color: "#fefefed4",
          fontSize: 13,
          fontWeight: "bold",
        },
        tabBarBadgeStyle: {
          fontWeight: "bold",
          fontSize: 30,
        },
      }}
    >
      <Screen
        name="Inicio"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />

      <Screen
        name="Cursos"
        component={StackCourses}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Navigator>
  );
}
