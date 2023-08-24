import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { MD3LightTheme as DefaultTheme } from "react-native-paper";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import UserScreen from "./screens/UserScreen";
import CartScreen from "./screens/CartScreen";
import SplashScreen from "./screens/SplashScreen";
import LoginScreen from "./screens/LoginScreen";
import VerificationScreen from "./screens/VerificationScreen";

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTabScreen() {
  return (           
        <Tab.Navigator
          initialRouteName="Home"
          backBehavior="initialRoute"
          shifting={true}
          sceneAnimationEnabled={true}
          screenOptions={() => ({
            tabBarActiveTintColor: "yellow",
            tabBarInactiveTintColor: "yellow",
            headerShown: false,
          })}
        >         
       
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: "home",
            }}
          />
          <Tab.Screen
            name="Cart"
            component={CartScreen}
            options={{
              tabBarIcon: "cart",
            }}
          />
          <Tab.Screen
            name="User"
            component={UserScreen}
            options={{
              tabBarIcon: "account",
            }}
          />
        </Tab.Navigator>   
  );
}

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Splash"
            component={SplashScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Bootstrap"
            component={BottomTabScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen name="Verification" component={VerificationScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
