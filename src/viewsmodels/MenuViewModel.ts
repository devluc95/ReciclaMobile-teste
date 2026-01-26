import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function useMenuViewModel() {
  const navigation = useNavigation();

  const handleRegisterWaste = () => {
    navigation.navigate("RegisterWaste");
  };

  const handleSaldo = () => {
    navigation.navigate("Saldo");
  };

  const handleExtrato = () => {
    navigation.navigate("Extrato");
  };

  const handleProfile = () => {
    navigation.navigate("Profile");
  };

  const handleInstagram = () => {
    const instagramUrl = "https://instagram.com";
    import("react-native").then(({ Linking }) => {
      Linking.openURL(instagramUrl);
    });
  };

  const handleLogoutConfirm = () => {
    Alert.alert(
      "Confirmação",
      "Tem certeza que deseja sair?",
      [
        {
          text: "Não",
          style: "cancel",
          onPress: () => {},
        },
        {
          text: "Sim",
          onPress: () => navigation.navigate("Welcome"),
        },
      ],
      { cancelable: false }
    );
  };

  return {
    handleRegisterWaste,
    handleSaldo,
    handleExtrato,
    handleProfile,
    handleInstagram,
    handleLogoutConfirm,
  };
}
