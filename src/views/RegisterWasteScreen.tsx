import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const materialTabs = ['Plastico', 'Papel', 'Vidro', 'Metal', 'Organico'];

const RegisterWasteScreen: React.FC = ({ navigation }: any) => {
  const [selectedTab, setSelectedTab] = useState('Plastico');
  const [unidade, setUnidade] = useState('');
  const [itens, setItens] = useState<{ tipo: string; quantidade: string }[]>([]);

  const logo = require('../../assets/logo.png');

  const handleAddItem = () => {
    if (!unidade.trim()) return;
    const novoItem = { tipo: selectedTab, quantidade: unidade };
    setItens((prev) => [...prev, novoItem]);
    setUnidade('');
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.headerLogoWrapper}>
            <Image source={logo} style={styles.logo} resizeMode="contain" />
          </View>
          <View style={styles.headerTextWrapper}>
            <Text style={styles.headerTitle}>Planeta Verde</Text>
            <Text style={styles.headerSubtitle}>Cadastrar Resíduos</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.profileButton}
          onPress={() => navigation.navigate('Menu')}
        >
          <View style={styles.profileCircle}>
            <Ionicons name="person" size={28} color="#12B24E" />
          </View>
        </TouchableOpacity>
      </View>

      {/* CONTEÚDO */}
      <View style={styles.content}>
        {/* TABS DE MATERIAIS */}
        <View style={styles.tabsContainer}>
          <View style={styles.tabsBackground}>
            {materialTabs.map((tab) => {
              const isActive = tab === selectedTab;
              return (
                <TouchableOpacity
                  key={tab}
                  style={[styles.tabButton, isActive && styles.tabButtonActive]}
                  onPress={() => setSelectedTab(tab)}
                >
                  <Text
                    style={[styles.tabText, isActive && styles.tabTextActive]}
                  >
                    {tab}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* CAMPO UNIDADE */}
        <View style={styles.fieldBlock}>
          <Text style={styles.label}>Unidade (Un)</Text>
          <View style={styles.inputBigWrapper}>
            <TextInput
              style={styles.inputBig}
              value={unidade}
              onChangeText={setUnidade}
              keyboardType="decimal-pad"
              placeholder="Ex: 2.0"
              placeholderTextColor="#C7C7CD"
            />
          </View>
        </View>

        {/* BOTÃO TIRAR FOTO */}
        <TouchableOpacity style={styles.photoButton} activeOpacity={0.8}>
          <Ionicons
            name="camera-outline"
            size={22}
            color="#ffffff"
            style={{ marginRight: 8 }}
          />
          <Text style={styles.photoButtonText}>Tirar foto</Text>
        </TouchableOpacity>

        {/* ITENS ADICIONADOS */}
        <View style={styles.itensInfo}>
          <Text style={styles.itensTitle}>
            Itens adicionados {itens.length}/10
          </Text>

          {itens.length === 0 ? (
            <Text style={styles.itensSubtitle}>
              Nenhum item na lista. Adicione itens e depois finalize o cadastro.
            </Text>
          ) : (
            <FlatList
              data={itens}
              keyExtractor={(_, i) => i.toString()}
              renderItem={({ item }) => (
                <View style={styles.itemLinha}>
                  <Ionicons
                    name="checkmark-circle"
                    size={18}
                    color="#A7E9B9"
                    style={{ marginRight: 6 }}
                  />
                  <Text style={styles.itemTexto}>
                    {item.tipo} — {item.quantidade} Un
                  </Text>
                </View>
              )}
            />
          )}
        </View>

        {/* BOTÕES PRINCIPAIS */}
        <TouchableOpacity
          style={styles.mainButton}
          activeOpacity={0.8}
          onPress={handleAddItem}
        >
          <Text style={styles.mainButtonText}>Adicionar item à lista</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.mainButton} activeOpacity={0.8}>
          <Text style={styles.mainButtonText}>Cadastrar lista</Text>
        </TouchableOpacity>
      </View>

      {/* TAB BAR FLUTUANTE */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={styles.tabItem}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Saldo')}
        >
          <Ionicons name="home" size={28} color="#fff" />
          <Text style={styles.tabLabel}>Saldo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('RegisterWaste')}
        >
          <Ionicons name="leaf" size={28} color="#7FFFD4" />
          <Text style={[styles.tabLabel, styles.tabLabelActive]}>
            Cadastrar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Extrato')}
        >
          <Ionicons name="time-outline" size={28} color="#fff" />
          <Text style={styles.tabLabel}>Históricos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('ConfirmWaste')}
        >
          <Ionicons name="card-outline" size={28} color="#fff" />
          <Text style={styles.tabLabel}>Resgatar</Text>
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

  // HEADER
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 45,
    paddingHorizontal: 20,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLogoWrapper: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: GREEN_DARK,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  logo: {
    width: 35,
    height: 35,
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
    fontSize: 15,
    marginTop: 2,
  },
  profileButton: {
    marginLeft: 'auto',
  },
  profileCircle: {
    width: 38,
    height: 38,
    borderRadius: 24,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#A7E9B9',
  },

  // CONTEÚDO
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  // TABS
  tabsContainer: {
    marginTop: 10,
    marginBottom: 18,
    alignItems: 'center',
  },
  tabsBackground: {
    flexDirection: 'row',
    backgroundColor: GREEN_DARK,
    borderRadius: 25,
    paddingVertical: 4,
    paddingHorizontal: 4,
    justifyContent: 'space-between',
    width: '95%',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    paddingVertical: 6,
  },
  tabButtonActive: {
    backgroundColor: '#BFEBC9',
  },
  tabText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  tabTextActive: {
    color: GREEN_DARK,
    fontWeight: '700',
  },

  // CAMPOS
  fieldBlock: {
    marginBottom: 14,
  },
  label: {
    color: WHITE,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  inputBigWrapper: {
    backgroundColor: '#E8F6EA',
    borderRadius: 10,
    height: 55,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  inputBig: {
    fontSize: 18,
    color: '#4d4d4d',
  },

  // BOTÃO FOTO
  photoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: GREEN_DARK,
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop: 6,
    marginBottom: 18,
  },
  photoButtonText: {
    color: WHITE,
    fontSize: 16,
    fontWeight: '600',
  },

  // ITENS
  itensInfo: {
    marginBottom: 16,
  },
  itensTitle: {
    color: WHITE,
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 6,
  },
  itensSubtitle: {
    color: WHITE,
    fontSize: 14,
  },
  itemLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  itemTexto: {
    color: WHITE,
    fontSize: 16,
  },

  // BOTÕES PRINCIPAIS
  mainButton: {
    backgroundColor: WHITE,
    borderRadius: 18,
    paddingVertical: 14,
    paddingHorizontal: 24,
    marginBottom: 10,
  },
  mainButtonText: {
    color: GREEN_BACKGROUND,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },

  // TAB BAR FLUTUANTE
  tabBar: {
    position: 'absolute',
    bottom: 20,
    left: '5%',
    right: '5%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: GREEN_DARK,
    paddingVertical: 8,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 6,
  },
  tabItem: {
    alignItems: "center",
  },
  tabLabel: {
    fontSize: 12,
    color: '#fff',
    marginTop: 2,
  },
  tabLabelActive: {
    color: '#7FFFD4',
    fontWeight: '600',
  },
});

export default RegisterWasteScreen;
