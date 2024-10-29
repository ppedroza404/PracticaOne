import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (    
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "about",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "infocirlceo" : "infocirlce"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="blog"
        options={{
          title: "blog",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "sharealt" : "sharealt"}
              color={color}
            />
          ),
        }}
      />            
    </Tabs>
    
  );
}
