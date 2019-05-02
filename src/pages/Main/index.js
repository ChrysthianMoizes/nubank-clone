import React from 'react';
import { Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';
import {
  Container,
  Content,
  Card,
  CardList,
  IndexList,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  TitleInvoice,
  DescriptionInvoice,
  ContainerLimit,
  DescriptionLimit,
  Description,
  CardHeaderRewards,
  CardContentRewards,
  ButtonRewards,
  ButtonRewardsText,
  TitleRewards,
  DescriptionRewards,
  Annotation
} from './styles';

export default function Main() {

  state = {
    showAccount: false
  };

  function setAccount() {

  }

  let offsetY = 0;

  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [{
      nativeEvent: {
        translationY: translateY
      }
    }],
    { useNativeDriver: true },
  );

  function onHandlerStateChange(event) {
    if(event.nativeEvent.oldState === State.ACTIVE){

      let openedY = false;

      const { translationY } = event.nativeEvent;

      offsetY += translationY;

      if( translationY >= 100 ) {
        openedY = true;
      }else {
        translateY.setValue(offsetY);
        translateY.setOffset(0);
        offsetY = 0;
      }

      Animated.timing(translateY, {
        toValue: openedY ? 400 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offsetY = openedY ? 400 : 0;
        translateY.setOffset(offsetY);
        translateY.setValue(0);
      });
    }
  }

  return(
    <Container>
      <Header />

      <Content>
        <Menu translateY={translateY} />
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <CardList style={{
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [-100, 0, 400],
                outputRange: [-50, 0, 400],
                extrapolate: 'clamp'
              })
            }],
          }}
            pagingEnabled
          >
            <Card>
              <CardHeader>
                <Icon name="credit-card" size={28} color="#666" />
              </CardHeader>
              <CardContent>
                <TitleInvoice>FATURA ATUAL</TitleInvoice>
                <DescriptionInvoice>R$ 1.827,19</DescriptionInvoice>
                <ContainerLimit>
                  <Title>Limite disponível </Title>
                  <DescriptionLimit>R$ 15.226,81</DescriptionLimit>
                </ContainerLimit>
              </CardContent>
              <CardFooter onPress={setAccount}>
                <Icon name="restaurant" size={28} color="#666" />
                <Annotation>
                  Compra mais recente em Restaurante Drink no valor de R$ 253,50 ontem
                </Annotation>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Icon name="attach-money" size={28} color="#666" />
                <Icon name="visibility-off" size={28} color="#666" />
              </CardHeader>
              <CardContent>
                <Title>Saldo disponível</Title>
                <Description>R$ 82.611,65</Description>
              </CardContent>
              <CardFooter onPress={setAccount}>
                <Icon name="attach-money" size={28} color="#666" />
                <Annotation>
                  Transferência de R$ 4.237,38 recebida de Davy Gonçalves Cardoso Lima hoje
                </Annotation>
              </CardFooter>
            </Card>
            <Card>
              <CardHeaderRewards>
                <Icon name="card-giftcard" size={28} color="#000" />
              </CardHeaderRewards>
              <CardContentRewards>
                <TitleRewards>Nubank Rewards</TitleRewards>
                <DescriptionRewards>Acumule pontos que nunca expiram e troque por passagens aéreas ou serviços que você realmente usa.</DescriptionRewards>
              </CardContentRewards>
              <ButtonRewards onPress={setAccount}>
                <ButtonRewardsText>
                  ATIVE O SEU REWARDS
                </ButtonRewardsText>
              </ButtonRewards>
            </Card>
          </CardList>
        </PanGestureHandler>
      </Content>
      <IndexList style={{
        opacity: translateY.interpolate({
          inputRange: [0, 350],
          outputRange: [1, 0],
          extrapolate: 'clamp'
        })
      }}>
        <Icon name="more-horiz" size={28} color="#FFF" />
      </IndexList>
      <Tabs translateY={translateY} />
    </Container>
  );
}
