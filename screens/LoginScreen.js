import { StyleSheet, Text, View, Button, StatusBar } from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent />
      <Text>LoginScreen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Verification")}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
