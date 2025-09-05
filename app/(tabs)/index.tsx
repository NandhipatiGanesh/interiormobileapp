import RetroButton from "@/components/RetroButton";
import colors from "@/constants/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";

const projects = [
  { id: "1", title: "Living Room Design", desc: "Retro style with warm tones" },
  { id: "2", title: "Kitchen Setup", desc: "Minimalist cabinets and layout" },
  { id: "3", title: "Workspace", desc: "Functional desk + lighting setup" },
];


export default function HomeScreen() {
  const router = useRouter();

  const resetOnboarding = async () => {
    await AsyncStorage.removeItem("onboardingSeen");
    router.replace("/onboarding");
  };


  return (
    <>
    <View style={styles.container}>
      <Text style={styles.header}>Your Projects</Text>

      <FlatList
        data={projects}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.desc}</Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </View>
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <RetroButton title="🔄 Reset Onboarding" onPress={resetOnboarding} />
    </View>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgPrimary,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontFamily: "BeVietnamPro-Bold",
    marginBottom: 20,
    color: colors.text,
  },
  card: {
    backgroundColor: colors.bgSecondary,
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.text,
  },
  title: {
    fontSize: 18,
    fontFamily: "BeVietnamPro-Bold",
    color: colors.bgFourth,
  },
  desc: {
    fontSize: 14,
    fontFamily: "BeVietnamPro-Regular",
    color: colors.bgFourth,
  },
});