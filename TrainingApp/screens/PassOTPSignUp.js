import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState, useCallback, useContext } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Pressable, Alert } from 'react-native';
import axios from 'axios';
import { MoviesCards } from '../Context'

const PassOTPSignUp = () => {
    const navigation = useNavigation();
    const [numbers, setNumbers] = useState(['', '', '', '', '', '',]);
    const [inputNumers, setInputNumers] = useState();
    const inputRefs = useRef([]);
    const { setInputPhoneOtp } = useContext(MoviesCards);

    const handleNumberChange = (inputValue, index) => {
        setInputNumers(preState => {
            if (!!preState) {
                return `${preState}${inputValue}`;
            }

            return `${inputValue}`;
        });

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
    const handleFormSubmit = useCallback(() => {
        // Process the submitted numbers
        console.log('Submitted numbers:', inputNumers);
        // Perform any additional logic or actions here
        axios.post(
            'http://10.0.2.2:8980/smartOTP/getSecretKey',
            {
                "userId": "0386909344",
                "regionCode": "PD0600",
                "appCode": "CMIS",
                "appKey": "CMIS",
                "extraInfo": "Test tạo secret key",
                "publicKey": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAoAmej5uopXSVoJZE0IlZ/O5qlQoG7bWdkxGHKdjLxSZq+ekTu4h/LoqJmrKoieDKVozqyKgDcvYymxFiMrVhbu7PyRyeFs5jScCsCYCnZbiJPJgThHsYiBbcKAtfPaAGMEOLIsDuLQz5fe1pqf1pWdtjLiQjrXSvSyIsT24DpEODiwyh77vNkTb46bq8Irq+fZvYSA+TIqS//XwkyMEImInVsWpOGJhQtvJYwBqwpGQBOGxxiZPKPSHp6821wxL4ZKh++TbanQvd6IvVfgW0ljyr/Vj8WMrETn+b1y46GJAvrOT5EEKXsmo00EDRzOIQz07brQ3QNPvhxP3dE864awIDAQAB"
            }
        ).then(function (response) {
            // handle success
            const { data } = response;
            console.log(data, 'data response');

            setInputPhoneOtp(data.secretkey);
            navigation.navigate('PhoneOtp');
        }).catch(function (error) {
            // handle error
            console.log(error, 'data error');
        });
    }, [navigation, inputNumers, axios, setInputPhoneOtp]);

    return (
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
                    onPress={handleFormSubmit}
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

export default PassOTPSignUp;
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