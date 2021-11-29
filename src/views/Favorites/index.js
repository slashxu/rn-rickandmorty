import React, { useEffect, useState } from 'react';
import { Modal, ActivityIndicator } from 'react-native';

import Header from '../../components/Header';
import FavoriteItem from '../../components/FavoriteItem';
import Details from '../../components/DetailsModal';
import { getDataSave } from '../../utils/storage';

import { useIsFocused } from '@react-navigation/native';

import { Container, ListFavorites } from './styles';

function Favorites() {

  const isFocused = useIsFocused();

  const [character, setCharacter] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isActive = true;

    async function getFavorites(){
      const result = await getDataSave('@rickandmorty');

      if(isActive){
        setCharacter(result);
        setLoading(false);
      }
    }

    if(isActive){
      getFavorites();
    }

    return () => {
      isActive = false;
    }

  }, [isFocused]);

  function handleItem(item){
    setData(item);
    setVisibleModal(true);
  }

  if(loading){
    return(
      <Container>
        <ActivityIndicator size="large" color="#FFF" />
      </Container>
    )
  }

  return (
    <Container>
      <Header title="Favorites" />

      <ListFavorites 
        data={character}
        showVerticalScrollIndicator={false}
        renderItem={({ item }) => <FavoriteItem data={item} selectedItem={ handleItem } /> }
        keyExtractor={ (item) => String(item.id) }
      />

      <Modal visible={visibleModal} transparent animationType="slide" >
        <Details onClose={ () => setVisibleModal(false) } data={data} />
      </Modal>
    </Container>
  )
}

export default Favorites;