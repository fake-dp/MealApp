import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MealsOverviewSrceen from "./screens/MealsOverviewSrceen";
import MealDetailScreen from "./screens/MealDetailScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoriteSreen from "./screens/FavoriteSreen";
import { Ionicons } from "@expo/vector-icons";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        title: "Meal Categories",
        headerStyle: {
          backgroundColor: "#4a148c",
        },
        headerTintColor: "white",
        sceneContainerStyle: {
          backgroundColor: "black",
        },
        drawerContentStyle: {
          backgroundColor: "#4a148c",
        },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="ios-restaurant" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoriteSreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="ios-star" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
// 바텀 탭
function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={DrawerNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteSreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-star" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen
            name="DrawerNavigator"
            component={DrawerNavigator}
            // component={CategoriesScreen}
            options={{
              headerShown: false,
            }}
          /> */}
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewSrceen}
            options={{
              cardStyle: {
                backgroundColor: "black",
              },
              headerStyle: {
                backgroundColor: "#4a148c",
              },
              headerTintColor: "white",
            }}
          />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={{
              title: "About the Meal",
              cardStyle: {
                backgroundColor: "black",
              },
              headerStyle: {
                backgroundColor: "#4a148c",
              },
              headerTintColor: "white",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
