import React from "react";
import { useVariation } from "../../hooks/useVariation";
import formatCurrency from "../../utils/fomartCurrency";

import { Container, Title, Value } from "./styles";

interface InfoCardProps {
    title: string;
    value: number;
    isMonetary?: boolean;
}

const InfoCard: React.FC<InfoCardProps> = ({
    title,
    value,
    isMonetary = true,
}) => {
    const { isNegative } = useVariation();
    return (
        <Container isNegative={isNegative}>
            <Title>{title}</Title>
            <Value isNegative={isNegative}>
                {isMonetary ? formatCurrency(value) : value + "%"}
            </Value>
        </Container>
    );
};

export default InfoCard;
