import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import HomeScreen from '../Screens/HomeScreen';
import FurnituresScreen from '../Screens/FurnituresScreen';
import ElectronicsScreen from '../Screens/ElectronicsScreen';
import SportsScreen from '../Screens/SportsScreen';
import BeautyHealthScreen from '../Screens/BeautyHealthScreen';
import ToysHobbiesScreen from '../Screens/ToysHobbiesScreen';
import KiddiesWearsScreen from '../Screens/KiddiesWearsScreen';
import FashionScreen from '../Screens/FashionScreen';
import { Dimensions, Text } from 'react-native';
import { theme } from '../Components/DataSection/Data';

const TopTab = createMaterialTopTabNavigator();

export default function TopTabNavigator() {
    // console.log(Dimensions.get('screen').height);
  return (
    <TopTab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "#ffffff",
        tabBarIndicatorStyle: {backgroundColor: 'black'},
        tabBarIndicatorContainerStyle: {width: 'auto'},
        tabBarItemStyle: {width: 'auto'},
        tabBarScrollEnabled: true,
        tabBarStyle: {height: 27, backgroundColor: 'white', paddingHorizontal: 5, paddingBottom: 5},
        tabBarContentContainerStyle: {alignItems: 'center'},
        tabBarLabel: ({focused}) => {
          let labelFontFamily = focused ? theme.fontName.text600[0] : theme.fontName.text500[0];
          return <Text style={{fontFamily: labelFontFamily, color: 'black', fontSize: 16}}>{route.name}</Text>
        },
      })}
    >
        <TopTab.Screen name='Explore' component={HomeScreen}/>
        <TopTab.Screen name='Furniture' component={FurnituresScreen}/>
        <TopTab.Screen name='Electronics' component={ElectronicsScreen}/>
        <TopTab.Screen name='Sports' component={SportsScreen}/>
        <TopTab.Screen name='Beauty & Health' component={BeautyHealthScreen}/>
        <TopTab.Screen name='Toys & Hobbies' component={ToysHobbiesScreen}/>
        <TopTab.Screen name='Kiddies Wears' component={KiddiesWearsScreen}/>
        <TopTab.Screen name='Fashion' component={FashionScreen}/>
    </TopTab.Navigator>
  )
}