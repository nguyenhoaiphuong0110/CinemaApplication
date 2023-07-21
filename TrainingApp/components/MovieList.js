import { View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Dimensions, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const { width, height } = Dimensions.get('window');

const MovieList = ({ title, data }) => {
    const navigation = useNavigation();
    let movieName = "Spide-Man 3213232323";
    return (
        <View className="mb-8 space-y-4">
            <View className="mx-4 flex-row justify-between items-center">
                <Text className="text-white text-lg">{title}</Text>
                <TouchableOpacity>
                    <Text style={{ color: 'yellow' }} className="text-lg">See All</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}>
                {
                    data.map((item, index) => {
                        return (
                            <View className="space-y-1 mr-4">
                                <Image source={require('../assets/images/get5.jpg')}
                                    className="rounded-3xl"
                                    style={{ width: width * 0.33, height: height * 0.22 }} />
                                <TouchableWithoutFeedback
                                    key={index}
                                    onPress={() => navigation.navigate("Movie", item)}
                                >
                                    <Text className="text-neutral-300 ml-1">{
                                        movieName.length > 14 ? movieName.slice(0, 14) + '...' : movieName
                                    }</Text>
                                </TouchableWithoutFeedback>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default MovieList