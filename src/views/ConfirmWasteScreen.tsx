import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const ConfirmWasteScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [valorResgatar, setValorResgatar] = useState('');
  const [chavePix, setChavePix] = useState('');

  const logo = require('../../assets/logo.png');

  const saldoDisponivel = 0;
  const valorResgatado = 0;

  return (
    <View style={styles.container}>
      {/* Header igual ao saldo */}
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
            <Text style={styles.headerSubtitle}>Resgatar Saldo</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.profileButton}
          onPress={() => navigation.navigate('Profile')}
        >
          <View style={styles.profileCircle}>
            <Ionicons name="person" size={24} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>

      {/* Conteúdo principal */}
      <View style={styles.content}>
        <Text style={styles.labelTop}>Saldo disponível</Text>
        <Text style={styles.saldoNumero}>
          R$ {saldoDisponivel.toFixed(2).replace('.', ',')}
        </Text>

        <Text style={[styles.labelTop, { marginTop: 14 }]}>
          Valor resgatado
        </Text>
        <Text style={styles.saldoMenor}>
          R$ {valorResgatado.toFixed(2).replace('.', ',')}
        </Text>

        {/* Campo Valor a resgatar */}
        <View style={{ width: '100%', marginTop: 26 }}>
          <Text style={styles.labelCampo}>Valor a resgatar</Text>
          <TextInput
            style={styles.input}
            placeholder="R$ 0,00"
            placeholderTextColor="#C7C7CD"
            keyboardType="decimal-pad"
            value={valorResgatar}
            onChangeText={setValorResgatar}
          />
        </View>

        {/* Campo chave pix */}
        <View style={{ width: '100%', marginTop: 12 }}>
          <Text style={styles.labelCampo}>
            Ou insira uma nova chave pix
          </Text>
          <TextInput
            style={styles.input}
            placeholder="usuario@email.com ou telefone"
            placeholderTextColor="#C7C7CD"
            value={chavePix}
            onChangeText={setChavePix}
          />
        </View>

        {/* Botão confirmar */}
        <TouchableOpacity
          style={styles.confirmButton}
          activeOpacity={0.8}
          onPress={() => {
            // TODO: lógica de resgate
          }}
        >
          <Text style={styles.confirmText}>Confirmar resgate</Text>
        </TouchableOpacity>
      </View>

      {/* Barra de menu inferior */}
      <View style={styles.tabBar}>
        {/* Saldo */}
        <TouchableOpacity
          style={styles.bottomTabItem}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Saldo')}
        >
          <Ionicons name="home" size={26} color="#9e9e9e" />
          <Text style={styles.bottomTabLabel}>Saldo</Text>
        </TouchableOpacity>

        {/* Cadastrar */}
        <TouchableOpacity
          style={styles.bottomTabItem}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('RegisterWaste')}
        >
          <Ionicons name="leaf" size={26} color="#9e9e9e" />
          <Text style={styles.bottomTabLabel}>Cadastrar</Text>
        </TouchableOpacity>

        {/* Históricos */}
        <TouchableOpacity
          style={styles.bottomTabItem}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Extrato')}
        >
          <Ionicons name="time-outline" size={26} color="#9e9e9e" />
          <Text style={styles.bottomTabLabel}>Históricos</Text>
        </TouchableOpacity>

        {/* Resgatar (ativo) */}
        <TouchableOpacity
          style={styles.bottomTabItem}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('ConfirmWaste')}
        >
          <Ionicons name="card-outline" size={26} color="#12B24E" />
          <Text
            style={[styles.bottomTabLabel, styles.bottomTabLabelActive]}
          >
            Resgatar
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

  /* Header */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 32,
    paddingHorizontal: 20,
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
  profileButton: {
    marginLeft: 'auto',
  },
  profileCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 3,
    borderColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* Conteúdo */
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: 30,
  },
  labelTop: {
    color: WHITE,
    fontSize: 18,
  },
  saldoNumero: {
    color: WHITE,
    fontSize: 60,
    fontWeight: 'bold',
    marginTop: 8,
  },
  saldoMenor: {
    color: WHITE,
    fontSize: 26,
    marginTop: 4,
  },

  labelCampo: {
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
  },

  confirmButton: {
    marginTop: 26,
    backgroundColor: WHITE,
    borderRadius: 18,
    paddingVertical: 16,
    paddingHorizontal: 40,
    alignSelf: 'stretch',
  },
  confirmText: {
    color: GREEN_BACKGROUND,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },

  /* Barra de menu inferior */
  tabBar: {
    flexDirection: 'row',
    backgroundColor: WHITE,
    paddingTop: 6,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    justifyContent: 'space-around',
  },
  bottomTabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomTabLabel: {
    marginTop: 3,
    fontSize: 12,
    color: '#9e9e9e',
  },
  bottomTabLabelActive: {
    color: '#12B24E',
    fontWeight: '600',
  },
});

export default ConfirmWasteScreen;
