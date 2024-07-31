import { Colors } from "react-native/Libraries/NewAppScreen"
import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container:{
        flexDirection: "row",
        marginBottom: 10,
        marginTop: 10
    },
    logotipo:{
        width: 80,
        height: 80,
        borderRadius: 6
    },
    textos:{
        flex: 1,
        padding: 8
    },
    containerStatus:{
        flexDirection: "row",
        justifyContent: "space-between"
    },
    valor: {
        color: COLORS.dark_gray,
        fontSize: FONT_SIZE.sm
    },
    status: {
        color: COLORS.green
    }
}