import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Select = ({ label, value, onSelectChange }) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.input}>
                <Picker>
                selectedValue{value}
                onValueChange={(itemValue) => 
                    onSelectChange(itemValue)
                }

                <Picker.Item label="Select" value="select" />
                <Picker.Item label="Option 1" value="option1" />
                <Picker.Item label="Option 2" value="option2" />
                <Picker.Item label="Option 3" value="option3" />

            
            </Picker>
            </View>
            
        </View>
    )
}

export default Select;

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
        paddingHorizontal: 2,
        peddingVertical: 0,
    },
})
    