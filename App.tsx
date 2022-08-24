import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { VariationProvider } from "./hooks/useVariation";
import { SplashRoutes } from "./routes/splash.routes";

export default function App() {
    const toogle = true;
    return (
        <NavigationContainer>
            <VariationProvider>
                <SplashRoutes />
                <StatusBar style="light" />
            </VariationProvider>
        </NavigationContainer>
    );
}
