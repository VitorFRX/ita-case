//NOTE IMPORTS --> STYLED COMPONENTS
import { styled } from "styled-components";

//NOTE IMPORTS --> ASSETS DO PROJETO
import Logo from "../assets/logo.svg";
// import Arrow from "../assets/arrow-down.svg";


export function Header() {

    const Container = styled.div`
        width: 100%;
        
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;

        background-color: #1A1A1A;
        justify-content: center;
    `;

    const Header = styled.header`
        max-width: 1200px;
        height: 80px;
        
        display: flex;
        
        margin: 0 auto;
        
        justify-content: space-around;
        align-items: center;
    `;

    const Logomarca = styled.img`
        width: 100px;
        height: 80px;
    `;

    const OptionsList = styled.ul`
        display: flex;

        justify-content: space-around;

        list-style: none;
    `;

    const Options = styled.li`
        margin-right: 6px;
        padding: 8px;
        
        cursor: pointer;

        color: ${props => props.theme.WhiteColors.whitePrimary};
        
        transition: .4s ease-in;

        &:hover {
            color: ${props => props.theme.BrandColors.yellowPrimary};
        }
    `;
    
    return (
        <>
            <Container>
                <Header>
                    <Logomarca src={Logo} alt="logo" />
                    <OptionsList>
                        <Options>Home</Options>
                        <Options>Sobre Nós</Options>
                        <Options>Soluções</Options>
                        <Options>Fale Conosco</Options>
                        <Options>Trabalhe Conosco</Options>
                        <Options>ITA Assinatura</Options>
                    </OptionsList>
                </Header>
            </Container>
        </>
    );
}