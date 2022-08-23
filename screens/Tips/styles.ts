import WebView from "react-native-webview";
import styled from "styled-components/native";

interface TipsProps {
    isNegative: boolean;
}

export const Container = styled.View<TipsProps>`
    height: 120px;
    align-items: center;
    justify-content: flex-end;
    background: ${({ isNegative }) => (isNegative ? "#E62E4D" : "#33CC95")};
`;

export const Content = styled.View`
    flex-direction: row;
`;

export const LeftContainer = styled.TouchableOpacity`
    flex: 1;
    height: 60px;
    align-items: center;
    justify-content: center;
`;

export const CenterContainer = styled.View`
    flex: 4;
    height: 60px;
    align-items: center;
    justify-content: center;
`;

export const RightContainer = styled.View`
    flex: 1;
    height: 60px;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    color: white;
    font-size: 18px;
    font-weight: bold;
`;

export const Effect = styled.View`
    height: 24px;
    width: 100%;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;

    background: rgb(254, 251, 255);
`;

export const TipPage = styled(WebView)``;
