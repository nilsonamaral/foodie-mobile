import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./registro2.style.js";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import Button from "../../components/buttons/button.jsx";
import { useState } from "react";


function Registro2() {

    const [ende, setEnde] = useState("")
    const [compl, setCompl] = useState("")
    const [cep, setCep] = useState("")
    const [city, setCity] = useState("")
    const [bairro, setBairro] = useState("")
    const [uf, setUf] = useState("")

    return <View style={styles.container}>
    
        <ScrollView style={styles.scrollView}>
        <View >
            <Header texto="Criar sua conta."/>
                <View style={styles.formGroup} >

                    <View style={styles.formHorizontal} >
                        <View style={styles.form70} >
                            <TextBox label="Endereço" onChangeText={(texto) => setEnde(texto)} value={ende} />
                        </View>
                        <View style={styles.form30} >
                            <TextBox label="Compl." onChangeText={(texto) => setCompl(texto)} value={compl} />
                        </View>
                    </View>

                    <View style={styles.form} >
                        <TextBox label="Cidade" onChangeText={(texto) => setCity(texto)} value={city} />
                    </View>

                    <View style={styles.formHorizontal} >
                        <View style={styles.form70} >
                            <TextBox label="CEP" onChangeText={(texto) => setCep(texto)} value={cep} />
                        </View>
                        <View style={styles.form30} >
                            <TextBox label="UF" onChangeText={(texto) => setUf(texto)} value={uf} />
                        </View>
                    </View>

                    <View style={styles.form} >
                        <TextBox label="Bairro" onChangeText={(texto) => setBairro(texto)} value={bairro} />
                    </View>

                    <View style={styles.form} >
                        <Button texto="Criar minha conta" />
                    </View>
                </View>

        </View>
        
        </ScrollView>
    </View>
}

export default Registro2;