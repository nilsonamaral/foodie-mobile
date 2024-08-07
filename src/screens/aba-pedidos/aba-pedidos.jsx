import { FlatList, Image, Text, View } from "react-native";
import { styles } from "./aba-pedidos.style";
import { pedidos } from "../../constants/dados";
import Pedido from "../../components/pedido/pedido";
import icons from "../../constants/icons";

function Pedidos() {
    return <View style={styles.container} >
        <FlatList data={pedidos} keyExtractor={(ped) => ped.id} showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
                return <Pedido nome={item.nome}
                valor={item.vl_total}
                logotipo={item.logotipo}
                status={item.status}
                dt_pedido={item.dt_pedido} />
            }}

        contentContainerStyle={styles.containerList}

        ListEmptyComponent={() => {
            return <View style={styles.empty}>
                <Image source={icons.empty} />
                <Text style={styles.emptyText}>Nenhum favorito cadastrado</Text>
            </View>
        }} />
    </View>
}

export default Pedidos