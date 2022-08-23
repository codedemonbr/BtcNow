import { StatusBar } from "expo-status-bar";
import React from "react";
import { VariationProvider } from "./hooks/useVariation";
import { Dashboard } from "./screens/Dashboard";
import Tips from "./screens/Tips";

export default function App() {
    const toogle = true;
    return (
        <VariationProvider>
            {toogle && <Dashboard />}
            {!toogle && <Tips />}
            <StatusBar style="light" />
        </VariationProvider>
    );
}
