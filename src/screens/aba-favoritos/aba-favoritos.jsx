import { FlatList, Image, Text, View } from "react-native";
import { styles } from "./aba-favoritos.style";
import { restaurantes } from "../../constants/dados";
import Restaurante from "../../components/restaurante/restaurante";
import icons from "../../constants/icons";

function Favoritos() {
    return <View style={styles.container} >
        <FlatList data={restaurantes} keyExtractor={(restaurante) => restaurante.id} showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
            return <Restaurante nome={item.nome} endereco={item.endereco}
             logotipo={item.logotipo} icone={icons.remove} />
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

export default Favoritos