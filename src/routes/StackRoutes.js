import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../views/Home';
import Search from '../views/Search';

const Stack = createNativeStackNavigator();

function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }}
      />
       <Stack.Screen
        name="Search"
        component={Search}
        options={{
          title: 'Search',
          headerTintColor: '#FFF',
          headerTitleStyle: {
            color: '#FFF'
          },
          headerStyle: {
            backgroundColor: '#24282F'
          }
        }}
      />
    </Stack.Navigator>
  )
}

export default StackRoutes;