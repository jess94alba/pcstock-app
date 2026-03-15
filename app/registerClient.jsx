import {useRouter} from "expo-router";
import {useState} from "react";
import {Alert, Text, TextInput, TouchableOpacity, View} from "react-native";
import globalStyles from "../styles/globalStyles";

export default function RegisterClient() {
  const router = useRouter();
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await fetch("http://TU_API_URL/api/usuarios/registerCliente", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({nombre, correo, password}),
      });

      if (!response.ok) throw new Error("Error al registrar cliente");

      Alert.alert("Éxito", "Cliente registrado correctamente");
      router.push("/login");
    } catch (error) {
      Alert.alert("Error", error.message);
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
        <Text style={globalStyles.title}>Registro de Cliente</Text>

        <TextInput style={globalStyles.input} placeholder="Nombre completo" value={nombre} onChangeText={setNombre} />

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

        <TouchableOpacity style={globalStyles.button} onPress={handleRegister}>
          <Text style={globalStyles.buttonText}>Registrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
