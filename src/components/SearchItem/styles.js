import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 10px;
  margin: 0 0 14px;
  align-items: center;
  background-color: #3C3E44;
  border-radius: 8px;
`;

export const Image = styled.Image`
  height: 150px;
  width: 150px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const Name = styled.View`
 width: 100%;
 align-items: center;  
 justify-content: center;
 background-color: #3C3E44;
 border-bottom-left-radius: 8px;
 border-bottom-right-radius: 8px;
`;

export const Title = styled.Text`
  color: #FFF;
  font-size: 22px;
  font-weight: bold;
`;