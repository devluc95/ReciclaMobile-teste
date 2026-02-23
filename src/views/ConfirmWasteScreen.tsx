import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const ConfirmWasteScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [valorResgatar, setValorResgatar] = useState("");
  const [chavePix, setChavePix] = useState("dev.lucasbsb@gmail.com");

  const logo = require("../../assets/logo.png");

  const saldoDisponivel = 148.33;
  const valorResgatado = 0.0;

  const handleConfirm = () => {
    // lógica de resgate futura
  };

  return (
    <View style={styles.container}>
      {/* HEADER igual ao SaldoScreen */}
      <View style={styles.header}>
        <View style={styles.headerLogoWrapper}>
          <Image source={logo} style={styles.logo} resizeMode="contain" />
        </View>
        <View style={{ marginLeft: 8 }}>
          <Text style={styles.headerTitle}>Planeta Verde</Text>
          <Text style={styles.headerSubtitle}>Resgatar Saldo</Text>
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
      <View style={styles.content}>
        <Text style={styles.labelTop}>Saldo disponível</Text>
        <Text style={styles.saldoNumero}>
          R$ {saldoDisponivel.toFixed(2).replace(".", ",")}
        </Text>

        <Text style={[styles.labelTop, { marginTop: 14 }]}>
          Valor resgatado
        </Text>
        <Text style={styles.saldoMenor}>
          R$ {valorResgatado.toFixed(2).replace(".", ",")}
        </Text>

        {/* Valor a resgatar */}
        <View style={styles.fieldBlock}>
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

        {/* Chaves Pix recentes */}
        <View style={styles.fieldBlock}>
          <Text style={styles.labelCampo}>Chaves pix recentes</Text>
          <View style={styles.pixBox}>
            <Text style={styles.pixEmail}>{/* dev.lucasbsb@gmail.com */}</Text>
            <Text style={styles.pixInfo}>{/* Última utilização: 08/02/2026 */}
            </Text>
          </View>
        </View>

        {/* Nova chave pix */}
        <View style={styles.fieldBlock}>
          <Text style={styles.labelCampo}>Ou insira uma nova chave pix</Text>
          <TextInput
            style={styles.input}
            placeholder="usuario@email.com ou telefone"
            placeholderTextColor="#C7C7CD"
            value={""}
            onChangeText={setChavePix}
          />
        </View>

        {/* Botão confirmar */}
        <TouchableOpacity
          style={styles.confirmButton}
          activeOpacity={0.8}
          onPress={handleConfirm}
        >
          <Text style={styles.confirmText}>Confirmar resgate</Text>
        </TouchableOpacity>
      </View>

      {/* TAB BAR */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={styles.tabItem}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Saldo")}
        >
          <Ionicons name="home" size={28} color="#fff" />
          <Text style={styles.tabLabel}>Saldo</Text>
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
          <Ionicons name="card-outline" size={28} color="#7FFFD4" />
          <Text style={[styles.tabLabel, styles.tabLabelActive]}>Resgatar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const GREEN_BACKGROUND = "#12B24E";
const DARK_GREEN = "#007F3B";
const WHITE = "#FFFFFF";
const GREEN_DARK = "#0C7F38";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GREEN_BACKGROUND,
  },

  // HEADER (igual SaldoScreen)
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

  // CONTEÚDO
  content: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 24,
    marginTop: 20,
  },
  labelTop: {
    color: WHITE,
    fontSize: 18,
  },
  saldoNumero: {
    color: WHITE,
    fontSize: 52,
    fontWeight: "bold",
    marginTop: 2,
  },
  saldoMenor: {
    color: WHITE,
    fontSize: 22,
    marginTop: 4,
  },
  fieldBlock: {
    width: "100%",
    marginTop: 5,
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
    borderWidth: 1, // ← espessura da borda
    borderColor: "#000", // ← cor da borda
  },
  pixBox: {
    backgroundColor: "#A7E9B9",
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  pixEmail: {
    color: "#000",
    fontSize: 15,
    fontWeight: "600",
  },
  pixInfo: {
    color: "#666",
    fontSize: 13,
    marginTop: 2,
  },
  confirmButton: {
    marginTop: 28,
    backgroundColor: WHITE,
    borderRadius: 18,
    paddingVertical: 14,
    paddingHorizontal: 32,
    alignSelf: "stretch",
  },
  confirmText: {
    color: GREEN_BACKGROUND,
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
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

export default ConfirmWasteScreen;
