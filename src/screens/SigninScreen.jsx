import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import SocialButton from '../components/SocialButton';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SigninScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { navigate } = useNavigation();
    const handleLogin = () => {
        // Perform login logic
        console.log('Email:', email);
        console.log('Password:', password);
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
                <Text style={styles.welcome2}>Sign in to continue</Text>
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
                    <MaterialIcons name="lock" size={20} style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Sign in</Text>
                </TouchableOpacity>
                <View style={styles.lineContainer}>
                    <View style={styles.line} />
                    <Text style={styles.text}>OR</Text>
                    <View style={styles.line} />
                </View>
                <SocialButton
                    color="#1976D2"
                    iconName={'google'}
                    iconText={'Login with Google'}
                />
                <SocialButton
                    color="#4092FF"
                    iconName={'facebook'}
                    iconText={'Login with Google'}
                />
                <Text style={{ textAlign: "center", color: "#F7941D", fontSize: 18, marginVertical: 5 }}>Forgot password?</Text>
                <Text style={{ textAlign: "center",color: '#223263', fontSize: 18, marginVertical: 5 }}>
                    Don't have an account? 
                    <Text style={styles.spanTitle} onPress={()=> navigate('SignUp')}>Register</Text>
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
        borderColor: '#9098B1',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 5,
    },
    icon: {
        // marginRight: 10,
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
        height: 45,
        backgroundColor: '#f7941d',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
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
