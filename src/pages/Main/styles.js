import styled from 'styled-components/native';
import { Animated, Dimensions } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #8B10AE;
  padding-bottom: 10px;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 450px;
  z-index: 5;
`;

export const Card = styled.View`
  background: #FFF;
  border-radius: 4px;
  margin: 0 20px;
  width: ${Dimensions.get('window').width - 40}px;
`;

export const CardList = styled(Animated.ScrollView).attrs({
  horizontal: true,
  contentContainerStyle: { backgroundColor: 'transparent' },
  showsHorizontalScrollIndicator: false
})`
  flex: 1;
  height: 90%;
  position: absolute;
  top: 20;
  right: 0;
  left: 0;
`;

export const IndexList = styled(Animated.View)`
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  z-index: 5;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

export const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
  margin-bottom: 40px;
`;

export const CardFooter = styled.TouchableOpacity`
  padding: 30px;
  background: #eee;
  border-radius: 4px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #333;
`;

export const TitleInvoice = styled.Text`
  font-size: 14px;
  color: #35c8ed;
  font-weight: bold;
`;

export const DescriptionInvoice = styled.Text`
  font-size: 32px;
  color: #35c8ed;
`;

export const ContainerLimit = styled.View`
  flex-direction: row;
`;

export const DescriptionLimit = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #42ed36;
`;

export const Description = styled.Text`
  font-size: 32px;
  color: #333;
`;

export const Annotation = styled.Text`
  font-size: 12px;
  color: #333;
  margin: 10px;
`;

export const CardHeaderRewards = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export const TitleRewards = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #000;
`;

export const DescriptionRewards = styled.Text`
  font-size: 16px;
  color: #000;
  margin-top: 10px;
  text-align: center;
  line-height: 25px;
`;

export const CardContentRewards = styled.View`
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  margin-right: 30px;
`;

export const ButtonRewards = styled.TouchableOpacity`
  border-width: 1px;
  border-color: #8B10AE;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 14px;
  margin-top: 15px;
  margin: 30px;
`;

export const ButtonRewardsText = styled.Text`
  color: #8B10AE;
  font-weight: bold;
  font-size: 16px;
`;
