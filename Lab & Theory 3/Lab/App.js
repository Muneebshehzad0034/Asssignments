import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn_Screen from "./components/SignInScreen";
import HomeScreen from "./components/HomeScreen";
import AboutScreen from "./components/AboutScreen";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Sign In"
        screenOptions={{
          headerStyle: { backgroundColor: "steelblue" },
          headerTitleAlign:'center',
          headerTitleStyle: {color:'black',fontSize:24,fontWeight:'bold'},
        }}
      >
        <Stack.Screen name="Sign In" component={SignIn_Screen}></Stack.Screen>
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="My Profile" component={AboutScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
