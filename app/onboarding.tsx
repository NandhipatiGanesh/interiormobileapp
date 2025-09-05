import RetroButton from "@/components/RetroButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import colors from "../constants/Colors";

const { width } = Dimensions.get("window");

const slides = [
  { id: "1", title: "Welcome", desc: "Explore the retro design experience 🚀" },
  { id: "2", title: "Customize", desc: "Tailor the app to your style 🎨" },
  { id: "3", title: "Get Started", desc: "Let’s begin your journey 🏁" },
];

export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const router = useRouter();

  useEffect(() => {
    const checkOnboarding = async () => {
      const seen = await AsyncStorage.getItem("onboardingSeen");
      if (seen) {
        router.replace("/"); // skip onboarding if already seen
      }
    };
    checkOnboarding();
  }, []);

  const handleNext = async () => {
    if (currentIndex < slides.length - 1) {
      const nextIndex = currentIndex + 1;
      flatListRef.current?.scrollToOffset({ offset: nextIndex * width });
      setCurrentIndex(nextIndex); // update state immediately
    } else {
      await AsyncStorage.setItem("onboardingSeen", "true");
      router.replace("/"); // go to entry screen
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        ref={flatListRef}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => {
          const index = Math.round(e.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.desc}</Text>
          </View>
        )}
      />
      <View style={styles.footer}>
        <RetroButton
          title={currentIndex === slides.length - 1 ? "Get Started" : "Next"}
          onPress={handleNext}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bgPrimary },
  slide: {
    width,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
     fontFamily: "BeVietnamPro-Bold",
    color: colors.text,
    marginBottom: 12,
  },
  desc: {
    fontSize: 18,
    fontFamily: "BeVietnamPro-Regular",
    color: colors.text,
    textAlign: "center",
  },
  footer: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    alignItems: "center",
  },
});
