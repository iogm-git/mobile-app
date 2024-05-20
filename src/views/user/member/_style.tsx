import { borderDefault, root } from "@root/utils/Styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    boxForm: {
        ...borderDefault.borderM,
        rowGap: root.sizeL,
        paddingHorizontal: root.sizeM,
        paddingVertical: root.sizeX,
    }
})