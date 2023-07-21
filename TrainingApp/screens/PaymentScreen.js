import { View, Text, ScrollView, StyleSheet, TextInput, Button, Alert, Pressable } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../themes/colors'
import { CardField, useConfirmPayment } from '@stripe/stripe-react-native'
import { API_URL } from '../config'
import { useNavigation, useRoute } from '@react-navigation/native'


const PaymentScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const [names, setNames] = useState();
    const [loading,setLoading] = useState(false);
    const getName = () => {
        if (!names) {
            Alert.alert("Please fill your name");
        } else {
            navigation.navigate("InputPass", {
                name: route.params.name,
                mall: route.params.mall,
                timeSelected: route.params.timeSelected,
                total: route.params.total,
                date: route.params.date,
                image: route.params.image,
                selectedSeats: route.params.selectedSeats,
                price: route.params.price
            })
        }
    }
    return (
        <ScrollView style={styles.container}>
            <TextInput
                autoCapitalize='none'
                placeholder='Name'
                keyboardType='name-phone-pad'
                onChange={(value) => setNames(value.nativeEvent.text)}
                style={styles.input}>
            </TextInput>
            <CardField
                postalCodeEnabled={false}
                value={names}
                placeholders={{
                    number: '4242 4242 4242 4242'
                }}
                style={styles.cartField}
                cardStyle={{
                    borderColor: '#000000',
                    borderWidth: 1,
                    borderRadius: 8
                }} />
            <Pressable style={{
                flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: "#17B3F2", padding: 10, height: 40, borderRadius: 10, marginTop: 10
            }} onPress={getName}>
                <Text>Pay</Text>
            </Pressable>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: 20,
        paddingHorizontal: 16,
    },
    cartField: {
        width: '100%',
        height: 50,
        marginVertical: 30,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    text: {
        marginLeft: 12,
    },
    input: {
        height: 44,
        borderBottomColor: colors.slate,
        borderBottomWidth: 1.5,
    },
});

export default PaymentScreen;