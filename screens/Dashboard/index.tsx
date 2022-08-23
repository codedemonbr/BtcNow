import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import InfoCard from "../../components/InfoCard";
import { ITickerDTO } from "../../dtos/ITickerDTO";
import { useVariation } from "../../hooks/useVariation";
import { api } from "../../services/api";
import {
    BottomContainer,
    Container,
    DonationButton,
    DonationText,
    IconContainer,
    MidContainer,
    Title,
    TopContainer,
} from "./styles";

const initialState = {
    avg: 0,
    buy: 0,
    high: 0,
    low: 0,
    market: "",
    sell: 0,
    success: false,
    timestamp: "",
    var: 0,
    vol: 0,
};
const Dashboard: React.FC = () => {
    const standardRefresh = 5;

    const [btc, setBtc] = useState<ITickerDTO>(initialState);
    const [counter, setCounter] = useState(standardRefresh);
    const { setIsNegative } = useVariation();
    const navigation = useNavigation();

    const getCurrentBtcValue = useCallback(async () => {
        try {
            const { data } = await api.get("ticker");

            setIsNegative(data.var < 0);
            setBtc(data);
        } catch (error) {
            console.log(error);
        }
    }, [setBtc]);

    useEffect(() => {
        if (counter === 0) {
            setCounter(standardRefresh);
        } else {
            if (counter === standardRefresh) {
                getCurrentBtcValue();
            }
            setTimeout(() => {
                setCounter(counter - 1);
            }, 1000);
        }
    }, [counter]);

    return (
        <Container isNegative={btc.var < 0}>
            <TopContainer isNegative={btc.var < 0}>
                <Title>Preço do Bitcoin</Title>
            </TopContainer>

            <MidContainer>
                <InfoCard title="Variação" value={btc.var} isMonetary={false} />
                <InfoCard title="Preço de compra" value={btc.buy} />
                <InfoCard title="Menor Preço Hoje" value={btc.low} />
                <InfoCard title="Média de Preço" value={btc.avg} />
                <InfoCard title="Preço de venda" value={btc.sell} />
                <InfoCard title="Maior Preço Hoje" value={btc.high} />
            </MidContainer>

            <BottomContainer>
                <DonationButton onPress={() => navigation.navigate("Tips")}>
                    <DonationText>Que tal deixar um cafézinho?</DonationText>
                    <IconContainer>
                        <Feather name="coffee" size={24} color="white" />
                    </IconContainer>
                </DonationButton>
            </BottomContainer>
        </Container>
    );
};

export { Dashboard };
