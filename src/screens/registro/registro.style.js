import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container:{
        flex: 1,
        padding: 15,
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
        marginBottom: 25,
        marginTop: 5
    },
    scrollView: {
        width: "100%"
    },
    formGroup: {
        width: "100%",
        marginTop: 25,
        marginBottom: 40
    },
    footer: {
        width: "100%",
        backgroundColor: COLORS.white,
        position: "absolute",
        bottom: 0,
        padding: 20,
        height: 70
    },
    footerText: {
        textAlign: "center",
        color: COLORS.gray,
        fontSize: FONT_SIZE.md
    }
}