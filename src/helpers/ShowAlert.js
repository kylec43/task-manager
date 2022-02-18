import { Alert } from "react-native";

const showConfirmation = ({ 
    title = "Confirmation", 
    text, 
    cancelText = "Cancel", 
    confirmText = "Confirm", 
    onCancel = () => {}, 
    onConfirm = () => {} 
}) => {
    Alert.alert(
        title,
        text,
        [
            {
                text: cancelText,
                style: "cancel",
                onPress: onCancel
            },
            {
                text: confirmText,
                style: "default",
                onPress: onConfirm
            }
        ]
    );
};


export {
    showConfirmation,
}