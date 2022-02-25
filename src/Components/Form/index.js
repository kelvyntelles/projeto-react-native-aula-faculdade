import { View, Text, TextInput, Button, Keyboard } from "react-native";
import { useState } from "react";
import Result from "../Result";
import { Container } from "./styled";

export default function Form() {

    const [capital, setCapital] = useState(null);
    const [taxa, setTaxa] = useState(null);
    const [tempo, setTempo] = useState(null);
    const [montante, setMontante] = useState(null);

    function calcularJuros() {
        let valor;
        for (let i = 1; i <= tempo; i++) {
            valor = capital * (1 + taxa / 100) ** tempo;
        }
        return setMontante(valor.toFixed(2));
    }

    function validar() {
        if(capital != null && taxa != null && tempo != null) {
            calcularJuros();
            setCapital(null);
            setTaxa(null);
            setTempo(null);
            Keyboard.dismiss();
        }
    }

    return (
        <View>
            <View>
                <Text>Informe o capital:</Text>
                <TextInput 
                    keyboardType="numeric" 
                    onChangeText={setCapital} 
                    value={capital} 
                />
                <Text>Informe a taxa de juros:</Text>
                <TextInput 
                    keyboardType="numeric"
                    onChangeText={setTaxa} 
                    value={taxa} 
                />
                <Text>Informe o tempo (meses):</Text>
                <TextInput 
                    keyboardType="numeric" 
                    onChangeText={setTempo} 
                    value={tempo}
                />
                <Button 
                    title="Calculadora"
                    onPress={() => validar()}
                />
            </View>
            <View>
                <Result Result={montante} />
            </View>
        </View>
    );
}