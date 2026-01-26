// src/views/LoginScreen.js

import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Adicione aqui sua lógica de autenticação
    // Exemplo: navegue para a tela principal após login
    navigation.replace("MainMenu");
  };

  const handleForgotPassword = () => {
    // Implemente a navegação para recuperação de senha, se houver
  };

  return (
    <View style={styles.container}>
      {/* Logo e título */}
      <View style={styles.logoTitleContainer}>
        <View style={styles.logoBox}>
          <Image
            source={require("../../assets/logo.png")}
            style={styles.logo}
          />
        </View>
        <Text style={styles.title}>Planeta Verde</Text>
      </View>

      {/* Formulário */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="seu@email.com"
          placeholderTextColor="#b2b2b2"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="••••••••"
          placeholderTextColor="#b2b2b2"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B5E20",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logoTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 38,
  },
  logoBox: {
    width: 56,
    height: 56,
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderBottomLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomRightRadius: 0, // canto reto
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    marginRight: 12,
  },
  logo: {
    width: 40,
    height: 40,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  formContainer: {
    width: "100%",
  },
  label: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 6,
    marginTop: 22,
    fontWeight: "500",
    marginLeft: 4,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 14,
    marginTop: 14,
    alignItems: "center",
  },
  buttonText: {
    color: "#2E6136",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  forgotPassword: {
    color: "#b2b2b2",
    textDecorationLine: "underline",
    marginTop: 14,
    textAlign: "center",
  },
});
