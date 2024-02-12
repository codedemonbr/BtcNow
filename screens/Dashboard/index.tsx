import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Btn } from "../../components/Btn";
import { Container } from "./styles";

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
  const standardRefresh = 30; //quantidade em segundos até atualizar a tela

  const { navigate } = useNavigation();

  return (
    <Container>
      <Btn
        label="Bitcoin / Real"
        fn={() => {
          navigate("Currency", "BTCBRL");
        }}
      />
      <Btn
        label="Dolar / Real"
        fn={() => {
          navigate("Currency", "USDBRL");
        }}
      />
      <Btn
        label="Euro / Real"
        fn={() => {
          navigate("Currency", "EURBRL");
        }}
      />
    </Container>
  );
};

export { Dashboard };
