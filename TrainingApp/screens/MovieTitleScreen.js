import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useRoute, useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'


const ios = Platform.OS == 'ios';
const topMargin = ios ? '' : ' mt-3';
var { width, height } = Dimensions.get('window');
const MovieTitleScreen = () => {
    const { params: item } = useRoute();
    const navigation = useNavigation();
    useEffect(() => {
    }, [item])

    return (
        <ScrollView
            contentContainerStyle={{ paddingBottom: 20 }}
            className="flex-1 bg-neutral-900">
            <View className="w-full">
            </View>
        </ScrollView>
    )
}

export default MovieTitleScreen