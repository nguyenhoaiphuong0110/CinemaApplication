import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../themes/colors'
import { useNavigation } from '@react-navigation/native'

const GetStartOtp = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.bg,
        }}>
            <View style={{
                flex: 1,
                justifyContent: "space-around",
                marginHorizontal: 4
            }}>
                <Text style={{
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
                        width: 350,
                        height: 350
                    }}
                        source={require("../assets/images/getStart.jpg")} />
                </View>
                <View style={{ marginTop: 16 }}>
                    <TouchableOpacity style={{
                        paddingHorizontal: 40,
                        backgroundColor: "#F59E0B",
                        marginVertical: 25,
                        borderRadius: 10,
                        padding: 10,
                        marginHorizontal: 60
                    }} onPress={() => navigation.navigate("PassOTPSignUp")}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: "bold",
                            textAlign: 'center',
                            color: "#4A5568"
                        }}>Begin</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default GetStartOtp