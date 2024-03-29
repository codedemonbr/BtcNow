import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Currency } from "../screens/Currency";
import { Dashboard } from "../screens/Dashboard";
import Tips from "../screens/Tips";

const App = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
  <>
    <App.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <App.Screen name="Home" component={Dashboard} />
      <App.Screen name="Currency" component={Currency} />
      <App.Screen name="Tips" component={Tips} />
    </App.Navigator>
  </>
);

export { AppRoutes };
