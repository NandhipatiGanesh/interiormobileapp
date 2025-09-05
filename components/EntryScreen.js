import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useRef } from "react";
import { Animated, Easing, StyleSheet, Text } from "react-native";
import colors from "../constants/colors";

export default function EntryScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <LinearGradient
      colors={[colors.bgSecondary, colors.bgPrimary]}
      style={styles.container}
    >
      <Animated.View style={{ opacity: fadeAnim }}>
        <Text style={styles.logo}>🚀 MyApp</Text>
        <Text style={styles.subtext}>Welcome to a retro experience</Text>
      </Animated.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  logo: { fontSize: 40, fontFamily: "BeVietnamPro-Bold", color: colors.text },
  subtext: {
    fontSize: 18,
    marginTop: 10,
    fontFamily: "BeVietnamPro-Regular",
    color: colors.text,
  },
});
