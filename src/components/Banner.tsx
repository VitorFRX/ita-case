// TODO --> IMPORTS STYLED COMPONENTS
import { styled, keyframes } from "styled-components";

// TODO --> IMPORTS EFEITO DE DIGITAÇÃO PARA TEXTO
import { TypeAnimation } from "react-type-animation";

// TODO --> IMPORTS IMAGES
import fleetImage from "../assets/fleet.jpg";


const Banner = () => {

    //ANCHOR --> ANIMAÇÕES
    const elipsesAnime = keyframes`
        0% {
            fill-opacity: 0;
            stroke-dasharray: 10000 10000;
            stroke-dashoffset: 500;
        }

        40%, 50% {
            fill-opacity: 1;
            stroke-dasharray: 900 1200;
            stroke-dashoffset: 300;
        }

        60% {
            fill-opacity: 1;
            stroke-dasharray: 20 100;
            stroke-dashoffset: 60;
        } 
        
        65%, 100% {
            fill-opacity: 1;
            stroke-dasharray: 10000 10000;
            stroke-dashoffset: 500;
        }
    `;

    //ANCHOR --> STILOS CONVENCIONAIS
    const Container = styled.div`
        width: 100%;
        height: 580px;

        display: flex;
    `;

    const ContentBanner = styled.div`
        width: 100%;
        
        display: flex;

        align-items: center;

        position: absolute;
    `;

    const TitleContainer = styled.div`
        width: 60%;
        
        justify-content: start;
        align-items: center;
    `;

    const SVGContainer = styled.div`
        width: 40%;

        transform: translate(-250px, 14px);
        
        justify-content: start;
        align-items: center;

        & svg {

            & circle {
                animation: ${elipsesAnime} 12s linear infinite;
            }
        }
    `;

    const FleetImage = styled.img`
        width: 100%;

        position: relative;

        overflow: hidden;
    `;

    return(
        <>
            <Container>
                <FleetImage src={fleetImage} alt="fleet_image" />

                <ContentBanner>
                    <SVGContainer>
                        <svg width="550" height="550" viewBox="0 0 2995 2995" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="1497.5" cy="1497.5" r="1482.5" stroke="#FFDC00" stroke-width="30"/>
                            <circle cx="1497.5" cy="1497.5" r="867.5" fill="#AEAEAE"/>
                        </svg>
                    </SVGContainer>

                    <TitleContainer>
                        <TypeAnimation 
                            sequence={["A Frota que o seu negócio realmente precisa!", 2000]}
                            wrapper="div"
                            speed={35}
                            style={{ width:"600px", fontSize: "70px", fontWeight: "bold", color: "#FFDC00"}}
                            repeat={Infinity}
                            deletionSpeed={{type:"keyStrokeDelayInMs", value: 80}}
                        />
                    </TitleContainer>
                </ContentBanner>
            </Container>
        </>
    );
}

export default Banner;