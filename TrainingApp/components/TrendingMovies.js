import { View, Text, TouchableWithoutFeedback, Dimensions, Image } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel'
import { useNavigation } from '@react-navigation/native'


var { width, height } = Dimensions.get('window');

const TrendingMovies = ({ data }) => {
    const navigation = useNavigation();

    const handleClick = (item) => {
        navigation.navigate("MovieTitle", item)
    }
    return (
        <View className="mb-8">
            <Text className="text-white text-xl mx-4 mb-5">Trending</Text>
            <Carousel
                data={data}
                renderItem={({ item }) => <MovieCardss item={item} handleClick={handleClick} />}
                firstItem={1}
                inactiveSlideOpacity={0.60}
                sliderWidth={width}
                itemWidth={width * 0.62}
                slideStyle={{ display: 'flex', alignItems: 'center' }} />

        </View>
    )
}


const MovieCardss = ({ item, handleClick }) => {
    return (
        <TouchableWithoutFeedback onPress={() => handleClick(item)}>
            <Image source={require('../assets/images/get4.jpg')}
                style={{
                    width: width * 0.6,
                    height: height * 0.4
                }}
                className="rounded-3xl" />
        </TouchableWithoutFeedback>
    )
}
export default TrendingMovies;