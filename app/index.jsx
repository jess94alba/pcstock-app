import {useRouter} from "expo-router";
import {Text, TouchableOpacity, View} from "react-native";
import globalStyles from "../styles/globalStyles";

export default function Index() {
  const router = useRouter();

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
      </View>
    </View>
  );
}
