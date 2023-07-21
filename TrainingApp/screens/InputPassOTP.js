import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useRef, useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Pressable, Alert } from 'react-native';
import Loading from '../components/Loading';

const InputPassOTP = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [numbers, setNumbers] = useState(['', '', '', '', '', '',]);
    const inputRefs = useRef([]);

    const handleNumberChange = (inputValue, index) => {

        // Validate input to allow only one digit
        const digit = inputValue.slice(-1);
        if (/^\d$/.test(digit)) {
            // Update the number
            const updatedNumbers = [...numbers];
            updatedNumbers[index] = digit;
            setNumbers(updatedNumbers);

            // Move focus to the next input cell
            if (index < inputRefs.current.length - 1) {
                inputRefs.current[index + 1].focus();
            }
        }
    };
    const handleFormSubmit = () => {
        // Process the submitted numbers
        console.log('Submitted numbers:', numbers);
        // Perform any additional logic or actions here
    };
    return (
        <>
            {
                loading ? (
                    <Loading />
                ) : (
                    <View style={styles.container}>
                        <View style={{ marginBottom: 20 }}>
                            <Text style={{ textAlign: 'center' }}>
                                Nhập mã Pin để xác thực thanh toán giao dịch:
                            </Text>
                        </View>
                        <View style={styles.inputContainer}>
                            {numbers.map((number, index) => (
                                <TextInput
                                    key={index}
                                    ref={(ref) => (inputRefs.current[index] = ref)}
                                    style={styles.input}
                                    placeholder=""
                                    value={number}
                                    maxLength={1}
                                    keyboardType="numeric"
                                    textAlign="center"

                                    onChangeText={(inputValue) => handleNumberChange(inputValue, index)}
                                />
                            ))}
                        </View>
                        <View>
                            <Pressable
                                onPress={() => navigation.navigate('AuthenOtp', {
                                    name: route.params.name,
                                    mall: route.params.mall,
                                    timeSelected: route.params.timeSelected,
                                    total: route.params.total,
                                    date: route.params.date,
                                    image: route.params.image,
                                    selectedSeats: route.params.selectedSeats,
                                    price: route.params.price
                                })}
                                disabled={!numbers.every((number) => number !== '')}
                                style={{
                                    backgroundColor: '#BF41E7',
                                    padding: 10,
                                    borderRadius: 5
                                }}
                            >
                                <Text>Xác Nhận</Text>
                            </Pressable>
                        </View>
                    </View>
                )
            }
        </>
    )
}

export default InputPassOTP;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#41C6E7"
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
        borderColor: '#000',
        borderRadius: 4,
        paddingHorizontal: 8,
        marginRight: 8,
    },
});