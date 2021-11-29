import React from 'react';

import { Container, Card, Detail, Title, SubTitle } from './styles';

function CharacterItem({ data, selectedItem }){

  return (
      <Container onPress={ () => selectedItem(data) }>        
        <Card
            resizeMethod="resize"
            source={{ uri: `${data.image}` }}
          />    
         
            <Detail>
              <Title numberOflines={1}>{data.name}</Title>
              <SubTitle>{data.status} - {data.species}</SubTitle>
            </Detail>      
      </Container>
  )
}

export default CharacterItem;