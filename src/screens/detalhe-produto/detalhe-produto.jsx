import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./detalhe-produto.style.js";
import { restaurante } from "../../constants/dados.js";
import icons from "../../constants/icons.js";
import Button from "../../components/buttons/button.jsx";

function DetalheProduto(props) {

    return <View style={styles.container} >
        <View style={styles.containerFoto} >
            <Image source={icons.produto} style={styles.foto} resizeMode="cover" />

            <TouchableOpacity style={styles.containerBack2} onPress={props.navigation.goBack}>
                <Image source={icons.back2} style={styles.back2} />
            </TouchableOpacity>

        </View>

        <View style={styles.content}>
            <View style={styles.contentInfo}>
                <Text style={styles.nomeItem}>Pizza de Calabresa</Text>
                <Text style={styles.descricao}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus magni ratione dolore</Text>
                <Text style={styles.valor}>R$ 60,00</Text>

            </View>
        </View>

        <View style={styles.headerObs} >
            <Text style={styles.obs}>Observações</Text>
            <TextInput style={styles.multiline} multiline={true} numberOfLines={5} />
        </View>

            <View style={styles.footer} >

                <TouchableOpacity>
                    <Image source={icons.menos} style={styles.imgQtd} />
                </TouchableOpacity>

                <Text style={styles.qtd} >1</Text>

                <TouchableOpacity>
                    <Image source={icons.mais} style={styles.imgQtd} />
                </TouchableOpacity>

                <View style={styles.footerBtn}>
                    <Button texto="Inserir" />
                </View>
            </View>

    </View>
}

export default DetalheProduto