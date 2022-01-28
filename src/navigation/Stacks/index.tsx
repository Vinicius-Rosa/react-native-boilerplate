import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "src/screens";
import { Tabs } from "../Tabs";

const Stacks = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />

      <Stack.Screen name="LoggedStack" component={Tabs} />
    </Stack.Navigator>
  );
};

export default Stacks;
