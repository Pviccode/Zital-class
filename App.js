import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainScreenNavigator from './Framework/Navigators/MainScreenNavigator';

export default function App() {

  return (
    <NavigationContainer>
      <MainScreenNavigator />
      <StatusBar style="auto" barStyle={'dark-content'}/>
    </NavigationContainer>
  );
}
