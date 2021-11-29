import React, { useState, useEffect } from 'react';
import { Modal, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, SearchContainer, Input, SearchButton, ListCharacter } from './styles';
import { Feather } from '@expo/vector-icons';

import Header from '../../components/Header';
import CharacterItem from '../../components/CharacterItem';
import Details from '../../components/DetailsModal';

import api from '../../services/api';

function Home() {

  const navigation = useNavigation();

  const [nowCharacter, setNowCharacter] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);
  const [data, setData] = useState({});
  const [input, setInput] = useState('');
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(true);
  let isActive = true;

  async function loadCharacter(){

    const characterData  = await api.get('/character', {
      params: { page }
    });

    // Verifica se continua na tela
    if(isActive){
      setNowCharacter([...nowCharacter, ...characterData.data.results]);
      setPage(page + 1);
      setLoading(false);
    }      
  }

  useEffect(() => {
    
    const ac = new AbortController();
    
    loadCharacter();

    // Se component é desmontado
    return () => {
      isActive = false;
      ac.abort();
    }
  }, []);

  function handleItem(item){
    setData(item);
    setVisibleModal(true);
  }

  function handleSearch(){

    if(input === '') return;
      navigation.navigate('Search', { char: input});
      setInput('');
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
      <Header title="Rick and Morty" />

      <SearchContainer>
        <Input
          placeholder="Digite um nome de personagem"
          placeholderTextColor="#ddd"
          value={input}
          onChangeText={ (text) => setInput(text) }
        />

        <SearchButton onPress={ handleSearch }>
          <Feather name="search" size={30} color="#FFF" />
        </SearchButton>
      </SearchContainer>

      <ListCharacter
        vertical={true}
        showsVerticalScrollIndicator={false}
        data={nowCharacter}
        onEndReached={loadCharacter}
        onEndReachedThreshold={0.2}
        renderItem={({ item }) => <CharacterItem data={item} selectedItem={ handleItem }  /> }
        keyExtractor={ (item) => String(item.id) }
      />

      <Modal visible={visibleModal} transparent animationType="slide" >
        <Details 
          onClose={ () => setVisibleModal(false) } 
          data={data} 
        />
      </Modal>
    </Container>
  )
}

export default Home;
