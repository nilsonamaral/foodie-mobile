import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./banners.style.js";


function Banners(props) {
    return <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
            {
                props.dados.map((banner, index) => { 
                return <View style={styles.container} key={index} >
                            <TouchableOpacity>
                                 <Image style={styles.icone} source={banner.icone} />
                            </TouchableOpacity>
                          {/* <Text style={styles.descricao} > {banner.descricao} </Text>  */}
                </View> })
            }
        </ScrollView>
    </View>
}

export default Banners