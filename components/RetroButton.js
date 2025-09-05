import colors from "@/constants/Colors";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function RetroButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.txt}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#000",
    borderWidth: 2,
    borderColor: colors.text,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderBottomWidth: 5,
    alignItems: "center",
    borderRadius: 28,
  },
  txt: {
    fontFamily: "BeVietnamPro-Bold", // ✅ font applied here
    fontSize: 18,
    color: "white",
  },
});
