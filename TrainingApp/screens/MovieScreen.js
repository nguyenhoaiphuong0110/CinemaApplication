import { Pressable, StyleSheet, Text, View, FlatList, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'
import AntDesigns from 'react-native-vector-icons/AntDesign'
import HorizontalDatepicker from '@awrminkhodaei/react-native-horizontal-datepicker'
import malls from '../data/malls'
import { colors } from '../themes/colors'

const MovieScreen = () => {
    const route = useRoute();
    console.log(route.params);
    const navigation = useNavigation();
    const [selectedDate, setSelectedDate] = useState("");
    const mallsData = malls;
    const [mall, setMall] = useState([]);
    const [seatsData, setSeatsData] = useState([]);
    console.log(mall, "selected");
    return (
        <ScrollView style={{ flex: 1, marginTop: 50 }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Icon onPress={() => navigation.goBack()} style={{ marginLeft: 5 }} name="arrow-back" size={24} color="black" />
                    <Text style={{ fontSize: 17, fontWeight: "600", marginLeft: 5 }}>{route.params.name}</Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginRight: 10,
                    }}
                >
                    <Icon name="search" size={24} color="black" />
                    <Icon
                        style={{ marginHorizontal: 10 }}
                        name="ios-filter-outline"
                        size={24}
                        color="black"
                    />
                    <Icon name="share-outline" size={24} color="black" />
                </View>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    alignContent: "center",
                    marginTop: 10,
                    marginLeft: 5,
                }}
            >
                <AntDesigns name="Safety" size={24} color="orange" />
                <Text style={{ paddingTop: 4, paddingLeft: 4 }}>
                    Your safety is our priority
                </Text>
            </View>
            <HorizontalDatepicker
                mode="gregorian"
                startDate={new Date("2023-08-1")}
                endDate={new Date("2023-08-30")}
                initialSelectedDate={new Date("2023-08-22")}
                onSelectedDateChange={(date) => setSelectedDate(date)}
                selectedItemWidth={170}
                unselectedItemWidth={38}
                itemHeight={38}
                itemRadius={10}
                selectedItemTextStyle={styles.selectedItemTextStyle}
                unselectedItemTextStyle={styles.selectedItemTextStyle}
                selectedItemBackgroundColor="#222831"
                unselectedItemBackgroundColor="#ececec"
                flatListContainerStyle={styles.flatListContainerStyle}
            />
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <Image style={{ aspectRatio: 4 / 5, height: 320, borderRadius: 6, }} source={{ uri: route.params.image }} />
            </View>

            {mallsData.map((item, index) => (
                <Pressable
                    onPress={() => {
                        setMall(item.name);
                        setSeatsData(item.tableData);
                    }}
                    style={{ margin: 10, }}
                    key={index}
                >
                    <Text style={{ fontSize: 16, fontWeight: "500" }}>{item.name}</Text>
                    {mall.includes(item.name) ? (
                        <FlatList
                            numColumns={3}
                            data={item.showtimes}
                            renderItem={({ item }) => (
                                <Pressable
                                    onPress={() => navigation.navigate("Theatre", {
                                        mall: mall,
                                        name: route.params.name,
                                        timeSelected: item,
                                        tableSeats: seatsData,
                                        date: selectedDate,
                                        image: route.params.image
                                    })}
                                    style={{
                                        borderColor: "green",
                                        borderWidth: 0.5,
                                        width: 80,
                                        borderRadius: 3,
                                        margin: 10,
                                        padding: 5,
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 15,
                                            color: "green",
                                            fontWeight: "500",
                                            textAlign: "center",
                                        }}
                                    >
                                        {item}
                                    </Text>
                                </Pressable>
                            )}
                        />
                    ) : null}
                </Pressable>
            ))}
        </ScrollView>
    );
};

export default MovieScreen

const styles = StyleSheet.create({})