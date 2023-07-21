import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../themes/colors'
import { useNavigation } from '@react-navigation/native'

const WelcomeScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{

            flex: 1,
            backgroundColor: "#02131F",
        }}>
            <View style={{
                flex: 1,
                justifyContent: "space-around",
                marginHorizontal: 4,
                marginBottom: 50
            }}>
                <Text style={{
                    marginBottom: 40,
                    color: colors.white,
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: 26,
                }}>Let's Get Started</Text>
                <View style={{
                    flexDirection: "row",
                    justifyContent: 'center'
                }}>
                    <Image style={{


                    }}
                        source={require("../assets/images/getStart.jpg")} />
                </View>
                <View style={{ marginTop: 10 }}>
                    <TouchableOpacity style={{
                        paddingHorizontal: 40,
                        backgroundColor: "#16A1B4",
                        marginVertical: 25,
                        borderRadius: 10,
                        padding: 10,
                        marginHorizontal: 60
                    }} onPress={() => navigation.navigate("SignUp")}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: "bold",
                            textAlign: 'center',
                            color: "#4A5568"
                        }}>Sign Up</Text>
                    </TouchableOpacity>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "center"
                    }}>
                        <Text style={{
                            color: colors.white,
                            fontWeight: "600"
                        }}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                            <Text style={{
                                fontWeight: "600",
                                color: '#F59E0B'
                            }}> Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default WelcomeScreen