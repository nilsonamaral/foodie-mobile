import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container:{
        flex: 1,
        padding: 20,
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
        marginTop: 40
    },
    formHorizontal: {
        flexDirection: "row",
    },
    form70: {
        width: "70%",
        marginBottom: 25,
        marginTop: 5,
        paddingRight: 10
    },
    form30: {
        width: "30%",
        marginBottom: 25,
        marginTop: 5
    },
    footer: {
        width: "100%",
        position: "absolute",
        bottom: 0,
        // marginTop: 50,
    },
    footerText: {
        textAlign: "center",
        color: COLORS.medium_gray,
        fontSize: FONT_SIZE.md
    }
}