import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingLeft: 20,
        paddingRight: 25,
        paddingBottom: 20
    },
    valores: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 8,
        marginTop: 8,
    },
    valor: {
        fontSize: FONT_SIZE.md,
        color: COLORS.gray,
    },
    total: {
        fontSize: FONT_SIZE.md,
        color: COLORS.dark_gray,
        fontWeight: "bold"
    },
}