import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Modal } from 'react-native';

import { Container, ListSearch } from './styles';

import { useRoute } from '@react-navigation/native';

import api from '../../services/api';

import SearchItem  from '../../components/SearchItem';
import Details from '../../components/DetailsModal';

//interface Params {
//  char: string
//}

function Search(){

  const route = useRoute();

  const [character, setCharacter] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  //const routeParams = route.params as Params;

  useEffect(() => {
    let isActive = true;

    async function getSearch(){

      const response = await api.get(`/character/?name=${route.params?.char}`)
   
      if(isActive){
        setCharacter(response.data.results);
        setLoading(false);
      }
  }
  
  if(isActive){
    getSearch();
  }
    return () => {
      isActive = false;
    }
  }, []) 

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

  return(
    <Container>
      <ListSearch
      vertical={true}
      showsVerticalScrollIndicator={false}
      data={character}
      renderItem={({ item }) => <SearchItem data={item} selectedItem={ handleItem } /> }
      keyExtractor={ (item) => String(item.id) }
      />

      <Modal visible={visibleModal} transparent animationType="slide" >
        <Details onClose={ () => setVisibleModal(false) } data={data} />
      </Modal>
    </Container>
  )
}

export default Search;