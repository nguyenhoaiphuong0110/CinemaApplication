import { View, Text, TextInput, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../themes/colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase-config'



const SignUpScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleCreateAccount = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('Account created!')
                const user = userCredential.user;
                console.log(user)
                navigation.navigate('Login')
            })
            .catch(error => {
                console.error(error)
                Alert.alert(error.message)
            })
    }
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.bg
        }}>
            <View style={{
                flexDirection: "row",
                justifyContent: "flex-start"
            }}>
                <TouchableOpacity style={{
                    backgroundColor: "#F59E0B",
                    padding: 8,
                    borderTopRightRadius: 10,
                    borderBottomLeftRadius: 10,
                    marginLeft: 15
                }} onPress={() => navigation.navigate("Welcome")}>
                    <Icon name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: "center"
            }}>
                <Image style={{ width: 165, height: 110 }} source={require('../assets/images/signup.png')} />
            </View>
            <View style={{
                flex: 1,
                backgroundColor: colors.white,
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 20,
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50
            }}>
                <View style={{ marginTop: 8 }}>
                    <Text style={{
                        color: "#4A5568",
                        marginLeft: 10
                    }}>Full name</Text>
                    <TextInput style={{
                        padding: 10,
                        backgroundColor: "#F3F4F6",
                        color: "#4A5568",
                        borderRadius: 10,
                        marginBottom: 8
                    }}
                        value='phuong'
                        placeholder='Enter name' />

                    <Text style={{
                        color: "#4A5568",
                        marginLeft: 10,
                        marginTop: 10
                    }}>Email Address</Text>
                    <TextInput style={{
                        padding: 10,
                        backgroundColor: "#F3F4F6",
                        color: "#4A5568",
                        borderRadius: 10,
                        marginBottom: 8
                    }}
                        value={email}
                        onChangeText={text => setEmail(text)}
                        placeholder='Enter email' />

                    <Text style={{
                        color: "#4A5568",
                        marginLeft: 10,
                        marginTop: 10
                    }}>Passsword</Text>
                    <TextInput style={{
                        padding: 10,
                        backgroundColor: "#F3F4F6",
                        color: "#4A5568",
                        borderRadius: 10,
                        marginBottom: 16
                    }}
                        secureTextEntry
                        value={password}
                        onChangeText={text => setPassword(text)}
                        placeholder='Enter password' />
                </View>
                <TouchableOpacity
                    onPress={handleCreateAccount}
                    style={{
                        paddingVertical: 10,
                        marginTop: 10,
                        backgroundColor: "#16A1B4",
                        borderRadius: 10
                    }}>
                    <Text style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "#4A5568"
                    }}>Sign Up</Text>
                </TouchableOpacity>
                <Text style={{
                    fontSize: 15,
                    textAlign: 'center',
                    color: "#4A5568",
                    fontWeight: 'bold',
                    paddingVertical: 20
                }}>Or</Text>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginHorizontal: 40
                }}>
                    <TouchableOpacity style={{
                        padding: 8,
                        backgroundColor: "#f3f4f6",
                        borderRadius: 15
                    }}>
                        <Image style={{ width: 40, height: 40 }} source={require('../assets/icons/google.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        padding: 8,
                        backgroundColor: "#f3f4f6",
                        borderRadius: 15
                    }}>
                        <Image style={{ width: 40, height: 40 }} source={require('../assets/icons/apple.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        padding: 8,
                        backgroundColor: "#f3f4f6",
                        borderRadius: 15
                    }}>
                        <Image style={{ width: 40, height: 40 }} source={require('../assets/icons/facebook.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: 'center',
                    marginTop: 30
                }}>
                    <Text style={{
                        fontWeight: "500",
                        color: '#718096'
                    }}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={{
                            fontWeight: "600",
                            color: '#F59E0B'
                        }}> Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SignUpScreen