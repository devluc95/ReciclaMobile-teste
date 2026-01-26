import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function RegisterScreen() {
  const [nome, setNome] = useState("");
  const [matricula, setMatricula] = useState("");
  const [centro, setCentro] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const logo = require("../../assets/logo.png");

  return (
    <View style={styles.container}>
      {/* Logo e título */}
      <View style={styles.logoTitleContainer}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
        <View style={{ marginLeft: 12 }}>
          <Text style={styles.title}>Planeta Verde</Text>
          <Text style={styles.subtitle}>Aluno</Text>
        </View>
      </View>

      {/* Nome Completo */}
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Nome Completo</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu Nome Aqui"
          placeholderTextColor="#BDBDBD"
          value={nome}
          onChangeText={setNome}
        />
      </View>

      {/* Matrícula */}
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Matrícula</Text>
        <TextInput
          style={styles.input}
          placeholder="999999-9"
          placeholderTextColor="#BDBDBD"
          value={matricula}
          onChangeText={setMatricula}
        />
      </View>
      
      {/* Centro Educacional */}
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Centro Educacional</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={centro}
            style={styles.picker}
            onValueChange={(itemValue) => setCentro(itemValue)}
          >
            <Picker.Item label="Selecione a escola" value="" />
            <Picker.Item label="Centro 1" value="Centro 1" />
            <Picker.Item label="Centro 2" value="Centro 2" />
          </Picker>
        </View>
      </View>

      {/* Telefone */}
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Telefone</Text>
        <TextInput
          style={styles.input}
          placeholder="(99) 9999-9999"
          placeholderTextColor="#BDBDBD"
          value={telefone}
          onChangeText={setTelefone}
          keyboardType="phone-pad"
        />
      </View>

      {/* Email */}
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="seu@email.com"
          placeholderTextColor="#BDBDBD"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      {/* Senha */}
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="************"
          placeholderTextColor="#BDBDBD"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />

        {/* Mostrar senha */}
        <View style={styles.showPasswordRow}>
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "checkbox" : "square-outline"}
              size={22}
              color="#1B5E20"
              style={{ marginRight: 6 }}
            />
          </TouchableOpacity>
          <Text style={styles.showPasswordText}>Mostrar Senha</Text>
        </View>
      </View>

      {/* Botão Registrar */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B5E20",
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  logoTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  logo: {
    width: 52,
    height: 52,
    borderRadius: 12,
    padding: 6,
    backgroundColor: "#fff",
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  subtitle: {
    color: "#fff",
    fontSize: 14,
    marginTop: 1,
    fontWeight: "500",
    opacity: 0.85,
  },
  fieldContainer: {
    width: "100%",
    marginBottom: 8,
  },
  label: {
    color: "#fff",
    fontSize: 15,
    marginBottom: 2,
    marginLeft: 2,
    fontWeight: "500",
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 15,
    marginBottom: 2,
  },
  pickerContainer: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 2,
    overflow: "hidden",
  },
  picker: {
    width: "100%",
    height: 50,
  },
  showPasswordRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 8,
    alignSelf: "flex-start",
  },
  showPasswordText: {
    color: "#fff",
    fontSize: 15,
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 13,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 12,
    width: "100%",
  },
  buttonText: {
    color: "#1B5E20",
    fontWeight: "bold",
    fontSize: 16,
  },
});
