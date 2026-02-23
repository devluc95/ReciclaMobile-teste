import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const ProfileScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Botão Voltar (idêntico ao da imagem) */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
        activeOpacity={0.8}
      >
        <View style={styles.backCircle}>
          <Ionicons name="arrow-back" size={26} color="#fff" />
        </View>
      </TouchableOpacity>

      {/* Avatar grande */}
      <View style={styles.avatarWrapper}>
        <View style={styles.avatarCircleOuter}>
          <View style={styles.avatarCircleInner}>
            <Ionicons name="person" size={40} color="#12B24E" />
          </View>
        </View>
        <Text style={styles.userName}>Nome do Usuário</Text>
        <Text style={styles.userEmail}>lucas.alm.bsb@gmail.com</Text>
      </View>

      {/* Botões */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('EditProfile')}
      >
        <Ionicons name="pencil" size={22} color="#12B24E" style={styles.leftIcon} />
        <Text style={styles.buttonText}>Editar dados</Text>
      </TouchableOpacity>

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

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('FollowInstagram')}
      >
        <Ionicons name="logo-instagram" size={22} color="#12B24E" style={styles.leftIcon} />
        <Text style={styles.buttonText}>Instagram</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
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
    paddingHorizontal: 18,
  },

  // Botão de voltar no topo
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
  },
  backCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.15)', // translúcido
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Avatar e informações
  avatarWrapper: {
    alignItems: 'center',
    marginTop: 140,
    marginBottom: 50,
  },
  avatarCircleOuter: {
    width: 80,
    height: 80,
    borderRadius: 60,
    borderWidth: 6,
    borderColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },
  avatarCircleInner: {
    width: 60,
    height: 60,
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

  // Botões
  button: {
    backgroundColor: WHITE,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
