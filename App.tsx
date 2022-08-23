import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { VariationProvider } from "./hooks/useVariation";
import { AppRoutes } from "./routes/app.routes";

export default function App() {
    const toogle = true;
    return (
        <NavigationContainer>
            <VariationProvider>
                <AppRoutes />
                <StatusBar style="light" />
            </VariationProvider>
        </NavigationContainer>
    );
}
