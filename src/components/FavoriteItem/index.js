import React from 'react';

import { Container, Card, Title } from './styles';

function FavoriteItem( { data, selectedItem }){
  return (
    <Container  activeOpacity={0.7} onPress={ () => selectedItem(data)}>
      <Card
            resizeMethod="resize"
            source={{ uri: `${data.image}` }}
          /> 
      <Title>{data.name}</Title>
    </Container>
    )
}

export default FavoriteItem;