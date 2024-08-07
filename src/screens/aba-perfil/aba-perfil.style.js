import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 12
    },
    item:{
        flexDirection: "row",
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.medium_gray
    },
    icone:{
        width: 30,
        height: 30,
    },
    textos: {
        flex: 1,
        marginLeft: 20
    },
    titulo: {
        color: COLORS.dark_gray,
        fontSize: FONT_SIZE.md,
        paddingBottom: 10
    },
    subtitulo: {
        color: COLORS.gray,
        fontSize: FONT_SIZE.sm
    },
    itemIcone: {
        alignItemss: "center",
        justifyContent: "center"
    },
    borderTop: {
        borderBottomWidth: 1,
        borderBottomColor: COLORS.medium_gray
    }
}