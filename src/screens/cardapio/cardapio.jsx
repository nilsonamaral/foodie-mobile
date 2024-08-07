import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./cardapio.style.js";
import { restaurante } from "../../constants/dados.js";
import icons from "../../constants/icons.js";
import Produtos from "../../components/produtos/produtos.jsx";

function Cardapio(props) {

    return <View style={styles.container} >
        <View style={styles.containerFoto} >
            <Image source={restaurante.foto} style={styles.foto} resizeMode="contain" />

            <TouchableOpacity style={styles.containerBack2} onPress={props.navigation.goBack}>
                <Image source={icons.back2} style={styles.back2} />
            </TouchableOpacity>

        </View>

        <View style={styles.content}>
            <View style={styles.contentInfo}>
                <Text style={styles.contentName}>lorem lorem</Text>
                <Text style={styles.contentTaxa}>lorem lorem</Text>
            </View>
            <TouchableOpacity>
                <Image source={icons.favoritoFull} style={styles.fav} />
            </TouchableOpacity>
        </View>

            <View style={styles.location}>
                <Image source={icons.location} style={styles.locationImg} />
                <Text style={styles.endereco}>Lorem ipsum, dolor sit amet </Text>
            </View>

            <ScrollView>
                {
                    restaurante.cardapio.map((item) => {
                        return <View key={item.idCategoria} style={styles.containerCategoria}>
                            <Text style={styles.categoria}>{item.categoria}</Text>

                            {
                                item.itens.map((produto) => {
                                    return <Produtos key={produto.idProduto}
                                    idProduto={produto.idProduto}
                                    foto={produto.foto}
                                    nome={produto.nome}
                                    descricao={produto.descricao}
                                    valor={produto.valor} />
                                })
                            }

                        </View>

                    })
                }
            </ScrollView>
    </View>
}

export default Cardapio