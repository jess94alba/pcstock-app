import {useRouter} from "expo-router";
import {useState} from "react";
import {Alert, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useAuth} from "../context/AuthContext";
import globalStyles from "../styles/globalStyles";

export default function LoginScreen() {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const {login} = useAuth();
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const userData = await login(correo, password);

      if (!userData || !userData.rol) {
        Alert.alert("Error", "Usuario no encontrado o sin rol asignado");
        return;
      }

      switch (userData.rol.toLowerCase()) {
        case "administrador":
          router.push("/admin");
          break;
        case "proveedor":
          router.push("/proveedor");
          break;
        case "vendedor":
          router.push("/vendedor");
          break;
        case "cliente":
          router.push("/cliente");
          break;
        default:
          Alert.alert("Error", "Rol no reconocido");
      }
    } catch (error) {
      Alert.alert("Error", error.message || "No se pudo iniciar sesión");
    }
  };

  return (
    <View style={globalStyles.containerCenter}>
      <View style={globalStyles.content}>
        <Text style={globalStyles.title}>Bienvenido a PCStock</Text>

        <View style={globalStyles.navBubble}>
          <TouchableOpacity onPress={() => router.push("/")}>
            <Text style={globalStyles.navLink}>Inicio</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/login")}>
            <Text style={globalStyles.navLink}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/registerClient")}>
            <Text style={globalStyles.navLink}>Registrar</Text>
          </TouchableOpacity>
        </View>

        <Text style={globalStyles.title}>Iniciar Sesión</Text>

        <TextInput
          style={globalStyles.input}
          placeholder="Correo electrónico"
          value={correo}
          onChangeText={setCorreo}
        />

        <TextInput
          style={globalStyles.input}
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={globalStyles.button} onPress={handleLogin}>
          <Text style={globalStyles.buttonText}>Ingresar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
