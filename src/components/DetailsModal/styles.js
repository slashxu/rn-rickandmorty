import styled from 'styled-components/native';

export const ModalContainer = styled.View`
flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #24282F;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  padding: 0 15px;
`;

export const Header = styled.View`
flex-direction: row;
justify-content: space-between;
margin: 15px 0;
`;

export const Info = styled.View`
flex: 1;
align-items: center;
`;

export const Card = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 6px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #FFF;
  margin-top: 10px;
  padding-left: 14px;
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  color: #FFF;
  padding-left: 14px;
`;  