import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./detalhe-pedido.style.js";
import { pedido } from "../../constants/dados.js";

import icons from "../../constants/icons.js";
import Produtos from "../../components/produtos/produtos.jsx";

export default function DetalhePedido(props) {
    return <View style={styles.container} >

        <FlatList data={pedido.itens}
        keyExtractor={(item) => item.idItem}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
            return <Produtos key={item.idItem}
                             foto={item.foto}
                             nome={item.nome}
                             descricao={item.descricao}
                             valor={item.vlTotal} />
        }}/>

        <View  >
            <View  >
                <Text style={styles.total} >Resumo dos Valores</Text>
            </View>

            <View style={styles.valores} >
                <Text style={styles.valor} >Subtotal</Text>
                <Text style={styles.valor} >R$ 66,00</Text>
            </View>

            <View style={styles.valores} >
                <Text style={styles.valor} >Taxa de entrega</Text>
                <Text style={styles.valor} >R$ 5,00</Text>
            </View>

            <View style={styles.valores} >
                <Text style={styles.total} >Total</Text>
                <Text style={styles.total} >R$ 71,00</Text>
            </View>
        </View>

    </View>
}