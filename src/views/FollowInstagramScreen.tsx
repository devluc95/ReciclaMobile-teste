import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const FollowInstagramScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const logo = require('../../assets/logo.png');

  const handleSeguirAgora = async () => {
    // deep link do app; se não abrir, cai para o site
    const appUrl = 'instagram://user?username=planetaverde'; // ajuste o @
    const webUrl = 'https://instagram.com/planetaverde';

    const supported = await Linking.canOpenURL(appUrl);
    if (supported) {
      Linking.openURL(appUrl);
    } else {
      Linking.openURL(webUrl);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header superior "Voltar / Perfil" */}
      <View style={styles.headerTop}>
        <TouchableOpacity
          style={styles.backRow}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={22} color="#fff" />
          <Text style={styles.backText}>Perfil</Text>
        </TouchableOpacity>
      </View>

      {/* Header Planeta Verde / Instagram */}
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
            <Text style={styles.headerSubtitle}>Instagram</Text>
          </View>
        </View>

        <View style={styles.headerAvatarCircle}>
          <Ionicons name="person" size={22} color="#fff" />
        </View>
      </View>

      {/* Conteúdo */}
      <View style={styles.content}>
        {/* Ícone grande de câmera */}
        <View style={styles.bigIconWrapper}>
          <Ionicons name="camera-outline" size={40} color="#fff" />
        </View>

        <Text style={styles.title}>
          Siga nossa página no Instagram{'\n'}para continuar
        </Text>

        <Text style={styles.subTitle}>
          Acompanhe dicas de reciclagem e novidades sobre{'\n'}
          sustentabilidade
        </Text>

        {/* Botões */}
        <TouchableOpacity
          style={styles.buttonFilled}
          activeOpacity={0.8}
          onPress={handleSeguirAgora}
        >
          <Ionicons
            name="camera-outline"
            size={20}
            color="#12B24E"
            style={{ marginRight: 8 }}
          />
          <Text style={styles.buttonFilledText}>Seguir agora</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonOutlined}
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonOutlinedText}>Pular por agora</Text>
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
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: 40,
  },
  bigIconWrapper: {
    width: 120,
    height: 120,
    borderRadius: 32,
    borderWidth: 4,
    borderColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 26,
  },
  title: {
    color: WHITE,
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 16,
  },
  subTitle: {
    color: WHITE,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 32,
  },

  buttonFilled: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: WHITE,
    borderRadius: 18,
    paddingVertical: 14,
    paddingHorizontal: 32,
    alignSelf: 'stretch',
    marginBottom: 16,
  },
  buttonFilledText: {
    color: GREEN_BACKGROUND,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
  },
  buttonOutlined: {
    borderColor: WHITE,
    borderWidth: 1,
    borderRadius: 18,
    paddingVertical: 14,
    paddingHorizontal: 32,
  },
  buttonOutlinedText: {
    color: WHITE,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default FollowInstagramScreen;
