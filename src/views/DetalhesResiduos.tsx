import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function DetalhesResiduos({ navigation, route }) {
  // Dados simulados — depois você pode substituir pelos vindos da rota (route.params.item)
  const dadosCadastro = {
    id: "F2C86709-6F51-4898-B236-77E793EB952F",
    data: "22/02/2026",
    peso: "18 Un",
    valor: "R$ 25,20",
  };

  const itens = [
    { tipo: "Papel", quantidade: "12 Un", valor: "R$ 25,20", data: "22/02/2026" },
    { tipo: "Papel", quantidade: "6 Un", valor: "R$ 12,60", data: "22/02/2026" },
  ];

  return (
    <View style={styles.container}>
      {/* Botão Voltar (flutuante e translúcido) */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
        activeOpacity={0.8}
      >
        <View style={styles.backCircle}>
          <Ionicons name="arrow-back" size={26} color="#fff" />
        </View>
      </TouchableOpacity>

      {/* Título da tela */}
      <Text style={styles.headerTitle}>QR Code do Cadastro</Text>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* DETALHES DO CADASTRO */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Detalhes do Cadastro</Text>
            <Ionicons name="leaf" size={20} color="#fff" />
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>ID:</Text>
            <Text style={styles.value}>{dadosCadastro.id}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Data:</Text>
            <Text style={styles.value}>{dadosCadastro.data}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Peso Total:</Text>
            <Text style={styles.value}>{dadosCadastro.peso}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Valor Total:</Text>
            <Text style={styles.value}>{dadosCadastro.valor}</Text>
          </View>
        </View>

        {/* ITENS CADASTRADOS */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Itens Cadastrados</Text>

          {itens.map((item, index) => (
            <View key={index} style={styles.itemCard}>
              <View style={styles.itemLeft}>
                <Ionicons name="leaf" size={22} color="#12B24E" style={{ marginRight: 6 }} />
                <View>
                  <Text style={styles.itemTipo}>{item.tipo}</Text>
                  <Text style={styles.itemQtd}>{item.quantidade}</Text>
                </View>
              </View>

              <View style={styles.itemRight}>
                <Text style={styles.itemValor}>{item.valor}</Text>
                <Text style={styles.itemData}>{item.data}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* BOTÃO GERAR QRCODE */}
        <TouchableOpacity style={styles.qrButton} activeOpacity={0.8}>
          <Text style={styles.qrButtonText}>Gerar QRCode</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const GREEN_BACKGROUND = "#12B24E";
const WHITE = "#FFFFFF";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GREEN_BACKGROUND,
    paddingTop: 45,
  },

  // BOTÃO VOLTAR (flutuante e translúcido)
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10,
  },
  backCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    justifyContent: "center",
    alignItems: "center",
  },

  // TÍTULO DA TELA
  headerTitle: {
    color: WHITE,
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 55, // espaço abaixo do botão
  },

  // CONTEÚDO
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 40,
  },

  // CARD PRINCIPAL
  card: {
    backgroundColor: "#0fa94a",
    borderRadius: 10,
    padding: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#004d23",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  cardTitle: {
    color: WHITE,
    fontSize: 18,
    fontWeight: "700",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  label: {
    color: WHITE,
    fontSize: 15,
  },
  value: {
    color: WHITE,
    fontSize: 15,
    textAlign: "right",
    flexShrink: 1,
    maxWidth: "70%",
  },

  // ITENS CADASTRADOS
  itemCard: {
    backgroundColor: "#BFEBC970",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 10,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemTipo: {
    color: WHITE,
    fontSize: 16,
    fontWeight: "700",
  },
  itemQtd: {
    color: WHITE,
    fontSize: 13,
  },
  itemRight: {
    alignItems: "flex-end",
  },
  itemValor: {
    color: WHITE,
    fontSize: 15,
    fontWeight: "600",
  },
  itemData: {
    color: WHITE,
    fontSize: 12,
  },

  // BOTÃO GERAR QRCODE
  qrButton: {
    backgroundColor: WHITE,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 12,
  },
  qrButtonText: {
    color: GREEN_BACKGROUND,
    fontSize: 18,
    fontWeight: "600",
  },
});