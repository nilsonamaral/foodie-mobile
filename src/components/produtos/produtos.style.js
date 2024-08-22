import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    produtos: {
        width: "100%",
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 10,
    },
    foto: {
        width: 80,
        height: 80,
        borderRadius: 6,
        padding: 5,
    },
    info: {
        flex: 1,
        padding: 8,
    },
    nome: {
        color: COLORS.dark_gray,
        fontSize: FONT_SIZE.sm
    },
    descricao: {
        color: COLORS.gray,
        fontSize: FONT_SIZE.sm
    },
    valor: {
        color: COLORS.dark_gray,
        fontSize: FONT_SIZE.sm,

    },
    remove: {
        width: 28,
        height: 28,
    },
    containerDelete: {
        alignItems: "flex-end",
        marginTop: 8
    }
}