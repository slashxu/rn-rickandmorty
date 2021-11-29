import React, { useState, useEffect } from 'react';
import { TouchableOpacity, ToastAndroid } from 'react-native';

import { ModalContainer, Container, Header, Info, Card, Title, SubTitle } from './styles';
import { Feather, Ionicons} from '@expo/vector-icons';

import { saveData, deleteData, filterData } from '../../utils/storage';

function Details({ onClose, data }){

  const [favoriteData, setFavoriteData] = useState(false);
  let isActive = true;

  async function loadCharacter(){
    // Verifica se continua na tela
    if(isActive){
      
      const isFavorite = await filterData(data);
      setFavoriteData(isFavorite);
    }      
  }

  useEffect(() => {   
    loadCharacter();
    return () => {
      isActive = false;
    }
  }, []);

  async function handleFavorited(data){

    if(favoriteData){
      await deleteData(data.id);
      setFavoriteData(false);

      ToastAndroid.show(
        "Removido dos favoritos",
        ToastAndroid.SHORT);
        
    }else{
      await saveData('@rickandmorty', data);
      setFavoriteData(true);

      ToastAndroid.show(
        "Salvo nos favoritos",
        ToastAndroid.SHORT);
    }

  }

  return(
    <ModalContainer onPress={ onClose }>
      <Container>
      <Header>
        <TouchableOpacity onPress={onClose}>
          <Feather 
            name="x"
            color="#FFF"
            size={30}
           />
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => handleFavorited(data) }>
          { favoriteData ? (
            <Ionicons 
              name="md-star"
              color="#FFF"
              size={30}
           />
          ) : (
            <Ionicons 
            name="md-star-outline"
            color="#FFF"
            size={30}
           />
          )} 
          
        </TouchableOpacity>
      </Header>

      <Info>
            <Card 
            resizeMethod="resize"
            source={{ uri: `${data.image}` }}
            />

            <Title numberOflines={1}>{data.name}</Title>
            <SubTitle>{data.status} - {data.species}</SubTitle>
            <SubTitle>{data.gender}</SubTitle>
            
            <Title numberOflines={1}>Origin:</Title>
            <SubTitle>{data.origin.name}</SubTitle>

            <Title numberOflines={1}>Last known location:</Title>
            <SubTitle>{data.location.name}</SubTitle>
      </Info>
            
      </Container>

    </ModalContainer>
    
  )
}

export default Details;