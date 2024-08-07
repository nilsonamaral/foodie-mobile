import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./restaurante.style.js";

function Restaurante(props) {
    return <TouchableOpacity style={styles.container} onPress={() => props.onPress()}>

            <Image source={props.logotipo} style={styles.logotipo} />
            <View style={styles.textos}>
                <Text style={styles.nome}>{props.nome}</Text>
                <Text style={styles.endereco}>{props.endereco}</Text>
            </View>
            <TouchableOpacity>
               <Image style={styles.favorito} source={props.icone} />
            </TouchableOpacity>

    </TouchableOpacity>
}

export default Restaurante