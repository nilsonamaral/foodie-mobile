import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container:{
        flex: 1,
        padding: 40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.white
    },
    texto: {
        fontSize: FONT_SIZE.md,
        color: "white",
        padding: 14,
        textAlign: "center"
    },
    form: {
        width: "100%",
        marginBottom:25,
        marginTop: 5
    },
    formGroup: {
        width: "100%",
        marginTop: 50
    },
    footer: {
        width: "100%",
        position: "absolute",
        bottom: 0,
        marginBottom: 40,
    },
    footerText: {
        textAlign: "center",
        color: COLORS.gray,
        fontSize: FONT_SIZE.md
    }
}