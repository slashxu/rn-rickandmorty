import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px;
  margin: 0 0 14px;
  align-items: center;
  background-color: #3C3E44;
  border-radius: 8px;
`;

export const Card = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 6px;
`;

export const Title = styled.Text`
  margin-left: 20px;
  font-size: 22px;
  color: #FFF;
  font-weight: bold;
`;