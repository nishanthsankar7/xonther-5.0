import * as React from "react";
import { useState } from "react";
import { View, StyleSheet, Image, FlatList, StatusBar } from "react-native";
import { Modal, Portal, Button, Card, Text, FAB } from "react-native-paper";

import { Images } from "../constants";
import { ScrollView } from "react-native";
import Icon from "react-native-paper/src/components/Icon";

import items from "../tempData/food.json";
import { SafeAreaView } from "react-native-safe-area-context";

let DATA = [];

items.forEach((x) => {
  DATA.push(x);
});

const HomeScreen = () => {
  const [visible, setVisible] = React.useState(false);
  const [count, setCount] = useState(0);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };

  // const addCount = () => {
  //   if(count < 5 ) {
  //         setCount(count + 1);
  //   }
  // };
  // const reduceCount = () => {
  //   if (count > 0) {
  //     setCount(count - 1);
  //   }
  // }

  // const [data, setData] = useState([DATA]);

  // const addQty = (ind) => {
    
  //   setData(
  //     data.map((obj, index) => {
  //       index == ind ? { ...obj, qty: obj.qty + 1 } : obj;
  //       console.log(obj)
  //     }
  //     )
      
  //   );
  // };

  const selectedItem = (item) => {
    console.log(item.name);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* <StatusBar
          animated={true}
          backgroundColor="#fff"
          
        /> */}
        <Image style={styles.title} source={Images.XONTHERLOGO} />
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <Card style={styles.menuCard}>
              <Card.Content>
                <Text variant="titleLarge">{item.name}</Text>
              </Card.Content>
              <Card.Cover style={styles.image} source={Images.SALAD} />
              <Card.Actions>
                <Button>Cancel</Button>
                <Button onPress={() => selectedItem(item)}>Ok</Button>
              </Card.Actions>
            </Card>
          )}
        />
      </SafeAreaView>
      {/* <View>
        {count > 0 && (
          <FAB
            icon="cart"
            style={styles.fab}
            label="Go to Cart"
            onPress={() => console.log("Pressed")}
          />
        )}
      </View> */}
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    height: 30,
    width: 30,
    alignSelf: "center",
    marginBottom: 10,
  },
  menuCard: {
    margin: 10,
    borderRadius: 18,
  },
  image: {
    height: 180,
    width: 330,
    margin: 16,
    borderRadius: 20,
  },
  bottomGap: {
    margin: 35,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
