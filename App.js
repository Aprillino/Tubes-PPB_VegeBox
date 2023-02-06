import { View, Text, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
//import Home from "./page/Home";
//import Detail from "./page/detailNews";
//import About from "./page/About";
import Ionicons from "@expo/vector-icons/Ionicons";
import LoginScreen from "./page/login";
import RegisScreen from "./page/regist";
import Menu from "./page/menu";
import About from "./page/about";
import Pickup from "./page/pickup";
import Profile from "./page/profile";
import Update from "./page/update"; 
import MapsScreen from "./page/maps";
import History from "./page/history";
import Front from "./page/front";
import ListMenu from "./page/listMenu";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// const BottomNavigator = () => {
//   return (
//     // <Tab.Navigator
//     //   screenOptions={({ route }) => ({
//     //     tabBarIcon: ({ focused, color, size }) => {
//     //       let iconName;
//     //       let rn = route.name;
//     //       if (rn === "Home") {
//     //         iconName = "home-outline";
//     //       } else if (rn === "About") {
//     //         iconName = "information-outline";
//     //       }
//     //       return <Ionicons name={iconName} size={24} color="black" />;
//     //     },
//     //     tabBarStyle: {
//     //       height: 50,
//     //     },
//     //   })}
//     // >
//     //   <Tab.Screen
//     //     name="Home"
//     //     component={Home}
//     //     options={{
//     //       unmountOnBlur: true,
//     //       headerShown: false,
//     //       tabBarLabel: () => {
//     //         return null;
//     //       },
//     //     }}
//     //   />
//     //   <Tab.Screen
//     //     name="About"
//     //     component={About}
//     //     options={{
//     //       unmountOnBlur: true,
//     //       headerShown: false,
//     //       tabBarLabel: () => {
//     //         return null;
//     //       },
//     //     }}
//     //   />
//     // </Tab.Navigator>
//   );
// };

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash"  >
        {/* <Stack.Screen name="BottomNavigator" component={BottomNavigator} options={{ headerShown: false }} /> */}
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Regist" component={RegisScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
        <Stack.Screen name="ListMenu" component={ListMenu} options={{ headerShown: false }} />
        <Stack.Screen name="About" component={About} options={{ headerShown: false }} />
        <Stack.Screen name="Pickup" component={Pickup} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="Update" component={Update} options={{ headerShown: false }} />
        <Stack.Screen name="Maps" component={MapsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="History" component={History} options={{ headerShown: false }} />
        <Stack.Screen name="Splash" component={Front} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
