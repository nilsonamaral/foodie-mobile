import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./restaurante.style.js";
import icons from "../../constants/icons.js";


function Restaurante(props) {
    return <TouchableOpacity>
        <View style={styles.container} >
            <Image source={props.logotipo} style={styles.logotipo} />
            <View style={styles.textos}>
                <Text style={styles.nome}>{props.nome}</Text>
                <Text style={styles.endereco}>{props.endereco}</Text>
            </View>
            <TouchableOpacity>
               <Image style={styles.favorito} source={icons.favoritoFull} />
            </TouchableOpacity>
    </View>
    </TouchableOpacity>
}

export default Restaurante