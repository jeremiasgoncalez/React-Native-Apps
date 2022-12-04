import lolyfill from './lolyfills.ts';
import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Home from './src/pages/Home';
import Pessoal from './src/pages/Pessoal';
import Formacao from './src/pages/Formacao';
import Experiencia from './src/pages/Experiencia';
import CustomDrawer from './src/components/CustomDrawer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={CustomDrawer}>
        <Drawer.Screen name="Tela Inicial" component={Home} />
        <Drawer.Screen name="Pessoal" component={Pessoal} />
        <Drawer.Screen name="Formação" component={Formacao} />
        <Drawer.Screen name="Experiência" component={Experiencia} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
