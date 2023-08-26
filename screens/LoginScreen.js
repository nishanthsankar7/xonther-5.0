import * as React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { TextInput, Text, Button, Card } from "react-native-paper";

const LoginScreen = ({ navigation }) => {
  const [text, setText] = React.useState("");

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.text} variant="headlineMedium">
            Login
          </Text>
          <TextInput
            style={styles.textInput}
            label="Email"
            placeholder="Enter your Registered Email Id"
            value={text}
            onChangeText={(text) => setText(text)}
          />
          <TextInput
            style={styles.textInput}
            label="Password"
            secureTextEntry
            right={<TextInput.Icon icon="eye" />}
          />
          <Button
            mode="contained"
            onPress={() => navigation.navigate("Verification")}
          >
            {" "}
            Login
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    marginTop: 150
  },
  card: {
    margin: 10,
    borderRadius: 25,
  },
  textInput: {
    margin: 12,
  },
  text: {
    textAlign: "center"
  }
});
