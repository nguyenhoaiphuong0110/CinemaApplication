import { FlatList, Pressable, StyleSheet, Text, View, Image, Modal, Button } from 'react-native'
import React, { useContext, useState } from 'react'
import movies from '../data/movies'
import Header from './Header'
import { useNavigation } from '@react-navigation/native'
import { MoviesCards } from '../Context'
import TicketComponent from './TicketComponent'

const MovieCards = () => {
    const data = movies;
    const navigation = useNavigation();
    const { ticket } = useContext(MoviesCards);
    const [showWelcomeModal, setShowWelcomeModal] = useState(true);
    const handleAccessButtonPress = () => {
        setShowWelcomeModal(false);
        navigation.navigate('GetStartOtp');
    };
    return (

        <View>
            <FlatList
                showsVerticalScrollIndicator={false}
                numColumns={2}
                ListHeaderComponent={ticket.length > 0 ? TicketComponent : Header}
                data={data}
                renderItem={({ item }) => (
                    <Pressable style={{ margin: 10, marginHorizontal: 15 }}>
                        <Image style={{ aspectRatio: 2 / 3, height: 240, borderRadius: 6 }} source={{ uri: item.image }} />
                        <Text style={{ fontSize: 16, fontWeight: 'bold', width: 170, marginTop: 10, color: 'white' }}>{item.name.substr(0.16)}</Text>
                        <Text style={{ marginTop: 4, fontSize: 15, color: 'gray' }}>U/A.{item.language}</Text>
                        <Text style={{ marginTop: 4, fontSize: 14, fontWeight: "500", color: 'white' }}>{item.genre}</Text>
                        <Pressable onPress={() => navigation.navigate("Movies", {
                            name: item.name,
                            image: item.image,
                        })} style={{ backgroundColor: "#17B3F2", padding: 10, borderRadius: 6, marginRight: 10, width: 100, marginTop: 10 }}>
                            <Text style={{ fontSize: 14, fontWeight: "500", textAlign: "center" }}>BOOK</Text>
                        </Pressable>
                    </Pressable>
                )}></FlatList>
            <Modal visible={showWelcomeModal} transparent>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white', padding: 20, width: '65%', height: '40%', borderRadius: 10 }}>
                        <Text style={{ fontSize: 21, fontWeight: 'bold', textAlign: 'center' }}>Để đảm bảo an toàn hơn trong thanh toán các giao dịch đặt vé, xin vui lòng khách hàng sử dụng tính năng SmartOTP để xác thực các giao dịch 1 cách bảo mật tốt nhất</Text>
                        <Button title='đăng kí ngay' onPress={handleAccessButtonPress} />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default MovieCards

const styles = StyleSheet.create({})