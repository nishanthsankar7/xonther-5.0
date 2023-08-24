import { StyleSheet, Text, View, Button } from "react-native";

const VerificationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>VerificationScreen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Bootstrap")}
      />
    </View>
  );
};

export default VerificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
