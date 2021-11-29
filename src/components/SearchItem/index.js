import React from 'react';

import { Container, Image, Name, Title } from './styles';

function SearchItem( { data, selectedItem }){
  return( 
      <Container activeOpacity={0.7} onPress={ () => selectedItem(data)} >
        <Image 
          resizeMethod="resize" 
          source={{ uri: `${data.image}`}}
         />

        <Name>
          <Title>{data.name}</Title>
         </Name>
      </Container> 
  )
}

export default SearchItem;