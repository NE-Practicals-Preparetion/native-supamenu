//@ts-nocheck
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Text, View,StyleSheet } from 'react-native';

export default function SocialButton({ iconName, iconText, color, }) {
    return (
        <View
            style={styles.buttonSocial}
        >
            {
                <FontAwesome
                    name={iconName}
                    size={30}
                    color={color}
                />
            }
            <Text style={styles.text}>
                {iconText}
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    buttonSocial: {
        flexDirection: 'row',
        width: '100%',
        height: 55,
        borderColor: '#9098B1',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        fontWeight: 700,
        color: "#9098B1",
        width: "80%",
        marginHorizontal: 10,
        textAlign: "center"
    }
});
