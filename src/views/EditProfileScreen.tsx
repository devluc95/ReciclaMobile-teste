import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const EditProfileScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [nome, setNome] = useState('Patrick De Sousa Ferreira');
  const [email, setEmail] = useState('sousapatrick538@gmail.com');
  const [cpf, setCpf] = useState('068.224.401-51');
  const [instagram, setInstagram] = useState('');
  const [matricula, setMatricula] = useState('84783');
  const [escola, setEscola] = useState('Olimpo');

  const logo = require('../../assets/logo.png');

  const handleSave = () => {
    // TODO: salvar dados se precisar
    navigation.navigate('Profile'); // volta para ProfileScreen
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerTop}>
        <TouchableOpacity
          style={styles.backRow}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={22} color="#fff" />
          <Text style={styles.backText}>Perfil</Text>
        </TouchableOpacity>
      </View>

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
            <Text style={styles.headerSubtitle}>Meus Dados</Text>
          </View>
        </View>

        <View style={styles.headerAvatarCircle}>
          <Ionicons name="person" size={22} color="#fff" />
        </View>
      </View>

      {/* Conteúdo fixo */}
      <View style={styles.content}>
        {/* Avatar + Alterar foto */}
        <View style={styles.avatarWrapper}>
          <View style={styles.avatarCircleOuter}>
            <View style={styles.avatarCircleInner}>
              <Ionicons name="person" size={32} color="#12B24E" />
            </View>
          </View>
          <TouchableOpacity style={styles.changePhotoButton}>
            <Text style={styles.changePhotoText}>Alterar foto</Text>
          </TouchableOpacity>
        </View>

        {/* Formulário */}
        <View style={styles.form}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            value={nome}
            onChangeText={setNome}
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <Text style={styles.label}>CPF</Text>
          <TextInput
            style={styles.input}
            value={cpf}
            onChangeText={setCpf}
            keyboardType="numeric"
          />

          <Text style={styles.label}>Instagram</Text>
          <TextInput
            style={styles.input}
            value={instagram}
            onChangeText={setInstagram}
            placeholder="@usuario"
            placeholderTextColor="#C7C7CD"
          />

          <Text style={styles.label}>Matrícula</Text>
          <TextInput
            style={styles.input}
            value={matricula}
            onChangeText={setMatricula}
            keyboardType="numeric"
          />

          <Text style={styles.label}>Escola</Text>
          <TextInput
            style={styles.input}
            value={escola}
            onChangeText={setEscola}
            placeholder="Olimpo ⌄"
            placeholderTextColor="#C7C7CD"
          />
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Salvar</Text>
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

  headerTop: {
    paddingTop: 28,
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

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLogoWrapper: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: GREEN_DARK,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  headerLogo: {
    width: 24,
    height: 24,
  },
  headerTextWrapper: {
    justifyContent: 'center',
  },
  headerTitle: {
    color: WHITE,
    fontSize: 18,
    fontWeight: '700',
  },
  headerSubtitle: {
    color: WHITE,
    fontSize: 14,
    marginTop: 2,
  },
  headerAvatarCircle: {
    marginLeft: 'auto',
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 3,
    borderColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 12,
  },

  avatarWrapper: {
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarCircleOuter: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 5,
    borderColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarCircleInner: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  changePhotoButton: {
    borderWidth: 1,
    borderColor: WHITE,
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 26,
  },
  changePhotoText: {
    color: WHITE,
    fontSize: 16,
  },

  form: {
    flex: 1,
  },
  label: {
    color: WHITE,
    fontSize: 14,
    marginBottom: 4,
    marginTop: 6,
  },
  input: {
    backgroundColor: WHITE,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 14,
  },

  saveButton: {
    backgroundColor: WHITE,
    borderRadius: 16,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  saveButtonText: {
    color: GREEN_BACKGROUND,
    fontSize: 18,
    fontWeight: '600',
  },
});

export default EditProfileScreen;
