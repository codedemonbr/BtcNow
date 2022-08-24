import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Splash } from "../screens/Splash";
import { AppRoutes } from "./app.routes";

const Stack = createNativeStackNavigator();

const SplashRoutes: React.FC = () => (
    <>
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Splash"
        >
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="App" component={AppRoutes} />
        </Stack.Navigator>
    </>
);

export { SplashRoutes };
