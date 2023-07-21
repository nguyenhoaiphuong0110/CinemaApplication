import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import MovieScreen from './screens/MovieScreen';
import TheatreScreen from './screens/TheatreScreen'
import TicketScreen from './screens/TicketScreen'
import PaymentScreen from './screens/PaymentScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import ImputPhoneOtp from './screens/ImputPhoneOtp';

import BottomTabNavigation from './BottomTabNavigation';
import SettingScreen from './screens/SettingScreen';
import GetStartOtp from './screens/GetStartOtp';
import AuthenticationOtp from './screens/AuthenticationOtp';
import InputPassOTP from './screens/InputPassOTP';
import PassOTPSignUp from './screens/PassOTPSignUp';
import MovieList from './components/MovieList';
import MovieTitleScreen from './screens/MovieTitleScreen';



const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Welcome'>
                <Stack.Screen name="Home" component={BottomTabNavigation} options={{ headerShown: false }} />
                <Stack.Screen name="Movies" component={MovieScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Theatre" component={TheatreScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Payment" component={PaymentScreen} />
                <Stack.Screen name="Ticket" component={TicketScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Welcome" options={{ headerShown: false }} component={WelcomeScreen} />
                <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
                <Stack.Screen name="Forgot" options={{ headerShown: false }} component={ForgotPasswordScreen} />
                <Stack.Screen name="Reset" options={{ headerShown: false }} component={ResetPasswordScreen} />
                <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUpScreen} />
                <Stack.Screen name="Setting" options={{ headerShown: false }} component={SettingScreen} />
                <Stack.Screen name="PhoneOtp" options={{ headerShown: false }} component={ImputPhoneOtp} />
                <Stack.Screen name="GetStartOtp" options={{ headerShown: false }} component={GetStartOtp} />
                <Stack.Screen name="AuthenOtp" component={AuthenticationOtp} />
                <Stack.Screen name="MovieTitle" component={MovieTitleScreen} options={{ headerShown: false }} />
                <Stack.Screen name="InputPass" component={InputPassOTP} />
                <Stack.Screen name="PassOTPSignUp" component={PassOTPSignUp} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator

const styles = StyleSheet.create({})