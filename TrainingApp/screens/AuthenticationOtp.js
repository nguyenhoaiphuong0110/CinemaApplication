import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { View, TextInput, StyleSheet, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Loading from '../components/Loading';


const AuthenticationOtp = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const [count, setCount] = useState(30);
    const [sequence, setSequence] = useState('123456');
    const [loading, setLoading] = useState(false);
    const [showSecondSequence, setShowSecondSequence] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (count === 0) {
                setSequence(generateRandomSequence());
                setCount(30);
            } else {
                setCount(count - 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [count]);


    const generateRandomSequence = () => {
        const shuffledSequence = shuffleString('123456');
        return shuffledSequence;
    };

    const shuffleString = (string) => {
        const array = string.split('');
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array.join('');
    };

    const formatSequence = (sequence) => {
        return sequence.split('').join(' ');
    };


    return (
        <SafeAreaView style={{ flexDirection: 'column', alignContent: 'center', justifyContent: 'center' }} >
            {
                loading ?
                    (
                        <Loading />
                    ) : (
                        <>
                            <View style={{
                                flexDirection: 'row', alignContent: 'center', justifyContent: 'center'
                            }}>
                                <Text style={{ textAlign: 'center' }}>
                                    Mã OTP sẽ thay đổi trong: {count}s
                                </Text>
                            </View>
                            <View style={{ marginTop: 20 }}>
                                <Text style={{
                                    textAlign: "center",
                                    fontSize: 50,
                                }}>{formatSequence(sequence)}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 40 }}>
                                <Pressable style={{
                                    marginHorizontal: 60,
                                    padding: 10,
                                    backgroundColor: "#17B3F2",
                                    width: 200, height: 40,
                                    borderRadius: 10,
                                    marginTop: 90,

                                }}
                                    onPress={() => navigation.navigate("Ticket", {
                                        name: route.params.name,
                                        mall: route.params.mall,
                                        timeSelected: route.params.timeSelected,
                                        total: route.params.total,
                                        date: route.params.date,
                                        image: route.params.image,
                                        selectedSeats: route.params.selectedSeats,
                                        price: route.params.price
                                    }
                                    )}>
                                    <Text style={{ textAlign: "center" }}>Pay</Text>
                                </Pressable>
                            </View>
                        </>
                    )
            }
        </SafeAreaView>
    )
}

export default AuthenticationOtp;
