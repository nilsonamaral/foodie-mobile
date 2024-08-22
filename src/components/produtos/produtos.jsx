import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./produtos.style.js";
import icons from "../../constants/icons.js";

function Produtos(props) {
    return <TouchableOpacity style={styles.produtos}>
            <Image source={props.foto} style={styles.foto} />

            <View style={styles.info} >
                <Text style={styles.nome}>{props.nome}</Text>
                <Text style={styles.descricao}>{props.descricao}</Text>
            </View>

            <View>
                <Text style={styles.valor}>{ new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(props.valor)}</Text>

                {
                    props.onClickDelete &&
                    <TouchableOpacity style={styles.containerDelete} onPress={() => props.onClickDelete()} >
                        <Image source={icons.remove} style={styles.remove} />
                    </TouchableOpacity>
                }
            </View>

    </TouchableOpacity>
}

export default Produtos