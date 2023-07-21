import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../themes/colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const ResetPasswordScreen = () => {
    const navigation = useNavigation();
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
                }} onPress={() => navigation.navigate("Login")}>
                    <Icon name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: "center"
            }}>
                <Image style={{ width: 200, height: 200 }} source={require('../assets/images/login.png')} />
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
                        value='phuong@gmail.com'
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
                        value='test1234'
                        placeholder='Enter password' />
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Login")} style={{
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
                    }}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default ResetPasswordScreen