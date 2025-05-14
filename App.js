import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [numero, setNumero] = useState("");
  const [resultadoBinario, setResultadoBinario] = useState([
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
  ]);
  var resultado;

  const isBinario = (valor) => /^[01]+$/.test(valor);
  const ehDecimal = (valor) => /^[0-9]+$/.test(valor);

  const converter = () => {
    if (isBinario) {
      converterParaDecimal();
    } else if (isDecimal) {
      converterParaBinario();
    } else {
      alert("Digite um valor válido (binário ou decimal).");
    }
  };

  const converterParaBinario = () => {
    resultado = parseInt(numero).toString(2).padStart(8, "0");
    setNumero(resultado);
    setResultadoBinario(resultado.split(""));
  };

  const converterParaDecimal = () => {
    resultado = parseInt(numero.replace(" ", ""), 2);
    setNumero(resultado.toString());
    console.log(resultado);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.titulo}>Conversor</Text>

        <TextInput
          style={styles.input}
          value={numero}
          onChangeText={setNumero}
          placeholder="Insira um número"
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.botao} onPress={converterParaBinario}>
          <Text style={styles.textoBotao}>Binário</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={converterParaDecimal}>
          <Text style={styles.textoBotao}>Decimal</Text>
        </TouchableOpacity>

        <View style={styles.tb}>
          <View style={styles.tr}>
            <View style={styles.td}>
              <Text style={[styles.tt, { fontWeight: "bold" }]}>128</Text>
            </View>
            <View style={styles.td}>
              <Text style={[styles.tt, { fontWeight: "bold" }]}>64</Text>
            </View>
            <View style={styles.td}>
              <Text style={[styles.tt, { fontWeight: "bold" }]}>32</Text>
            </View>
            <View style={styles.td}>
              <Text style={[styles.tt, { fontWeight: "bold" }]}>16</Text>
            </View>
            <View style={styles.td}>
              <Text style={[styles.tt, { fontWeight: "bold" }]}>8</Text>
            </View>
            <View style={styles.td}>
              <Text style={[styles.tt, { fontWeight: "bold" }]}>4</Text>
            </View>
            <View style={styles.td}>
              <Text style={[styles.tt, { fontWeight: "bold" }]}>2</Text>
            </View>
            <View style={styles.td}>
              <Text style={[styles.tt, { fontWeight: "bold" }]}>1</Text>
            </View>
          </View>
          <View style={styles.tr}>
            {resultadoBinario.map((bit, index) => (
              <View key={index} style={styles.td}>
                <Text style={styles.tt}>{bit}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 36,
  },
  input: {
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 10,
    padding: 15,
    width: 300,
    marginTop: 30,
  },
  botao: {
    backgroundColor: "rgb(26, 175, 46)",
    width: 150,
    marginTop: 25,
    padding: 15,
    borderRadius: 10,
  },
  textoBotao: {
    color: "white",
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "bold",
  },
  tb: {
    marginTop: 25,
  },
  tr: {
    display: "flex",
    flexDirection: "row",
  },
  td: {
    borderWidth: 1,
    borderColor: "black",
    width: 45,
  },
  tt: {
    fontSize: 16,
    textAlign: "center",
  },
});
