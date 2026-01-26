// src/views/WelcomeScreen.tsx

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from "react-native";

export default function WelcomeScreen({ navigation }: any) {
  const [loading, setLoading] = React.useState(false);

  const handleStart = () => {
    setLoading(true);
    // Simule algum processo, depois navegue
    setTimeout(() => {
      setLoading(false);
      navigation.navigate("Login");
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logoBox}>
          <Image
            source={require("../../assets/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
      </View>

      <View style={styles.line} />

      <Text style={styles.appTitle}>Planeta Verde</Text>
      <Text style={styles.appSubtitle}>Seu parceiro em sustentabilidade</Text>

      <TouchableOpacity style={styles.button} onPress={handleStart} disabled={loading}>
        {loading ? (
          <ActivityIndicator color="#2E7D32" />
        ) : (
          <Text style={styles.buttonText}>Começar</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B5E20",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderBottomLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomRightRadius: 0,
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    marginBottom: 22,
  },
  logoBox: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 80,
  },
  line: {
    width: 80,
    height: 3,
    backgroundColor: "#BDBDBD",
    borderRadius: 2,
    marginVertical: 24,
  },
  appTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 7,
  },
  appSubtitle: {
    color: "#d6eedb",
    fontSize: 14,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 10,
    elevation: 2,
    marginTop: 60,
  },
  buttonText: {
    color: "#2E6136",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
