// src/screens/LoginScreen.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// mesmo names usados no App.js
type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  RegisterAluno: undefined;
  Saldo: undefined; // <- adiciona a rota de saldo
};

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const isButtonDisabled = !email || !senha;

  const handleLogin = () => {
    const emailCorreto = "lucas.alm.bsb@gmail.com";
    const senhaCorreta = "123456*";

    // Reseta o erro antes de validar
    setErrorMessage("");

    if (email.trim() !== emailCorreto) {
      setErrorMessage("Por favor, insira um email válido.");
      return;
    }

    if (senha.trim().length < 6 || !/\d/.test(senha)) {
      setErrorMessage(
        "A senha deve ter mais de 6 caracteres e conter pelo menos um número.",
      );
      return;
    }

    if (senha !== senhaCorreta) {
      setErrorMessage("Por favor, insira a senha correta.");
      return;
    }

    // Login bem-sucedido
    navigation.navigate("Saldo");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.content}>
          {/* Logo centralizado */}
          <View style={styles.logoContainer}>
            <View style={styles.logoWrapper}>
              <Image
                source={require("../../assets/logo.png")}
                style={styles.logo}
                resizeMode="contain"
              />
            </View>
          </View>

          {/* Título */}
          <Text style={styles.title}>Faça seu login!</Text>

          {/* Campo Email */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="usuario@email.com"
              placeholderTextColor="#C7C7CD"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Campo Senha */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="********"
              placeholderTextColor="#C7C7CD"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
            />
          </View>

          {/* Botão Entrar */}
          <TouchableOpacity
            style={[styles.button, isButtonDisabled && styles.buttonDisabled]}
            activeOpacity={0.7}
            disabled={isButtonDisabled}
            onPress={handleLogin}
          >
            <Text
              style={[
                styles.buttonText,
                isButtonDisabled && styles.buttonTextDisabled,
              ]}
            >
              Entrar
            </Text>
          </TouchableOpacity>

          {/* Texto cadastro */}
          <Text style={styles.subText}>Ou realize seu cadastro</Text>

          {/* Botão Criar nova conta */}
          <TouchableOpacity
            style={styles.secondaryButton}
            activeOpacity={0.7}
            onPress={() => navigation.navigate("RegisterAluno")}
          >
            <Text style={styles.secondaryButtonText}>Criar nova conta</Text>
          </TouchableOpacity>

          {/* Mensagem de erro */}
          {errorMessage ? (
            <Text style={styles.errorText}>{errorMessage}</Text>
          ) : null}
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const GREEN_BACKGROUND = "#12B24E";
const GREEN_DARK = "#0C7F38";
const WHITE = "#FFFFFF";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GREEN_BACKGROUND,
  },
  keyboardContainer: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 28,
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 5,
  },
  logoWrapper: {
    width: 90,
    height: 90,
    borderRadius: 10,
    backgroundColor: GREEN_DARK,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 80,
  },
  title: {
    marginTop: 16,
    textAlign: "center",
    fontSize: 28,
    fontWeight: "700",
    color: WHITE,
  },
  fieldContainer: {
    marginTop: 10,
  },
  label: {
    color: WHITE,
    fontSize: 16,
    marginBottom: 6,
  },
  input: {
    backgroundColor: WHITE,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    borderWidth: 1, // ← espessura da borda
    borderColor: "#000", // ← cor da borda
  },
  button: {
    marginTop: 26,
    borderRadius: 10,
    paddingVertical: 13,
    alignItems: "center",
    backgroundColor: GREEN_DARK,
  },
  buttonDisabled: {
    backgroundColor: "#A4D8B5",
  },
  buttonText: {
    color: WHITE,
    fontSize: 18,
    fontWeight: "600",
  },
  buttonTextDisabled: {
    color: "#5F8F6B",
  },
  subText: {
    marginTop: 15,
    textAlign: "center",
    color: WHITE,
    fontSize: 16,
    fontWeight: "bold",
  },
  secondaryButton: {
    marginTop: 16,
    paddingVertical: 14,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: WHITE,
    alignItems: "center",
    width: "50%",
    alignSelf: "center",
  },
  secondaryButtonText: {
    color: WHITE,
    fontSize: 17,
    fontWeight: "500",
  },
  errorText: {
    marginTop: 16,
    textAlign: "center",
    color: WHITE,
    fontSize: 15,
  },
});

export default LoginScreen;
