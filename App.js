import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import HomeScreen from "./src/screens/HomeScreen";
import NewScreen from "./src/screens/NewScreen";
import { StyleSheet, Text, View } from "react-native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#228CDB",
          },
          headerTintColor: "#fff",
        }}
        initialRouteName="Home"
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Icon
                name="plus"
                type="feather"
                color="#fff"
                style={style.headerIcon}
                onPress={() => navigation.navigate("New")}
              />
            ),
          })}
        />
        <Stack.Screen name="New" component={NewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const style = StyleSheet.create({
  headerIcon: {
    marginRight: 10,
  },
});
