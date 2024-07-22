import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartScreen from "../Screens/CartScreen";
import FavouritesScreen from "../Screens/FavouritesScreen";
import { Ionicons, AntDesign, FontAwesome5 } from "@expo/vector-icons";
import TopTabNavigator from "./TopTabNavigator";
import { theme } from "../Components/DataSection/Data";
import AcctProfileScreen from "../Screens/AcctProfileScreen";
import HomeScreenCustomHeader from "../Components/HomeScreenCustomHeader";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator({route}) {
  console.log(route)

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary1,
        tabBarInactiveTintColor: "#000000",
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={TopTabNavigator}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={24}
                color={focused ? theme.colors.primary1 : "black"}
              />
            );
          },
          header: () => (<HomeScreenCustomHeader />)
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "cart" : "cart-outline"}
                size={30}
                color={focused ? theme.colors.primary1 : "black"}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          tabBarLabel: "Favourites",
          tabBarIcon: ({ focused }) => {
            return (
              <AntDesign
                name={focused ? "heart" : "hearto"}
                size={24}
                color={focused ? theme.colors.primary1 : "black"}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Account Profile"
        component={AcctProfileScreen}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ focused }) => {
            return (
              <FontAwesome5
                name={focused ? "user-alt" : "user"}
                size={24}
                color={focused ? theme.colors.primary1 : "black"}
              />
            );
          },
          headerShown: false
        }}
      />
    </BottomTab.Navigator>
  );
}

//the focused prop is provided to the tabBarIcon function when a tab is active or focused. This prop allows you to conditionally style the icon (and its label, if applicable) to indicate the active state visually.
