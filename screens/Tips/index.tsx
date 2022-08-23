import { AntDesign, Feather } from "@expo/vector-icons";
import React from "react";
import { useVariation } from "../../hooks/useVariation";
import {
    CenterContainer,
    Container,
    Content,
    Effect,
    LeftContainer,
    RightContainer,
    TipPage,
    Title,
} from "./styles";

const Tips: React.FC = () => {
    const { isNegative } = useVariation();
    return (
        <>
            <Container isNegative={isNegative}>
                <Content>
                    <LeftContainer onPress={() => console.log("Press")}>
                        <AntDesign name="arrowleft" size={36} color="white" />
                    </LeftContainer>
                    <CenterContainer>
                        <Title>Que tal deixar um cafézinho?</Title>
                    </CenterContainer>
                    <RightContainer>
                        <Feather name="coffee" size={36} color="white" />
                    </RightContainer>
                </Content>

                <Effect />
            </Container>
            <TipPage
                source={{
                    uri: "https://tippin.me/@codedemonbr",
                }}
            />
        </>
    );
};

export default Tips;
