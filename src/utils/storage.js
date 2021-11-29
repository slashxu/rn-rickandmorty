import AsyncStorage from "@react-native-async-storage/async-storage";

// Busca dados Salvos
export async function getDataSave(key){
  const myData = await AsyncStorage.getItem(key);

  let dataSave = JSON.parse(myData) || [];

  return dataSave;
}

// Salvar dados
export async function saveData(key, newData){
  
  let stored = await getDataSave(key);

  // Se ja existe na lista salva, ele ignora
  const hasChar = stored.some( item => item.id === newData.id);

  if(hasChar){
    console.log('JA EXISTE NA SUA LISTA');
    return;
  }

  stored.push(newData);

  await AsyncStorage.setItem(key, JSON.stringify(stored));
  console.log('SALVO COM SUCESSO');
}

// Deletar dado específico
export async function deleteData(id){

  let stored = await getDataSave('@rickandmorty');

  // Retorna todos dados menos o que quer deletar
  let myData = stored.filter( item => {
    return ( item.id !== id);
  });

  await AsyncStorage.setItem('@rickandmorty', JSON.stringify(myData));
  console.log('DELETADO COM SUCESSO');
  return myData;
}

// Filtrar dados ja salvos
export async function filterData(data){

  let stored = await getDataSave('@rickandmorty');
  
  // Verifica se esta na lista
  const hasData = stored.find( item => item.id === data.id);

  if(hasData){
    return true;
  }

  return false;
}