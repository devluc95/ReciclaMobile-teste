import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const SecurityCenterScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const logo = require('../../assets/logo.png');

  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmacao, setConfirmacao] = useState('');

  const isValid =
    senhaAtual.trim().length > 0 &&
    novaSenha.trim().length > 0 &&
    confirmacao.trim().length > 0 &&
    novaSenha === confirmacao;

  const handleSalvar = () => {
    if (!isValid) return;
    // TODO: lógica para alterar senha
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Header superior "Perfil" */}
      <View style={styles.headerTop}>
        <TouchableOpacity
          style={styles.backRow}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={22} color="#fff" />
          <Text style={styles.backText}>Perfil</Text>
        </TouchableOpacity>
      </View>

      {/* Header Planeta Verde / Central de Segurança */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.headerLogoWrapper}>
            <Image
              source={logo}
              style={styles.headerLogo}
              resizeMode="contain"
            />
          </View>
          <View style={styles.headerTextWrapper}>
            <Text style={styles.headerTitle}>Planeta Verde</Text>
            <Text style={styles.headerSubtitle}>Central de Segurança</Text>
          </View>
        </View>

        <View style={styles.headerAvatarCircle}>
          <Ionicons name="person" size={22} color="#fff" />
        </View>
      </View>

      {/* Conteúdo */}
      <View style={styles.content}>
        <Text style={styles.label}>Senha Atual</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          value={senhaAtual}
          onChangeText={setSenhaAtual}
          placeholder="************"
          placeholderTextColor="#C7C7CD"
        />

        <Text style={styles.label}>Nova Senha</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          value={novaSenha}
          onChangeText={setNovaSenha}
          placeholder="************"
          placeholderTextColor="#C7C7CD"
        />

        <Text style={styles.label}>Confirme a Nova Senha</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          value={confirmacao}
          onChangeText={setConfirmacao}
          placeholder="************"
          placeholderTextColor="#C7C7CD"
        />

        <TouchableOpacity
          style={[styles.saveButton, !isValid && styles.saveButtonDisabled]}
          activeOpacity={isValid ? 0.8 : 1}
          onPress={handleSalvar}
        >
          <Text
            style={[
              styles.saveButtonText,
              !isValid && styles.saveButtonTextDisabled,
            ]}
          >
            Salvar
          </Text>
        </TouchableOpacity>
      </View>
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

  /* Header superior */
  headerTop: {
    paddingTop: 32,
    paddingHorizontal: 20,
  },
  backRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    color: WHITE,
    fontSize: 18,
    marginLeft: 6,
  },

  /* Header principal */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 16,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLogoWrapper: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: GREEN_DARK,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  headerLogo: {
    width: 28,
    height: 28,
  },
  headerTextWrapper: {
    justifyContent: 'center',
  },
  headerTitle: {
    color: WHITE,
    fontSize: 20,
    fontWeight: '700',
  },
  headerSubtitle: {
    color: WHITE,
    fontSize: 16,
    marginTop: 2,
  },
  headerAvatarCircle: {
    marginLeft: 'auto',
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 3,
    borderColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* Conteúdo */
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 32,
  },
  label: {
    color: WHITE,
    fontSize: 16,
    marginBottom: 6,
  },
  input: {
    backgroundColor: WHITE,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 18,
  },

  saveButton: {
    backgroundColor: '#7ED68E',
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  saveButtonDisabled: {
    backgroundColor: '#A5E1AE',
  },
  saveButtonText: {
    color: '#1E7A33',
    fontSize: 20,
    fontWeight: '600',
  },
  saveButtonTextDisabled: {
    color: '#6AA575',
  },
});

export default SecurityCenterScreen;
