import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react'
import Header from '../components/Header'
import MovieCards from '../components/MovieCards'
import { colors } from '../themes/colors'
import Loading from '../components/Loading'

const HomeScreen = () => {
    const [loading, setLoading] = useState(false);
    return (
        <SafeAreaView style={{ backgroundColor: colors.bg, flex: 1 }}>
            {
                loading ? (
                    <Loading />
                ) : (
                    <MovieCards />
                )
            }
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})