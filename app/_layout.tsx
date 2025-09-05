import { useColorScheme } from "@/hooks/useColorScheme";
import {
  BeVietnamPro_400Regular,
  BeVietnamPro_500Medium,
  BeVietnamPro_600SemiBold,
  BeVietnamPro_700Bold,
  useFonts,
} from "@expo-google-fonts/be-vietnam-pro";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import "react-native-reanimated";

export default function RootLayout() {
  const colorScheme = useColorScheme();
    const [loaded] = useFonts({
    "BeVietnamPro-Regular": BeVietnamPro_400Regular,
    "BeVietnamPro-Medium": BeVietnamPro_500Medium,
    "BeVietnamPro-SemiBold": BeVietnamPro_600SemiBold,
    "BeVietnamPro-Bold": BeVietnamPro_700Bold,
  });


  const [showOnboarding, setShowOnboarding] = useState<boolean | null>(null);

  useEffect(() => {
    const checkOnboarding = async () => {
      const seen = await AsyncStorage.getItem("onboardingSeen");
      setShowOnboarding(!seen);
    };
    checkOnboarding();
  }, []);

  if (!loaded || showOnboarding === null) {
    return null; // wait until fonts and onboarding check are ready
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
           headerTitleStyle: { fontFamily: "BeVietnamPro-Medium" },
            headerShown: false,
        }}
        
      >
        {showOnboarding ? (
          <Stack.Screen name="onboarding" options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name="index" options={{ headerShown: false }} />
        )}
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}