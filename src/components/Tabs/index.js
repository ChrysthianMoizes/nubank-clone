import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, TabsContainer, TabItem, TabText } from './styles';

export default function Tabs({ translateY }) {
  return(
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 350],
        outputRange: [1, 0],
        extrapolate: 'clamp'
      })
    }}>
      <TabsContainer>
        <TabItem>
          <Icon name="person-add" size={24} color="#FFF" />
          <TabText>Indicar Amigos</TabText>
        </TabItem>
        <TabItem>
          <Icon name="chat-bubble-outline" size={24} color="#FFF" />
          <TabText>Cobrar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-downward" size={24} color="#FFF" />
          <TabText>Depositar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-upward" size={24} color="#FFF" />
          <TabText>Transferir</TabText>
        </TabItem>
        <TabItem>
          <Icon name="timeline" size={24} color="#FFF" />
          <TabText>Ajustar Limite</TabText>
        </TabItem>
        <TabItem>
          <Icon name="subject" size={24} color="#FFF" />
          <TabText>Pagar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="lock-outline" size={24} color="#FFF" />
          <TabText>Bloquear Cartão</TabText>
        </TabItem>
        <TabItem>
          <Icon name="credit-card" size={24} color="#FFF" />
          <TabText>Cartão Virtual</TabText>
        </TabItem>
        <TabItem>
          <Icon name="sort" size={24} color="#FFF" />
          <TabText>Organizar Atalhos</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
