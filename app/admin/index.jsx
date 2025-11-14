import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../context/AuthContext";
import globalStyles from "../../styles/globalStyles";

export default function AdminHome() {
  const { logout } = useAuth();
  const router = useRouter();

  return (
    <View style={globalStyles.containerCenter}>
      <Text style={globalStyles.title}>Panel del Administrador</Text>
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
