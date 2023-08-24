import * as React from "react";
import { Image, View, StyleSheet } from "react-native";
import {
  Button,
  TextInput,
  Text,
  Avatar,
  Card,
  IconButton,
} from "react-native-paper";
import { Images } from "../constants";

const CartScreen = ({ navigation }) => {
  const [text, setText] = React.useState("");
  const abcd = 2;

  if (abcd === 1) {
    return (
      <View>
        <Image style={styles.cartImage} source={Images.EMPTYCART} />
        <Text style={styles.title} variant="headlineLarge">
          Your Cart is Empty!
        </Text>
      </View>
    );
  } else {
    return (
      <View>
        <Card.Title
          style={styles.qtyTitle}
          title="Vegetable Salad"
          subtitle="1 Nos"
          left={(props) => <Avatar.Icon {...props} icon="food" />}
          right={() => <Text style={styles.price}>₹ 270</Text>}
        />
        <Text style={styles.billHeading}>Bill Details</Text>
        <Card style={styles.billMargin}>
          <Card.Content>
            <Text variant="titleLarge">Total</Text>
            <Text variant="bodyMedium">100</Text>
          </Card.Content>
        </Card>
        <Button
          icon="cash"
          mode="contained"
          style={styles.billMargin}
          onPress={() => navigation.navigate("User")}
        >
          Pay
        </Button>
      </View>
    );
  }
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 55,
    paddingLeft: 20,
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  cartImage: {
    width: 300,
    height: 300,
    alignSelf: "center",
    margin: 150,
  },
  title: {
    textAlign: "center",
    paddingBottom: 100
  },
  price: {
    padding: 30,
    fontWeight: "900",
    fontSize: 20
  },
  billHeading: {
    margin: 15,
    fontSize: 22,
    fontWeight: 700
  },
  billMargin: {
    //marginTop: 10,
    // marginLeft: 80,
    // marginRight: 80
    margin: 10,
    borderRadius: 25
  },
  billCard: {
    paddingLeft: 15,
    paddingRight: 200
  },
  qtyTitle: {
    marginTop: 80
  }
});
