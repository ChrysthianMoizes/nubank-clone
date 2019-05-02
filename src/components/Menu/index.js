import React from 'react';
import QRCode from 'react-native-qrcode';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Code,
  ContainerAccount,
  TitleAccount,
  DescriptionAccount,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText
} from './styles';

export default function Menu({ translateY }) {

  return(
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 350],
        outputRange: [0, 1],
      })
    }}>
      <Code>
        <QRCode value="https://github.com/ChrysthianMoizes" size={80} fgColor="#FFF" bgColor="#8B10AE"/>
      </Code>

      <ContainerAccount>
        <TitleAccount>Banco </TitleAccount>
        <DescriptionAccount>260 - Nu Pagamentos S.A.</DescriptionAccount>
      </ContainerAccount>

      <ContainerAccount>
        <TitleAccount>Agência </TitleAccount>
        <DescriptionAccount>0001</DescriptionAccount>
      </ContainerAccount>

      <ContainerAccount>
        <TitleAccount>Conta </TitleAccount>
        <DescriptionAccount>1546845-8</DescriptionAccount>
      </ContainerAccount>

      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#FFF"/>
          <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
          <Icon name="person-outline" size={20} color="#FFF"/>
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <Icon name="monetization-on" size={20} color="#FFF"/>
          <NavText>Configurar NuConta</NavText>
        </NavItem>
        <NavItem>
          <Icon name="credit-card" size={20} color="#FFF"/>
          <NavText>Configurar Cartão</NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={20} color="#FFF"/>
          <NavText>Configurações do app</NavText>
        </NavItem>

        <SignOutButton>
          <SignOutButtonText>SAIR DO APP</SignOutButtonText>
        </SignOutButton>
      </Nav>
    </Container>
  );

}
