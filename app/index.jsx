import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import globalStyles from "../styles/globalStyles";

export default function Index() {
  const router = useRouter();

  return (
    <View style={globalStyles.containerCenter}>
      <Text style={globalStyles.title}>Bienvenido a PCStock</Text>

      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => router.push("/login")}
      >
        <Text style={globalStyles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[globalStyles.button, { backgroundColor: "#555" }]}
        onPress={() => router.push("/registerClient")}
      >
        <Text style={globalStyles.buttonText}>Registrarse como Cliente</Text>
      </TouchableOpacity>
    </View>
  );
}
