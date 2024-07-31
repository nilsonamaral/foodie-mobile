import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./perfil.style";
import icons from "../../constants/icons";

function Perfil() {
    return <View style={styles.container} >

        <TouchableOpacity style={[styles.item, styles.borderTop]}>
            <View style={styles.itemIcone} >
                <Image source={icons.endereco} style={styles.icone} />
            </View>

            <View style={styles.textos}>
                <Text style={styles.titulo} >Endereço</Text>
                <Text style={styles.subtitulo} >Meu endereço de entrega</Text>
            </View>

            <View>
                <Image source={icons.expandir} style={styles.icone} />
            </View>

        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
            <View style={styles.itemIcone} >
                <Image source={icons.dados} style={styles.icone} />
            </View>

            <View style={styles.textos}>
                <Text style={styles.titulo} >Meus dados</Text>
                <Text style={styles.subtitulo} >Informações da minha conta</Text>
            </View>

            <View>
                <Image source={icons.expandir} style={styles.icone} />
            </View>

        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
            <View style={styles.itemIcone} >
                <Image source={icons.logout} style={styles.icone} />
            </View>

            <View style={styles.textos}>
                <Text style={styles.titulo} >Desconectar</Text>
                <Text style={styles.subtitulo} >Desconctar o seu usuário desse aparelho</Text>
            </View>

            <View>
                <Image source={icons.expandir} style={styles.icone} />
            </View>

        </TouchableOpacity>

    </View>
}

export default Perfil
