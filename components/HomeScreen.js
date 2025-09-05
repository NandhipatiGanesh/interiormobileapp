import { StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>🏠 Home Tab</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  txt: { fontSize: 22, fontFamily: "BeVietnamPro-Bold", color: colors.text },
});
