import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useState,
} from "react";

interface VariationProviderProps {
    children: ReactNode;
}

interface VariationContextData {
    isNegative: boolean;
    setIsNegative: Dispatch<SetStateAction<boolean>>;
}

const VariationContext = createContext<VariationContextData>(
    {} as VariationContextData
);

export const VariationProvider = ({ children }: VariationProviderProps) => {
    const [isNegative, setIsNegative] = useState(true);

    return (
        <VariationContext.Provider value={{ isNegative, setIsNegative }}>
            {children}
        </VariationContext.Provider>
    );
};

export const useVariation = (): VariationContextData => {
    const context = useContext(VariationContext);

    return context;
};
