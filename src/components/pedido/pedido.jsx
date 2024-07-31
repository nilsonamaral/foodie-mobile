import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./pedido.style.js";

function Pedido(props) {
    return <View style={styles.container} >
        <Image source={props.logotipo} style={styles.logotipo} />
        <View style={styles.textos} >
            <Text> {props.nome} </Text>

            <View style={styles.containerStatus} >
                <Text style={styles.valor} >
                    {new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(props.valor)}
                </Text>
                <Text style={styles.data} >{props.dt_pedido}</Text>
            </View>

            <Text style={styles.status} > {props.status} </Text>

        </View>

    </View>
}

export default Pedido