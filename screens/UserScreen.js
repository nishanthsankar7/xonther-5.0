import * as React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
} from "react-native";
import {
  Button,
  Card,
  TextInput,
  Title,
  Text,
  Avatar,
  Divider,
} from "react-native-paper";
import Icon from "react-native-paper/src/components/Icon";

import items from "../tempData/food.json";
import { Images } from "../constants";
const UserScreen = () => {
  const [text, setText] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Card style={styles.userCard}>
        <Card.Content style={styles.avatar}>
          <Avatar.Image size={130} source={Images.DOGE} />
          <Text variant="headlineSmall">Nishanth Sankar</Text>
          <Divider />
          <Text style={styles.avatar} variant="titleMedium">
            User Id: 1234
          </Text>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium">Address</Text>
          <Text variant="bodyLarge">N0. 5/343 Abcd street, Chennai, India</Text>
          <Button style={styles.edit}>
            <Icon source="pencil" size={18} />
            Edit
          </Button>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium">Email</Text>
          <Text variant="bodyLarge">nishanth@gamil.com</Text>
          <Button style={styles.edit}>
            <Icon source="pencil" size={18} />
            Edit
          </Button>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium">Phone</Text>
          <Text variant="bodyLarge">+91 939339387</Text>
          <Button style={styles.edit}>
            <Icon source="pencil" size={18} />
            Edit
          </Button>
        </Card.Content>
      </Card>
    </SafeAreaView>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  title: {
    fontSize: 32,
  },
  avatar: {
    alignSelf: "center",
  },
  userCard: {
    margin: 25,
    borderRadius: 25,
  },
  edit: {
    alignSelf: "flex-end",
  },
  card: {
    margin: 10,
    borderRadius: 25,
  },
});
