import * as React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { TextInput, Text, Button, Card } from "react-native-paper";

const VerificationScreen = ({ navigation }) => {
  const [text, setText] = React.useState("");

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.text} variant="headlineMedium">
            Verification
          </Text>
          <TextInput
            style={styles.textInput}
            label="Verify OTP"
            placeholder="Please Enter the OTP"
            value={text}
            onChangeText={(text) => setText(text)}
          />
          <Button
            mode="contained"
            onPress={() => navigation.navigate("Bootstrap")}
          >
            {" "}
            Verify
          </Button>
        </Card.Content>
      </Card>
      
    </View>
  );
};

export default VerificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    marginTop: 150,
  },
  card: {
    margin: 10,
    borderRadius: 25,
  },
  textInput: {
    margin: 12,
  },
  text: {
    textAlign: "center",
  },
});
