import { Alert } from "react-native";

const showConfirmation = ({ 
    title = "Confirmation", 
    message, 
    cancelText = "Cancel", 
    confirmText = "Confirm", 
    onCancel = () => {}, 
    onConfirm = () => {} 
}) => {
    Alert.alert(
        title,
        message,
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


const showAlert = ({ title, message, onOk = () => {} }) => {
    Alert.alert(
        title,
        message,
        [
            {
                text: "OK",
                style: "default",
                onPress: onOk
            }
        ]
    );
};


export {
    showConfirmation,
    showAlert
}