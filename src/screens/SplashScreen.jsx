import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function SplashScreen({navigation}) {
    setTimeout(() => {
        navigation.navigate('SignIn');
    }, 3000);
    return (
        <View style={styles.container}>
            <Text style={styles.textColor}>SplashScreen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7941D',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textColor: {
        color: "#fff",
        fontSize: 40
    }
});
