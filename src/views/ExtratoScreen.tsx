import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ExtratoScreen({ navigation }) {
  const logo = require("../../assets/logo.png");
  const [selectedTab, setSelectedTab] = useState<"residuos" | "resgates">(
    "residuos",
  );

  const saldoTotal = 554.96;
  const saldoResgate = 503.96;

  // Itens simulados de resíduos
  const residuos = [
    {
      tipo: "Papel",
      quantidade: "12 Un",
      valor: "R$ 25,20",
      data: "22/02/2026",
    },
    {
      tipo: "Metal",
      quantidade: "2 Un",
      valor: "R$ 25,80",
      data: "15/02/2026",
    },
    {
      tipo: "Papel",
      quantidade: "20 Un",
      valor: "R$ 42,00",
      data: "08/02/2026",
    },
    {
      tipo: "Metal",
      quantidade: "2 Un",
      valor: "R$ 25,80",
      data: "08/02/2026",
    },
    {
      tipo: "Orgânico",
      quantidade: "5 Un",
      valor: "R$ 2,50",
      data: "08/02/2026",
    },
    {
      tipo: "Papel",
      quantidade: "12 Un",
      valor: "R$ 25,20",
      data: "22/02/2026",
    },
    {
      tipo: "Metal",
      quantidade: "2 Un",
      valor: "R$ 25,80",
      data: "15/02/2026",
    },
    {
      tipo: "Papel",
      quantidade: "20 Un",
      valor: "R$ 42,00",
      data: "08/02/2026",
    },
    {
      tipo: "Metal",
      quantidade: "2 Un",
      valor: "R$ 25,80",
      data: "08/02/2026",
    },
    {
      tipo: "Orgânico",
      quantidade: "5 Un",
      valor: "R$ 2,50",
      data: "08/02/2026",
    },
  ];

  // Itens simulados de resgates
  const resgates = [
    {
      valor: "R$ 67,80",
      email: "dev.lucasbsb@gmail.com",
      status: "Realizado",
      data: "15/02/2026",
    },
    {
      valor: "R$ 72,43",
      email: "dev.lucasbsb@gmail.com",
      status: "Realizado",
      data: "08/02/2026",
    },
    {
      valor: "R$ 100,33",
      email: "dev.lucasbsb@gmail.com",
      status: "Realizado",
      data: "08/02/2026",
    },
    {
      valor: "R$ 11,00",
      email: "dev.lucasbsb@gmail.com",
      status: "Realizado",
      data: "04/02/2026",
    },
    {
      valor: "R$ 100,00",
      email: "dev.lucasbsb@gmail.com",
      status: "Realizado",
      data: "19/01/2026",
    },
    {
      valor: "R$ 12,90",
      email: "dev.lucasbsb@gmail.com",
      status: "Realizado",
      data: "26/12/2025",
    },
    {
      valor: "R$ 67,80",
      email: "dev.lucasbsb@gmail.com",
      status: "Realizado",
      data: "15/02/2026",
    },
    {
      valor: "R$ 72,43",
      email: "dev.lucasbsb@gmail.com",
      status: "Realizado",
      data: "08/02/2026",
    },
    {
      valor: "R$ 100,33",
      email: "dev.lucasbsb@gmail.com",
      status: "Realizado",
      data: "08/02/2026",
    },
    {
      valor: "R$ 11,00",
      email: "dev.lucasbsb@gmail.com",
      status: "Realizado",
      data: "04/02/2026",
    },
    {
      valor: "R$ 100,00",
      email: "dev.lucasbsb@gmail.com",
      status: "Realizado",
      data: "19/01/2026",
    },
    {
      valor: "R$ 12,90",
      email: "dev.lucasbsb@gmail.com",
      status: "Realizado",
      data: "26/12/2025",
    },
  ];

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
            <Text style={styles.headerSubtitle}>Históricos</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.profileButton}
          onPress={() => navigation.navigate("Profile")}
        >
          <View style={styles.profileCircle}>
            <Ionicons name="person" size={28} color="#12B24E" />
          </View>
        </TouchableOpacity>
      </View>

      {/* ABAS */}
      <View style={styles.tabsContainer}>
        <View style={styles.tabsRow}>
          <TouchableOpacity
            style={[
              styles.tabButton,
              selectedTab === "residuos" && styles.tabButtonActive,
            ]}
            onPress={() => setSelectedTab("residuos")}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === "residuos" && styles.tabTextActive,
              ]}
            >
              Resíduos
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tabButton,
              selectedTab === "resgates" && styles.tabButtonActive,
            ]}
            onPress={() => setSelectedTab("resgates")}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === "resgates" && styles.tabTextActive,
              ]}
            >
              Resgates
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* CONTEÚDO DAS ABAS */}
      {selectedTab === "residuos" ? (
        <View style={styles.residuosContainer}>
          <Text style={styles.saldoLabel}>Saldo total cadastrado</Text>
          <Text style={styles.saldoValor}>
            R$ {saldoTotal.toFixed(2).replace(".", ",")}
          </Text>

          <ScrollView
            style={styles.scrollList}
            showsVerticalScrollIndicator={false}
          >
            {residuos.map((item, index) => (
              <View key={index} style={styles.cardItem}>
                <View style={styles.cardLeft}>
                  <Ionicons
                    name="leaf"
                    size={22}
                    color="#12B24E"
                    style={{ marginRight: 6 }}
                  />
                  <View>
                    <Text style={styles.cardTipo}>{item.tipo}</Text>
                    <Text style={styles.cardQtd}>{item.quantidade}</Text>
                  </View>
                </View>

                <View style={styles.cardRight}>
                  <Text style={styles.cardValor}>{item.valor}</Text>
                  <View style={styles.cardBottomRight}>
                    <Text style={styles.cardData}>{item.data}</Text>
                    <TouchableOpacity
                      style={styles.qrCodeButton}
                      activeOpacity={0.7}
                      onPress={() =>
                        navigation.navigate("Detalhes", { item })
                      }
                    >
                      <Ionicons
                        name="qr-code-outline"
                        size={20}
                        color="#12B24E"
                        height="200%"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      ) : (
        <View style={styles.residuosContainer}>
          <Text style={styles.saldoLabel}>Saldo total resgatado</Text>
          <Text style={styles.saldoValor}>
            R$ {saldoResgate.toFixed(2).replace(".", ",")}
          </Text>

          <ScrollView
            style={styles.scrollList}
            showsVerticalScrollIndicator={false}
          >
            {resgates.map((item, index) => (
              <View key={index} style={styles.cardItemResgate}>
                <View style={styles.cardLeftResgate}>
                  <Ionicons
                    name="cash-outline"
                    size={22}
                    color="#12B24E"
                    style={{ marginRight: 6 }}
                  />
                  <View>
                    <Text style={styles.cardValorResgate}>{item.valor}</Text>
                    <Text style={styles.cardEmail}>{item.email}</Text>
                  </View>
                </View>

                <View style={styles.cardRightResgate}>
                  <Text style={styles.cardStatus}>{item.status}</Text>
                  <Text style={styles.cardData}>{item.data}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      )}

      {/* TAB BAR */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={styles.tabItemBottom}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Saldo")}
        >
          <Ionicons name="home" size={28} color="#fff" />
          <Text style={styles.tabLabel}>Saldo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItemBottom}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("RegisterWaste")}
        >
          <Ionicons name="leaf" size={28} color="#fff" />
          <Text style={styles.tabLabel}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItemBottom}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Extrato")}
        >
          <Ionicons name="time-outline" size={28} color="#7FFFD4" />
          <Text style={[styles.tabLabel, styles.tabLabelActive]}>
            Históricos
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItemBottom}
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
const GREEN_DARK = "#0C7F38";
const WHITE = "#FFFFFF";

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: GREEN_BACKGROUND },

  // HEADER
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 45,
    paddingHorizontal: 20,
  },
  headerLeft: { flexDirection: "row", alignItems: "center" },
  headerLogoWrapper: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: GREEN_DARK,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  logo: { width: 35, height: 35 },
  headerTextWrapper: { justifyContent: "center" },
  headerTitle: { color: WHITE, fontSize: 18, fontWeight: "700" },
  headerSubtitle: { color: WHITE, fontSize: 15, marginTop: 2 },
  profileButton: { marginLeft: "auto" },
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

  // ABAS
  tabsContainer: { alignItems: "center", marginTop: 16 },
  tabsRow: {
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: 50,
    padding: 4,
    width: "85%",
    justifyContent: "space-between",
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 5,
    borderRadius: 50,
  },
  tabButtonActive: { backgroundColor: "#BFEBC9" },
  tabText: { color: WHITE, fontSize: 16, fontWeight: "600" },
  tabTextActive: { color: GREEN_DARK, fontWeight: "700" },

  // CONTEÚDO
  residuosContainer: {
    flex: 0.85,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  saldoLabel: {
    color: WHITE,
    fontSize: 16,
    textAlign: "center",
  },
  saldoValor: {
    color: WHITE,
    fontSize: 46,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 8,
  },
  scrollList: { flex: 1, marginTop: 4, paddingBottom: 80 },

  // === CARDS DE RESÍDUOS (ORIGINAIS) ===
  cardItem: {
    backgroundColor: "#BFEBC970",
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginBottom: 10,
  },
  cardLeft: { flexDirection: "row", alignItems: "center" },
  cardTipo: { color: "#fff", fontSize: 16, fontWeight: "700" },
  cardQtd: { color: "#fff", fontSize: 13 },
  cardRight: { alignItems: "flex-end" },
  cardValor: { color: "#fff", fontSize: 16, fontWeight: "700", paddingEnd: 28 },
  cardBottomRight: { flexDirection: "row", alignItems: "center", marginTop: 2 },
  cardData: { color: "#fff", fontSize: 12 },
  qrCodeButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 22,
    width: 22,
    borderRadius: 6,
    marginLeft: 8,
  },

  // === CARDS DE RESGATES ===
  cardItemResgate: {
    backgroundColor: "#BFEBC970",
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginBottom: 10,
  },
  cardLeftResgate: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardValorResgate: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  cardEmail: {
    color: "#fff",
    fontSize: 13,
  },
  cardRightResgate: {
    alignItems: "flex-end",
  },
  cardStatus: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },

  // TAB BAR
  tabBar: {
    position: "absolute",
    bottom: 20,
    left: "5%",
    right: "5%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: GREEN_DARK,
    paddingVertical: 8,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 6,
  },
  tabItemBottom: { alignItems: "center" },
  tabLabel: { fontSize: 12, color: "#fff", marginTop: 2 },
  tabLabelActive: { color: "#7FFFD4", fontWeight: "600" },
});
