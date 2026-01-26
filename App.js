import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { enableScreens } from "react-native-screens";
import * as NavigationBar from "expo-navigation-bar";

// Habilita o uso otimizado de telas nativas (melhora desempenho e evita crash)
enableScreens();

// Import das telas
import WelcomeScreen from "./src/views/WelcomeScreen";
import LoginScreen from "./src/views/LoginScreen";
import RegisterScreen from "./src/views/RegisterScreen";
import SaldoScreen from "./src/views/SaldoScreen";
import ExtratoScreen from "./src/views/ExtratoScreen";
import ConfirmWasteScreen from "./src/views/ConfirmWasteScreen";
import RegisterWasteScreen from "./src/views/RegisterWasteScreen";
import ProfileScreen from "./src/views/ProfileScreen";
import SecurityCenterScreen from "./src/views/SecurityCenterScreen";
import EditProfileScreen from "./src/views/EditProfileScreen";
import MenuScreen from "./src/views/MenuScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  // Oculta a barra de navegação do Android (modo imersivo)
  useEffect(() => {
    const hideNavigationBar = async () => {
      try {
        // Define modo imersivo total (a barra some completamente)
        await NavigationBar.setVisibilityAsync("hidden");

        // Permite revelar a barra deslizando de baixo pra cima
        await NavigationBar.setBehaviorAsync("overlay-swipe");
      } catch (error) {
        console.warn("Falha ao ocultar a barra de navegação:", error);
      }
    };

    hideNavigationBar();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        {/* Telas principais */}
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="RegisterAluno" component={RegisterScreen} />
        <Stack.Screen name="Saldo" component={SaldoScreen} />
        <Stack.Screen name="Extrato" component={ExtratoScreen} />
        <Stack.Screen name="ConfirmWaste" component={ConfirmWasteScreen} />
        <Stack.Screen name="RegisterWaste" component={RegisterWasteScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />

        {/* Telas adicionais */}
        <Stack.Screen
          name="SecurityCenter"
          component={SecurityCenterScreen}
        />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
