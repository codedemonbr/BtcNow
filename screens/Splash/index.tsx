import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import SplashImg from "../../assets/imgs/splash.jpg";

import { Container, Img } from "./styles";

const Splash: React.FC = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("App");
        }, 3000);
    }, []);
    return (
        <Container>
            <Img source={SplashImg} />
        </Container>
    );
};

export { Splash };
