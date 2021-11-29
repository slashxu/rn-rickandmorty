import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import Favorites from '../views/Favorites';
import StackRoutes from './StackRoutes';

const Drawer = createDrawerNavigator();

function MainRoute() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,

        drawerStyle: {
          backgroundColor: '#090A0E',
          paddingTop: 20,
        },

        drawerActiveBackgroundColor: '#E72F49',
        drawerActiveTintColor: '#FFF',
        drawerInactiveTintColor: '#FFF'

      }}
    >
      <Drawer.Screen 
        name="HomeDrawer"
        component={StackRoutes}
        options={{
          title: 'Home',
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name={focused ? 'movie-open' : 'movie-outline'}
              size={size}
              color={color}
            />
          )
        }}
      />
      <Drawer.Screen 
        name="Favorites" 
        component={Favorites}
        options={{
          title: 'Favorites',
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name={focused ? 'star' : 'star-outline'}
              size={size}
              color={color}
            />
          )
        }}
       />
    </Drawer.Navigator>
  )
}

export default MainRoute;