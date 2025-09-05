import { StyleSheet, Text, TextInput, View } from "react-native";
import RetroButton from "../components/RetroButton";
import colors from "../constants/colors";

export default function AuthScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput placeholder="Phone Number" style={styles.input} />
      <TextInput placeholder="Enter OTP" style={styles.input} />
      <RetroButton title="Login" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: {
    fontSize: 28,
    fontFamily: "BeVietnamPro-Bold",
    marginBottom: 20,
    color: colors.text,
  },
  input: {
    borderWidth: 2,
    borderColor: colors.text,
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    fontFamily: "BeVietnamPro-Regular",
  },
});
