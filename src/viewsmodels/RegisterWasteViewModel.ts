import { useState } from "react";
import { Alert } from "react-native";

export function useRegisterWasteViewModel() {
  const [wasteType, setWasteType] = useState("");
  const [weight, setWeight] = useState("2");

  function handleUploadPhoto() {
    Alert.alert("📷 Upload", "Função de upload ainda não implementada.");
  }

  function handleRegister() {
    if (!wasteType) {
      Alert.alert("Erro", "Por favor, insira o tipo de resíduo.");
      return;
    }
    Alert.alert("✅ Sucesso", `Resíduo ${wasteType} (${weight}Kg) cadastrado com sucesso!`);
  }

  return {
    wasteType,
    setWasteType,
    weight,
    setWeight,
    handleUploadPhoto,
    handleRegister,
  };
}
