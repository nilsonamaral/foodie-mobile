import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container: {
        flexDirection: "row",
        paddingRight: 15,
        marginBottom: 10,
        marginTop: 10,

    },
    logotipo:{
        width: 80,
        height: 80,
        borderRadius: 6
    },
    textos:{
        flex: 1,
        padding: 10,
        paddingLeft: 20,
    },
    nome:{
        color: COLORS.dark_gray,
        fontSize: FONT_SIZE.sm,
        marginBottom: 5
    },
    endereco:{
        color: COLORS.gray,
        fontSize: FONT_SIZE.sm,
    },
    favorito:{
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
    },
}