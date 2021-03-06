import styled from 'styled-components/native';
import { StyleSheet, Animated } from 'react-native';

export const Container = styled(Animated.ScrollView).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingTop: 10 }
})`
  margin: 0 30px;
  flex: 1;
`;

export const Code = styled.View`
  background: #FFF;
  padding: 5px;
  overflow: hidden;
  align-self: center;
`;

export const ContainerAccount = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 7px;
`;

export const TitleAccount = styled.Text`
  font-size: 13px;
  color: #FFF;
`;

export const DescriptionAccount = styled.Text`
  color: #FFF;
  font-size: 12px;
  font-weight: bold;
`;

export const Nav = styled.View`
  margin-top: 20px;
  border-top-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.8);
`;

export const NavItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  border-bottom-width: 1px;
  border-bottom-color: rgba(255, 255, 255, 0.8);
`;

export const NavText = styled.Text`
  color: #FFF;
  margin-left: 10px;
  font-size: 15px;
`;

export const SignOutButton = styled.TouchableOpacity`
  border-width: 1px;
  border-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 15px;
`;

export const SignOutButtonText = styled.Text`
  color: #FFF;
  font-weight: bold;
  font-size: 13px;
`;
