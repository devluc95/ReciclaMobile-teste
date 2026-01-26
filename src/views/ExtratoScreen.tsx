import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function ExtratoScreen({ navigation }) {
  const logo = require('../../assets/logo.png');
  const [selectedTab, setSelectedTab] = useState<'residuos' | 'resgates'>(
    'residuos'
  );

  const textoCentro =
    selectedTab === 'residuos'
      ? 'Sem lançamentos ainda'
      : 'Nenhum resgate realizado ainda';

  return (
    <View style={styles.container}>
      {/* Header igual às outras telas */}
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
            <Text style={styles.headerSubtitle}>Históricos</Text>
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

      {/* Abas Resíduos / Resgates */}
      <View style={styles.tabsRow}>
        <TouchableOpacity
          style={[
            styles.tabItem,
            selectedTab === 'residuos' && styles.tabItemActive,
          ]}
          onPress={() => setSelectedTab('residuos')}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === 'residuos' && styles.tabTextActive,
            ]}
          >
            Resíduos
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabItem,
            selectedTab === 'resgates' && styles.tabItemActive,
          ]}
          onPress={() => setSelectedTab('resgates')}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === 'resgates' && styles.tabTextActive,
            ]}
          >
            Resgates
          </Text>
        </TouchableOpacity>
      </View>

      {/* Texto central */}
      <View style={styles.centerArea}>
        <Text style={styles.centerText}>{textoCentro}</Text>
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

        {/* Históricos (ativo) */}
        <TouchableOpacity
          style={styles.bottomTabItem}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Extrato')}
        >
          <Ionicons name="time-outline" size={26} color="#12B24E" />
          <Text
            style={[styles.bottomTabLabel, styles.bottomTabLabelActive]}
          >
            Históricos
          </Text>
        </TouchableOpacity>

        {/* Resgatar */}
        <TouchableOpacity
          style={styles.bottomTabItem}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('ConfirmWaste')}
        >
          <Ionicons name="card-outline" size={26} color="#9e9e9e" />
          <Text style={styles.bottomTabLabel}>Resgatar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
    width: 46,
    height: 46,
    borderRadius: 23,
    borderWidth: 3,
    borderColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* Abas */
  tabsRow: {
    flexDirection: 'row',
    marginTop: 18,
    paddingHorizontal: 20,
  },
  tabItem: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  tabItemActive: {
    backgroundColor: WHITE,
  },
  tabText: {
    color: WHITE,
    fontSize: 18,
    fontWeight: '600',
  },
  tabTextActive: {
    color: GREEN_BACKGROUND,
    fontWeight: '700',
  },

  /* Texto central */
  centerArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    color: WHITE,
    fontSize: 22,
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
