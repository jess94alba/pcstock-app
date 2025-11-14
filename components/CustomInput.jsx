import { TextInput } from "react-native";
import globalStyles from "../styles/globalStyles";

export default function CustomInput({ value, onChangeText, placeholder, secureTextEntry }) {
  return (
    <TextInput
      style={globalStyles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  );
}
