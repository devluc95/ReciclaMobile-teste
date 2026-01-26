import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useMenuViewModel } from "../viewsmodels/MenuViewModel";
import { useNavigation } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function MenuScreen() {
  const navigation = useNavigation();
  const logo = require("../../assets/logo.png");

  const {
    handleRegisterWaste,
    handleSaldo,
    handleExtrato,
    handleProfile,
    handleInstagram,
    handleLogoutConfirm,
  } = useMenuViewModel();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.navigate("Saldo")}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Image source={logo} style={styles.smallLogo} />
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.headerTitle}>Recicla Fácil</Text>
          <Text style={styles.headerSubtitle}>Menu</Text>
        </View>
      </View>

      {/* Logo Central */}
      <View style={styles.logoBox}>
        <Image source={logo} style={styles.logoCenter} />
      </View>

      {/* Títulos */}
      <Text style={styles.title}>Menu Principal</Text>
      <Text style={styles.subtitle}>Seu parceiro em sustentabilidade</Text>

      {/* Botões */}
      <TouchableOpacity style={styles.button} onPress={handleRegisterWaste}>
        <Text style={styles.buttonText}>Cadastrar resíduos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleSaldo}>
        <Text style={styles.buttonText}>Ver Saldo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleExtrato}>
        <Text style={styles.buttonText}>Histórico</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleProfile}>
        <Text style={styles.buttonText}>Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleInstagram}>
        <Text style={styles.buttonText}>Seguir no instagram</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogoutConfirm}>
        <Text style={styles.buttonTextSair}>Sair</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1B5E20", alignItems: "center", padding: 10 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    marginBottom: 20,
    marginTop: 30,
  },
  backButton: {
    paddingRight: 10,
    paddingVertical: 4,
  },
  smallLogo: {
    width: 28,
    height: 28,
    borderRadius: 6,
    marginLeft: 2,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  headerSubtitle: {
    color: "#fff",
    fontSize: 12,
  },
  logoBox: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 8,
    marginBottom: 20,
    marginTop: 20,
  },
  logoCenter: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 6,
  },
  subtitle: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 8,
    marginVertical: 6,
    alignItems: "center",
    width: "80%",
  },
  buttonText: {
    color: "#316241",
    fontSize: 15,
    fontWeight: "bold",
  },
  buttonTextSair: {
    color: "#af2b27",
    fontSize: 15,
    fontWeight: "bold",
  },
});
