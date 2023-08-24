import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Button, Card, TextInput, Title } from "react-native-paper";
import items from "../tempData/food.json";

const UserScreen = () => {
  const [text, setText] = React.useState("");

  let DATA = [];

  items.forEach((x) => {
    DATA.push(x);
  });

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card>
            <Card.Content>
              <Text variant="titleLarge">{item.id}</Text>
              <Text variant="bodyMedium">{item.description}</Text>
            </Card.Content>
          </Card>
        )}
      />
      <Text>sdf</Text>
    </SafeAreaView>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
