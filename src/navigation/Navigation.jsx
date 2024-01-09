import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
// import { Chat } from "./Chat";
import MainScreens from "../screens/MainScreens";
import LearnProgramScreen from "../screens/LearnProgramScreen";
import TestScreen from "../screens/TestScreen";
import BreakScreen from "../screens/BreakScreen";
import CitySearchScreen from "../screens/CitySearchScreen";



const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainScreens"
          component={MainScreens}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LearnProgram"
          component={LearnProgramScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TestScreen"
          component={TestScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BreakScreen"
          component={BreakScreen}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="CitySearchScreen"
          component={CitySearchScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
