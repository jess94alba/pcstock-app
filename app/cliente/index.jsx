import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../context/AuthContext";
import globalStyles from "../../styles/globalStyles";

export default function ClienteHome() {
  const { logout } = useAuth();
  const router = useRouter();

  return (
    <View style={globalStyles.containerCenter}>
      <Text style={globalStyles.title}>Bienvenido Cliente</Text>
      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => {
          logout();
          router.push("/login");
        }}
      >
        <Text style={globalStyles.buttonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}
