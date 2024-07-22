import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

export default function MainScreenNavigator() {

  return (
    <Stack.Navigator>
      <Stack.Screen name='Bottom Tab' component={BottomTabNavigator} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}
