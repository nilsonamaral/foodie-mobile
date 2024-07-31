import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container:{
        flex: 1,
        backgroundColor: COLORS.white,
        paddingLeft: 10
    },
    headerBar: {
        height: 45,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: COLORS.white,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 25
    },
    logo:{
        width: 140,
        height: 27
    },
    cart:{
        width: 35,
        height: 35
    },
    busca:{
        marginLeft: 20,
        marginRight: 25,
        marginBottom: 10
    },
}