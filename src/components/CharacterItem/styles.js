import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 10px;
  margin: 0 0 14px;
  flex-direction: row;
  background-color: #3C3E44;
  border-radius: 8px;
`;

export const Card = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 6px;
`;

export const Detail = styled.View`
   flex: 1;
   flex-direction: column;
   justify-content: flex-start;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #FFF;
  padding-left: 14px;
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  color: #FFF;
  padding-left: 14px;
`;
