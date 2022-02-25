import { View, Text, TextInput, Button, Keyboard } from "react-native";
import { useState } from "react";
import Result from "../Result";

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
        Keyboard.dismiss();
        return setMontante(valor);
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
                    onPress={() => calcularJuros()}
                />
            </View>
            <View>
                <Result Result={montante} />
            </View>
        </View>
    );
}