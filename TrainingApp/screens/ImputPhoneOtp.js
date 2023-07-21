import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Pressable } from 'react-native';
import { MoviesCards } from '../Context'

const ImputPhoneOtp = () => {
    const navigation = useNavigation();
    const [numbers, setNumbers] = useState(['', '', '', '', '', '', '', '']);
    const inputRefs = useRef([]);
    const { inputPhoneOtp } = useContext(MoviesCards);

    return (
        <View style={styles.container}>
            <View>
                <Text style={{ textAlign: 'center' }}>
                    Ma khoa bi mat da duoc tao ra khi nguoi dung dang ki su dung Otp:
                </Text>
            </View>
            <View style={styles.inputContainer}>
                <Text style={{ fontSize: 20, fontWeight: "500" }}>{inputPhoneOtp}</Text>
            </View>
            <Pressable
                onPress={() => navigation.navigate("Home")}
                style={{
                    padding: 10,
                    borderRadius: 5,
                    backgroundColor: '#17B3F2',
                    marginTop: 40,
                    width: 90
                }}>
                <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>
                    Submit
                </Text>
            </Pressable>
        </View>
    )
}

export default ImputPhoneOtp
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,

    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 16,
    },
    input: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        paddingHorizontal: 8,
        marginRight: 8,
    },
});