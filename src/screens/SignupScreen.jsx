import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignupScreen() {
    const [email, setEmail] = useState('');
    const [fname, setFname] = useState('');
    const [phone, setPhone] = useState('');
    const { navigate } = useNavigation();
    const handleSignup = () => {
        // Perform login logic
        setEmail("");
        setPassword("");
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.secondContainer}>
                <Text style={styles.title}>
                    Supa<Text style={styles.spanTitle}>Menu</Text>
                </Text>
                <Text style={styles.welcome}>Welcome ...</Text>
                <Text style={styles.welcome2}>Please fill in the information.</Text>
                <View style={styles.inputContainer}>
                    <MaterialIcons name="person" size={20} style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Full Names"
                        value={fname}
                        onChangeText={setFname}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <MaterialIcons name="email" size={20} style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <MaterialIcons name="phone" size={20} style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Phone number"
                        value={phone}
                        onChangeText={setPhone}
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={handleSignup}>
                    <Text style={styles.buttonText}>Proceed</Text>
                </TouchableOpacity>
                <View style={styles.lineContainer}>
                    <View style={styles.line} />
                    <Text style={styles.text}>OR</Text>
                    <View style={styles.line} />
                </View>
                <Text style={styles.welcome2}>If you have a PMG account</Text>
                <TouchableOpacity style={styles.button} onPress={handleSignup}>
                    <Text style={styles.buttonText}>Sign in</Text>
                </TouchableOpacity>
                <Text style={{ textAlign: "center", color: '#223263', fontSize: 18, paddingVertical: 20 }}>
                    Don't have an account?
                    <Text style={styles.spanTitle} onPress={() => navigate('SignIn')}>Register</Text>
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7941D',
    },
    secondContainer: {
        paddingHorizontal: 20,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '90%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: '#fff',
    },
    title: {
        textAlign: 'center',
        paddingTop: 10,
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    spanTitle: {
        color: "#F7941D"
    },
    welcome: {
        color: '#223263',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10
    },
    welcome2: {
        color: '#9098B1',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20
    },
    inputContainer: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        borderColor: 'rgba(144, 152, 177, 0.3)', 
        borderWidth: 0.5,
        borderRadius: 5,
        paddingHorizontal: 5,
    },
    icon: {
        fontSize: 20,
        color: '#9098B1',
    },
    input: {
        flex: 1,
        width: "100%",
        height: 45,
        paddingHorizontal: 5,
        color: '#9098B1',
    },
    button: {
        width: '100%',
        height: 55,
        backgroundColor: '#f7941d',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    lineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    line: {
        flex: 1,
        height: 3,
        backgroundColor: '#EBF0FF',
    },
    text: {
        marginHorizontal: 10,
        fontWeight: 'bold',
        fontSize: 20,
        fontWeight: 700,
        color: "#9098B1"
    },
});
