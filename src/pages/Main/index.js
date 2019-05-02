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
  Description,
  Annotation
} from './styles';


export default function Main() {

  let offset = 0;
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
      let opened = false;

      const { translationY } = event.nativeEvent;
      offset += translationY;

      if( translationY >= 100 ) {
        opened = true;
      }else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 400 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 400 : 0;
        translateY.setOffset(offset);
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
          pagingEnabled >
            <Card>
              <CardHeader>
                <Icon name="attach-money" size={28} color="#666" />
                <Icon name="visibility-off" size={28} color="#666" />
              </CardHeader>
              <CardContent>
                <Title>Saldo disponível</Title>
                <Description>R$ 82.611,65</Description>
              </CardContent>
              <CardFooter>
                <Annotation>
                  Transferência de R$ 4.237,38 recebida de Davy Gonçalves Cardoso Lima hoje
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
              <CardFooter>
                <Annotation>
                  Transferência de R$ 4.237,38 recebida de Davy Gonçalves Cardoso Lima hoje
                </Annotation>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Icon name="attach-money" size={28} color="#666" />
                <Icon name="visibility-off" size={28} color="#666" />
              </CardHeader>
              <CardContent>
                <Title>Card Teste</Title>
                <Description>Fatura</Description>
              </CardContent>
              <CardFooter>
                <Annotation>
                  Transferência de R$ 4.237,38 recebida de Davy Gonçalves Cardoso Lima hoje
                </Annotation>
              </CardFooter>
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
