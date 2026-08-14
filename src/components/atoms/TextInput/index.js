import React from 'react';
import { StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';

const TextInput = (props) => {
    const { label, placeholder} = props;
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInputRN style={styles.input} placeholder={placeholder} />
        </View>
    )
}

export default TextInput;

const styles = StyleSheet.create({
    label: { 
        fontSize: 16,
        fontFamily: "Poppins-Regular",
        color: "#020202",      
    },

    input: {
        borderWidth: 1,
        boderColor: "#020202",
        boderRadius: 8,
        padding: 10
    },
})