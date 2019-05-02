import React, { Component } from 'react';

import { Container, Top, Logo, Title } from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '../../assets/Nubank_Logo.png';

export default class Header extends Component {
  render() {
    return(
      <Container>
        <Top>
          <Logo source={logo} />
          <Title>Chrysthian</Title>
        </Top>
        <Icon name="keyboard-arrow-down" size={20} color={"#FFF"} />
      </Container>
    );
  }
}
