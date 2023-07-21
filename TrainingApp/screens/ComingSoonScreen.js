import { View, Text, Platform, StatusBar, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Evilicon from 'react-native-vector-icons/EvilIcons'
import TrendingMovies from '../components/TrendingMovies';
import MovieList from '../components/MovieList';


const ios = Platform.OS == 'ios';
const ComingSoonScreen = () => {
    const [trending, setTrending] = useState([1, 2, 3]);
    const [upcoming, setUpcoming] = useState([1, 2, 3]);
    const [topRated, setTopRated] = useState([1, 2, 3]);
    return (
        <View className="flex-1 bg-neutral-800">
            <SafeAreaView>
                <StatusBar barStyle="light-content" />
                <View className="flex-row justify-between items-center mx-4">
                    <Evilicon name="navicon" size={30} color="white" />
                    <Text
                        className="text-white text-3xl font-bold">
                        <Text style={{ color: 'yellow' }}>C</Text>omingsoon
                    </Text>
                    <TouchableOpacity>
                        <Evilicon name="search" size={30} color="white" />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 10 }}
            >
                <TrendingMovies data={trending} />
                <MovieList title="Upcoming" data={upcoming} />
                <MovieList title="Top Rates" data={topRated} />
            </ScrollView>
        </View>
    )
}

export default ComingSoonScreen