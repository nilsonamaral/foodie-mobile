import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    containerFoto: {
        alignItems: "center"
    },
    foto: {
        height: 160
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
    contentInfo: {
        flex: 1,
    },
    fav: {
        width: 35,
        height: 35
    },
    contentName: {
        fontSize: FONT_SIZE.lg,
        fontWeight: "bold",
        color: COLORS.dark_gray,
        marginBottom: 2
    },
    contentTaxa: {
        fontSize: FONT_SIZE.lg,
        color: COLORS.gray,
        marginBottom: 2
    },
    location: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        margin: 10
    },
    locationImg: {
        width: 40,
        height: 40,
        margin: 10
    },
    endereco: {
        flex: 1,
        fontSize: FONT_SIZE.md,
        color: COLORS.dark_gray,
    },
    containerCategoria: {
        padding: 10
    },
    categoria: {
        fontSize: FONT_SIZE.md,
        color: COLORS.dark_gray,
        marginBottom: 2
    }
}