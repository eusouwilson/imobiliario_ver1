import React from "react";
import { images } from "../../../constants/";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import { Container, MenuContainer, TitleMenu } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <MenuContainer variant="secondary">
          <Image width={52} height={52} alt="171x180" src={images.person} />
          <TitleMenu>Pessoas</TitleMenu>
        </MenuContainer>
      </Link>
      <MenuContainer variant="secondary">
        <Image width={52} height={52} alt="171x180" src={images.building} />
        <TitleMenu>Imóveis</TitleMenu>
      </MenuContainer>
      <MenuContainer variant="secondary">
        <Image width={52} height={52} alt="171x180" src={images.agreement} />
        <TitleMenu>Contratos</TitleMenu>
      </MenuContainer>
      <MenuContainer variant="secondary">
        <Image width={52} height={52} alt="171x180" src={images.admin} />
        <TitleMenu>Preferências</TitleMenu>
      </MenuContainer>
    </Container>
  );
};

export default Home;
