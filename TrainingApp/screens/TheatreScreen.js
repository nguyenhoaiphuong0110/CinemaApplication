import { FlatList, Pressable, StyleSheet, Text, View, Alert } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView, useSafeAreaFrame } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'
import AntDesigns from 'react-native-vector-icons/AntDesign'
import FontAwesomes from 'react-native-vector-icons/FontAwesome'
import { MoviesCards } from '../Context'


const TheatreScreen = () => {
    const route = useRoute();
    // console.log(route.params);
    const navigation = useNavigation();
    const { seats, setSeats, occupied } = useContext(MoviesCards);
    const onSeatSelect = (item) => {
        const seatSelected = seats.find((seat) => seat === item);
        console.log(seatSelected, "you pressed on");
        if (seatSelected) {
            setSeats(seats.filter((seat) => seat !== item));
        } else {
            setSeats([...seats, item])
        }
    };
    const displaySeats = [...seats];
    const fee = 45000;
    const noOfSeats = seats.length;
    const priceValue = noOfSeats;
    const total = seats.length > 0 ? fee * noOfSeats : 0;
    console.log(total)
    console.log(seats, "seat selected")
    const showSeats = () => {
        return (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                {seats.map((seat, index) => (
                    <Text style={{ marginTop: 4, fontSize: 17, paddingHorizontal: 4 }}>{seat}</Text>
                ))}
            </View>
        );
    };
    const Payment = () => {
        if (total == 0) {
            Alert.alert("Please choose a seat")
        } else {
            occupied.push(...seats);
            navigation.navigate("Payment", {
                name: route.params.name,
                mall: route.params.mall,
                timeSelected: route.params.timeSelected,
                total: total,
                date: route.params.date,
                image: route.params.image,
                selectedSeats: displaySeats,
                price: priceValue
            })

            setSeats([]);
        }
    }
    return (
        <SafeAreaView style={{ marginTop: 20 }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Icon onPress={() => navigation.goBack()} style={{ marginLeft: 5 }} name="arrow-back" size={24} color="black" />
                    <View style={{ marginLeft: 6 }}>
                        <Text style={{ fontSize: 16, fontWeight: "600" }}>{route.params.name}</Text>
                        <Text style={{ marginTop: 4, color: "gray", fontSize: 15, fontWeight: "500" }}>{route.params.mall}</Text>
                    </View>
                </View>
                <AntDesigns style={{ marginRight: 12 }} name="sharealt" size={24} color="black" />
            </View>
            <Text style={{ textAlign: "center", fontSize: 16, fontWeight: "bold", marginTop: 10 }}>{route.params.timeSelected}</Text>
            <Text style={{ textAlign: "center", fontSize: 13, marginTop: 10, color: "gray" }}>CLASSIC(240)</Text>
            <View style={{ marginTop: 20 }} />

            <FlatList numColumns={7} data={route.params.tableSeats} renderItem={({ item }) => (
                <Pressable onPress={() => onSeatSelect(item)} style={{ margin: 10, borderColor: "gray", borderWidth: 0.5, borderRadius: 5 }}>
                    {seats.includes(item) ? (
                        <Text style={{ backgroundColor: "red", padding: 8, borderRadius: 5 }}>{item}</Text>
                    )
                        :
                        occupied.includes(item) ? (
                            <Text style={{ backgroundColor: '#989898', padding: 8 }}>{item}</Text>
                        ) : (
                            <Text style={{ padding: 8 }}>{item}</Text>
                        )}
                </Pressable>
            )}>
            </FlatList>
            <View style={{ flexDirection: "row", alignItems: "center", paddingLeft: 100, marginTop: 20, backgroundColor: "#D8D8D8", padding: 10 }}>
                <View>
                    <FontAwesomes style={{ textAlign: "center", marginBottom: 4 }} name="square" size={24} color="red" />
                    <Text>Selected</Text>
                </View>
                <View style={{ marginHorizontal: 20 }}>
                    <FontAwesomes style={{ textAlign: "center", marginBottom: 4 }} name="square" size={24} color="white" />
                    <Text>Empty</Text>
                </View>
                <View>
                    <FontAwesomes style={{ textAlign: "center", marginBottom: 4 }} name="square" size={24} color="#989898" />
                    <Text>Occupied</Text>
                </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <View style={{ padding: 10 }}>
                    <Text style={{ marginBottom: 4, fontSize: 15, fontWeight: "500" }}>Show end time approax 6:15pm</Text>
                    {seats.length > 0 ? (
                        showSeats()
                    ) : (
                        <Text style={{ fontSize: 18 }}>No seats selected</Text>
                    )}
                </View>
                <View style={{ backgroundColor: "#E0E0E0", padding: 6, borderTopLeftRadius: 5, borderBottomLeftRadius: 6, marginTop: 10 }}>
                    <Text style={{ width: 100 }}>Now with ticket cancellation</Text>
                </View>
            </View>
            <Pressable style={{ backgroundColor: "#17B3F2", padding: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 20 }}>
                {seats.length > 0 ? (
                    <Text style={{ fontSize: 17, fontWeight: "500" }}>{seats.length} seat's selected</Text>
                ) : (
                    <Text></Text>
                )}
                <Pressable onPress={Payment}>
                    <Text style={{ fontSize: 17, fontWeight: "600" }}>Pay {total} VND</Text>
                </Pressable>
            </Pressable>
        </SafeAreaView>
    )
}

export default TheatreScreen

const styles = StyleSheet.create({})