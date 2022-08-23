import styled from "styled-components/native";

interface InfoCardProps {
    isNegative: boolean;
}

export const Container = styled.View<InfoCardProps>`
    margin: 0px 24px 24px 24px;
    height: 115px;
    border: 1px solid
        ${({ isNegative }) => (isNegative ? "#E62E4D55" : "#33CC9555")};
    background: ${({ isNegative }) => (isNegative ? "#E62E4D06" : "#33CC9506")};
    border-radius: 10px; ;
`;

export const Title = styled.Text`
    font-size: 18px;
    margin-top: 18px;
    margin-left: 24px;
`;

export const Value = styled.Text<InfoCardProps>`
    font-size: 36px;
    margin-top: 2px;
    margin-left: 24px;
    color: ${({ isNegative }) => (isNegative ? "#E62E4D" : "#33CC95")};
`;
