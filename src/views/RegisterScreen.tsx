// src/views/RegisterScreen.tsx
import React from 'react';
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
  ScrollView,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  RegisterAluno: undefined;
  Saldo: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'RegisterAluno'>;

const RegisterScreen: React.FC<Props> = ({ navigation }) => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [cpf, setCpf] = React.useState('');
  const [matricula, setMatricula] = React.useState('');
  const [escola, setEscola] = React.useState('');
  const [instagram, setInstagram] = React.useState('');
  const [senha, setSenha] = React.useState('');

  const isButtonDisabled =
    !nome || !email || !cpf || !matricula || !escola || !senha;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Header com logo e textos */}
          <View style={styles.header}>
            <View style={styles.headerLogoWrapper}>
              <Image
                source={require('../../assets/logo.png')}
                style={styles.headerLogo}
                resizeMode="contain"
              />
            </View>
            <View style={styles.headerTextWrapper}>
              <Text style={styles.headerTitle}>Planeta Verde</Text>
              <Text style={styles.headerSubtitle}>Criar Conta</Text>
            </View>
          </View>

          {/* Campos */}
          <View style={styles.fieldContainer}>
            <TextInput
              style={styles.input}
              placeholder="Nome Completo"
              placeholderTextColor="#C7C7CD"
              value={nome}
              onChangeText={setNome}
            />
          </View>

          <View style={styles.fieldContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#C7C7CD"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.fieldContainer}>
            <TextInput
              style={styles.input}
              placeholder="CPF"
              placeholderTextColor="#C7C7CD"
              value={cpf}
              onChangeText={setCpf}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.fieldContainer}>
            <TextInput
              style={styles.input}
              placeholder="Matrícula"
              placeholderTextColor="#C7C7CD"
              value={matricula}
              onChangeText={setMatricula}
            />
          </View>

          {/* Escola */}
          <View style={styles.fieldContainer}>
            <TextInput
              style={styles.input}
              placeholder="Selecione uma escola ⌄"
              placeholderTextColor="#C7C7CD"
              value={escola}
              onChangeText={setEscola}
            />
          </View>

          <View style={styles.fieldContainer}>
            <TextInput
              style={styles.input}
              placeholder="Instagram"
              placeholderTextColor="#C7C7CD"
              value={instagram}
              onChangeText={setInstagram}
              autoCapitalize="none"
            />
          </View>

          <View style={styles.fieldContainer}>
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#C7C7CD"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
            />
          </View>

          {/* Botão Cadastrar */}
          <TouchableOpacity
            style={[
              styles.button,
              isButtonDisabled && styles.buttonDisabled,
            ]}
            activeOpacity={0.7}
            disabled={isButtonDisabled}
            onPress={() => {
              // TODO: lógica de cadastro
            }}
          >
            <Text
              style={[
                styles.buttonText,
                isButtonDisabled && styles.buttonTextDisabled,
              ]}
            >
              Cadastrar
            </Text>
          </TouchableOpacity>

          {/* Botão Já tenho uma conta */}
          <TouchableOpacity
            style={styles.secondaryButton}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.secondaryButtonText}>
              Já tenho uma conta
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const GREEN_BACKGROUND = '#12B24E';
const GREEN_DARK = '#0C7F38';
const WHITE = '#FFFFFF';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GREEN_BACKGROUND,
  },
  keyboardContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 22,
  },
  headerLogoWrapper: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: GREEN_DARK,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  headerLogo: {
    width: 40,
    height: 40,
  },
  headerTextWrapper: {
    justifyContent: 'center',
  },
  headerTitle: {
    color: WHITE,
    fontSize: 22,
    fontWeight: '700',
  },
  headerSubtitle: {
    color: WHITE,
    fontSize: 16,
    marginTop: 2,
  },
  fieldContainer: {
    marginTop: 12,
  },
  input: {
    backgroundColor: '#E8F6EA',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
  },
  button: {
    marginTop: 24,
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: 'center',
    backgroundColor: WHITE,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: GREEN_DARK,
    fontSize: 18,
    fontWeight: '600',
  },
  buttonTextDisabled: {
    color: GREEN_DARK,
  },
  secondaryButton: {
    marginTop: 16,
    paddingVertical: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: WHITE,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: WHITE,
    fontSize: 17,
    fontWeight: '500',
  },
});

export default RegisterScreen;
