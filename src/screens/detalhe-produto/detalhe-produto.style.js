import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    foto: {
        height: 200
    },
    containerBack2: {
        position: "absolute",
        top: 30,
        left: 15
    },
    back2: {
        width: 45,
        height: 45
    },
    content: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        padding: 15
    },
    nomeItem: {
        fontSize: FONT_SIZE.lg,
        fontWeight: "bold",
        color: COLORS.dark_gray,
    },
    descricao: {
        fontSize: FONT_SIZE.lg,
        color: COLORS.gray,
        marginTop: 10,

    },
    valor: {
        fontSize: FONT_SIZE.md,
        color: COLORS.dark_gray,
        marginTop:15
    },
    headerObs: {
        padding: 15,
    },
    obs: {
        width: "100%",
        fontSize: FONT_SIZE.lg,
        color: COLORS.gray,
        paddingBottom: 10,
    },
    multiline:{
        flex: 1,
        backgroundColor: COLORS.light_gray,
        padding: 10,
        borderRadius: 4,

        borderWidth: 1,
        borderColor: COLORS.medium_gray,

        minHeight: 200,
        textAlignVertical: "top",
    },
    footer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        alignItems: "center",
        padding: 20,
        flexDirection: "row"
    },
    qtd: {
        fontSize: FONT_SIZE.lg,
        color: COLORS.dark_gray,
        width: 40,
        fontWeight: "bold",
        textAlign: "center"
    },
    imgQtd: {
        width: 40,
        height: 40
    },
    footerBtn:{
        flex: 1,
        marginRight: 5,
        marginLeft: 15,
    }
}