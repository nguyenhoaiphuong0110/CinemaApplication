import { View, StyleSheet, Switch, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../themes/colors';
import PaymentScreen from './PaymentScreen';
import auth from "./LoginScreen"

import {
    Avatar,
    Title,
    Caption,
    Text,
    TouchableRipple,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
    const navigation = useNavigation();
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        if (isEnabled) {
            Alert.alert(
                'Confirmation',
                'Are you sure you want to turn off the switch?',
                [
                    {
                        text: 'Cancel',
                        onPress: () => {
                            // User cancelled, do nothing
                        },
                        style: 'cancel',
                    },
                    {
                        text: 'OK',
                        onPress: () => {
                            setIsEnabled(false);
                        },
                    },
                ],
            );
        } else {
            setIsEnabled(true);
        }
    };

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.bg
        }}>
            <View style={styles.userInfoSection1}>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <Avatar.Image
                        source={{
                            uri: 'https://static.vecteezy.com/system/resources/previews/010/056/184/original/people-icon-sign-symbol-design-free-png.png',
                        }}
                        size={80}
                    />
                    <View style={{ marginLeft: 20 }}>
                        <Title style={[styles.title, {
                            marginTop: 15,
                            marginBottom: 5,
                        }]}>H.Phuong</Title>
                        <Caption style={styles.caption}>@phuong</Caption>
                    </View>
                </View>
            </View>
            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <Icon name="phone" color="#777777" size={20} />
                    <Text style={{ color: "#777777", marginLeft: 2 }}>0967833175</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="email" color="#777777" size={20} />
                    <Text style={{ color: "#777777", marginLeft: 5 }}>phuong@email.com</Text>
                </View>
            </View>
            <View style={styles.infoBoxWrapper}>
                <View style={[styles.infoBox, {
                    borderRightColor: '#dddddd',
                    borderRightWidth: 1
                }]}>
                    <Title style={{ color: 'white' }}>140.000 VND</Title>
                    <Caption style={{ color: 'white' }}>Wallet</Caption>
                </View>
                <View style={styles.infoBox}>
                    <Title style={{ color: 'white' }}>12</Title>
                    <Caption style={{ color: 'white' }}>Booked</Caption>
                </View>
            </View>
            <View style={styles.menuWrapper}>
                <TouchableRipple >
                    <View style={styles.menuItem}>
                        <Icon name="heart-outline" size={25} color='white' />
                        <Text style={styles.menuItemText}>Your Favorites</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => navigation.navigate('GetStartOtp')} >
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            paddingHorizontal: 30,
                        }}>
                            <Icon name="credit-card" size={25} color='white' />
                            <Text style={styles.menuItemText}>Payment</Text>
                        </View>
                        <View style={{ marginRight: 30 }}>
                            <Switch
                                trackColor={{ false: '#767577', true: '#81b0ff' }}
                                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => navigation.navigate('Setting')} >
                    <View style={styles.menuItem}>
                        <Icons name="settings" size={25} color='white' />
                        <Text style={styles.menuItemText}>Settings</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => navigation.navigate('Login')} >
                    <View style={styles.menuItem}>
                        <Icon name="logout-variant" size={25} color='white' />
                        <Text style={styles.menuItemText}>Logout</Text>
                    </View>
                </TouchableRipple>
            </View>
        </SafeAreaView>
    )
}

export default ProfileScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoSection1: {
        flexDirection: "row",
        paddingHorizontal: 10,
        marginBottom: 25,
    },
    userInfoSection: {
        flexDirection: "row",
        justifyContent: 'space-around',
        marginHorizontal: -20,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
        color: 'white'
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
        color: 'white'
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'

    },
    menuWrapper: {
        marginTop: 10,
        marginHorizontal: -20
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: 'white',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
});