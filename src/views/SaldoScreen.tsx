import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useSaldoViewModel } from "../viewsmodels/SaldoViewModel";

export default function SaldoScreen({ navigation }) {
  const { saldo } = useSaldoViewModel();

  const saldoResgate = 148.33; // temporário para visual
  const saldoPendente = 0.00; // valor para teste

  // Lista de lançamentos simulada
  const lancamentos = [
    { valor: "R$ 8,33", data: "14/01/2026" },
    { valor: "R$ 129,00", data: "14/01/2026" },
    { valor: "R$ 11,00", data: "26/12/2025" },
  ];

  const logo = require("../../assets/logo.png");

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerLogoWrapper}>
          <Image source={logo} style={styles.logo} resizeMode="contain" />
        </View>
        <View style={{ marginLeft: 8 }}>
          <Text style={styles.headerTitle}>Planeta Verde</Text>
          <Text style={styles.headerSubtitle}>Saldo</Text>
        </View>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate("Profile")}
        >
          <View style={styles.profileCircle}>
            <Ionicons name="person" size={28} color="#12B24E" />
          </View>
        </TouchableOpacity>
      </View>

      {/* CONTEÚDO */}
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.saldoInfo}>Seu saldo para resgate</Text>
        <Text style={styles.saldoResgate}>
          R$ {saldoResgate.toFixed(2).replace(".", ",")}
        </Text>

        <Text style={[styles.saldoInfo, { marginTop: 16 }]}>
          Saldo pendente de Aprovação
        </Text>
        <Text style={styles.saldoPendente}>
          R$ {saldoPendente.toFixed(2).replace(".", ",")}
        </Text>

        {/* LISTA DE LANÇAMENTOS */}
        {lancamentos.length > 0 && (
          <View style={styles.listaLancamentos}>
            {lancamentos.map((item, index) => (
              <View key={index} style={styles.itemLancamento}>
                <View style={styles.itemLeft}>
                  <Ionicons name="checkmark-circle" size={20} color="#fff" />
                  <Text style={styles.itemValor}>{item.valor}</Text>
                </View>
                <Text style={styles.itemData}>{item.data}</Text>
              </View>
            ))}
          </View>
        )}

        {/* BOTÃO QR CODE */}
        <TouchableOpacity
          style={styles.qrButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate(" ")}
        >
          <Text
            style={[
              styles.qrButtonText,
              { color: saldoPendente === 0 ? "#33333378" : "#333" },
            ]}
          >
            Gerar QRCode
          </Text>
        </TouchableOpacity>

        <Text style={styles.obsText}>
          Finalize um cadastro para gerar o QR Code.
        </Text>
      </ScrollView>

      {/* TAB BAR FLUTUANTE */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={styles.tabItem}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Saldo")}
        >
          <Ionicons name="home" size={28} color="#7FFFD4" />
          <Text style={[styles.tabLabel, styles.tabLabelActive]}>Saldo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("RegisterWaste")}
        >
          <Ionicons name="leaf" size={28} color="#fff" />
          <Text style={styles.tabLabel}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Extrato")}
        >
          <Ionicons name="time-outline" size={28} color="#fff" />
          <Text style={styles.tabLabel}>Históricos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("ConfirmWaste")}
        >
          <Ionicons name="card-outline" size={28} color="#fff" />
          <Text style={styles.tabLabel}>Resgatar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const GREEN_BACKGROUND = "#12B24E";
const DARK_GREEN = "#007F3B";
const WHITE = "#FFFFFF";
const GREEN_DARK = "#0C7F38";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GREEN_BACKGROUND,
  },

  // HEADER
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 45,
    paddingHorizontal: 20,
  },
  logo: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: "#007F3B",
    marginLeft: 4,
    marginRight: 3,
  },
  headerTitle: {
    color: WHITE,
    fontSize: 18,
    fontWeight: "700",
  },
  headerSubtitle: {
    color: WHITE,
    fontSize: 15,
  },
  headerLogoWrapper: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: GREEN_DARK,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 2,
  },
  menuButton: {
    marginLeft: "auto",
    padding: 4,
  },
  profileCircle: {
    width: 38,
    height: 38,
    borderRadius: 24,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#A7E9B9",
  },

  // CONTEÚDO CENTRAL
  content: {
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 20,
    marginTop: 90,
  },
  saldoInfo: {
    color: WHITE,
    fontSize: 16,
    textAlign: "center",
  },
  saldoResgate: {
    color: WHITE,
    fontSize: 48,
    fontWeight: "bold",
    marginTop: 8,
  },
  saldoPendente: {
    color: WHITE,
    fontSize: 20,
    fontWeight: "600",
    marginTop: 6,
  },

  // LISTA DE LANÇAMENTOS
  listaLancamentos: {
    width: "90%",
    marginTop: 20,
  },
  itemLancamento: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemValor: {
    color: WHITE,
    fontSize: 16,
    marginLeft: 6,
  },
  itemData: {
    color: WHITE,
    fontSize: 14,
  },

  // BOTÃO QR CODE
  qrButton: {
    backgroundColor: WHITE,
    borderRadius: 10,
    paddingVertical: 14,
    width: "90%",
    marginTop: 25,
  },
  qrButtonText: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  obsText: {
    color: WHITE,
    fontSize: 14,
    textAlign: "center",
    marginTop: 10,
  },

  // TAB BAR FLUTUANTE
  tabBar: {
    position: "absolute",
    bottom: 20,
    left: "5%",
    right: "5%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: DARK_GREEN,
    paddingVertical: 10,
    borderRadius: 20,
    shadowColor: "#000",
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
    color: "#fff",
    marginTop: 2,
  },
  tabLabelActive: {
    color: "#7FFFD4",
    fontWeight: "600",
  },
});