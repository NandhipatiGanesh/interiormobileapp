import colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.bgSecondary, // active = purple
        tabBarInactiveTintColor: colors.text,      // inactive = black
        tabBarStyle: {
          backgroundColor:'white',
          borderTopWidth: 0,
          borderTopColor: colors.text,
        },
        headerShown: false,
      }}
    >
      {/* Projects Tab */}
      <Tabs.Screen
        name="index" // MUST point to app/(tabs)/index.tsx
        options={{
          title: "Projects",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="briefcase-outline" color={color} size={size} />
          ),
        }}
      />

      {/* Completed Tab */}
      <Tabs.Screen
        name="completed" // MUST point to app/(tabs)/completed.tsx
        options={{
          title: "Done",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="checkmark-done" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
