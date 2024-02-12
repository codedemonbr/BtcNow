import React from "react";
import { Container, Label } from "./styles";

// import { Container } from './styles';

interface BtnProps {
  label: string;
  fn: () => void;
}

const Btn: React.FC<BtnProps> = ({ label, fn }) => {
  return (
    <Container onPress={fn}>
      <Label>{label}</Label>
    </Container>
  );
};

export { Btn };
