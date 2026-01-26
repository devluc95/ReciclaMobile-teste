import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const ProfileScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header simples com Voltar */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backRow}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>
      </View>

      {/* Avatar grande */}
      <View style={styles.avatarWrapper}>
        <View style={styles.avatarCircleOuter}>
          <View style={styles.avatarCircleInner}>
            <Ionicons name="person" size={40} color="#12B24E" />
          </View>
        </View>
        <Text style={styles.userName}>Nome do Usuário</Text>
        <Text style={styles.userEmail}>sousapatrick538@gmail.com</Text>
      </View>

      {/* Botões */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('EditProfile')}
      >
        <Ionicons
          name="pencil"
          size={22}
          color="#12B24E"
          style={styles.leftIcon}
        />
        <Text style={styles.buttonText}>Editar dados</Text>
      </TouchableOpacity>

      {/* Central de segurança -> SecurityCenterScreen */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SecurityCenter')}
      >
        <Ionicons
          name="shield-checkmark-outline"
          size={22}
          color="#12B24E"
          style={styles.leftIcon}
        />
        <Text style={styles.buttonText}>Central de segurança</Text>
      </TouchableOpacity>

      {/* Instagram -> FollowInstagramScreen */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('FollowInstagram')}
      >
        <Ionicons
          name="logo-instagram"
          size={22}
          color="#12B24E"
          style={styles.leftIcon}
        />
        <Text style={styles.buttonText}>Instagram</Text>
      </TouchableOpacity>

      {/* Sair -> LoginScreen */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const GREEN_BACKGROUND = '#12B24E';
const WHITE = '#FFFFFF';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GREEN_BACKGROUND,
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  /* Header Voltar */
  header: {
    marginBottom: 30,
  },
  backRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    color: WHITE,
    fontSize: 20,
    marginLeft: 8,
  },

  /* Avatar e informações */
  avatarWrapper: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 26,
  },
  avatarCircleOuter: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 6,
    borderColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },
  avatarCircleInner: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    color: WHITE,
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 4,
  },
  userEmail: {
    color: WHITE,
    fontSize: 16,
  },

  /* Botões */
  button: {
    backgroundColor: WHITE,
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  leftIcon: {
    marginRight: 12,
  },
  buttonText: {
    color: GREEN_BACKGROUND,
    fontSize: 18,
    fontWeight: '600',
  },
});

export default ProfileScreen;
