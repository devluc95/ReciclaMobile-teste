import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const MainMenuScreen: React.FC = () => {
  const logo = require('../../assets/logo.png');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => { /* ação voltar */ }}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Image source={logo} style={styles.smallLogo} />
        <View style={{ marginLeft: 8 }}>
          <Text style={styles.headerTitle}>Recicla Fácil</Text>
          <Text style={styles.headerSubtitle}>Menu Principal</Text>
        </View>
        <View style={{ width: 30 }} />
      </View>

      <View style={{ height: 40 }} />

      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>

      <Text style={styles.placeholderText}>Seu parceiro em sustentabilidade</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar resíduos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ver Saldo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Histórico</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://instagram.com')}>
        <Text style={styles.buttonText}>Seguir no instagram</Text>
      </TouchableOpacity>
    </View>
  );
};

const COLOR_BG = '#316241';
const COLOR_BTN = '#799978';
const COLOR_BTN_TEXT = '#fff';
const COLOR_TITLE = '#fff';
const COLOR_SUBTITLE = '#d6eedb';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_BG,
    alignItems: 'center',
    paddingTop: 48,
    paddingHorizontal: 20,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
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
    color: COLOR_TITLE,
    fontSize: 16,
    fontWeight: '600',
  },
  headerSubtitle: {
    color: COLOR_SUBTITLE,
    fontSize: 13,
    marginTop: 2,
  },
  logoContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
  },
  logo: {
    width: 48,
    height: 48,
    resizeMode: 'contain',
  },
  placeholderText: {
    color: COLOR_SUBTITLE,
    fontSize: 14,
    marginTop: 18,
    marginBottom: 18,
    textAlign: 'center',
  },
  button: {
    width: '85%',
    backgroundColor: COLOR_BTN,
    borderRadius: 8,
    paddingVertical: 10,
    marginVertical: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: COLOR_BTN_TEXT,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default MainMenuScreen;
