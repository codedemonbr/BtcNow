import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import InfoCard from "../../components/InfoCard";
import { ICurrency, ITickerDTO } from "../../dtos/ITickerDTO";
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
  code: "",
  codein: "",
  name: "",
  high: "0",
  low: "0",
  varBid: "0",
  pctChange: "0",
  bid: "0",
  ask: "0",
  timestamp: "0",
  create_date: "0",
};
interface CurrencyProps {
  route: {
    params: "EURBRL" | "BTCBRL" | "USDBRL";
  };
}

const Currency: React.FC<CurrencyProps> = ({ route }) => {
  const standardRefresh = 30; //quantidade em segundos até atualizar a tela

  const [btc, setBtc] = useState<ITickerDTO>({
    EURBRL: initialState,
    BTCBRL: initialState,
    USDBRL: initialState,
  });

  const selected = route.params;
  const [counter, setCounter] = useState(standardRefresh);
  const { setIsNegative } = useVariation();
  const navigation = useNavigation();

  const getCurrentBtcValue = useCallback(async () => {
    try {
      const { data } = await api.get("USD-BRL,EUR-BRL,BTC-BRL");
      console.log(data);

      setIsNegative(data.var < 0);
      setBtc(data);
    } catch (error) {
      console.log(error);
    }
  }, [setBtc]);

  useEffect(() => {
    //react native crash usando set timeout elevado. então essa lógica foi feita pra corrigir esse problema.
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

  const SelectedCurrency = (currency: ICurrency) => (
    <Container isNegative={+currency.varBid < 0}>
      <TopContainer isNegative={+currency.varBid < 0}>
        <Title>Preço do {currency.name}</Title>
      </TopContainer>

      <MidContainer>
        <InfoCard title="Variação" value={+currency.varBid} isMonetary={true} />
        <InfoCard title="Preço de compra" value={+currency.bid} />
        <InfoCard title="Menor Preço Hoje" value={+currency.low} />
        <InfoCard
          title="Média de Preço"
          value={(+currency.low + +currency.high) / 2}
        />
        <InfoCard title="Preço de venda" value={+currency.ask} />
        <InfoCard title="Maior Preço Hoje" value={+currency.high} />
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

  return <>{SelectedCurrency(btc[selected])}</>;
};

export { Currency };
