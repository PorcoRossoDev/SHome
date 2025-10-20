import React from 'react';
import { View, Text, TouchableOpacity, Button, ScrollView, Dimensions, Platform, StyleSheet, FlatList } from 'react-native';
import * as HeroSolid from "react-native-heroicons/solid";

const OrderItem = ({ props }) => {
    return (
        <View className='bg-white p-4 mb-4'
            style={{
                backgroundColor: "white",
                borderRadius: 5,
                //paddingVertical: 16,
                // Shadow cho iOS
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 2,
                // Shadow cho Android
                elevation: 2,
            }}
        >
            <View className="flex-row justify-between items-start">
                {/* Bên trái */}
                <View>
                    <Text className="text-f17 font-bold text-blue-700">240619-122</Text>
                    <Text className="text-f17 font-bold mt-1">3.199.200 đ</Text>
                </View>

                {/* Bên phải */}
                <View className="items-end">
                    <View className="bg-red-500 px-3 py-1 rounded-lg">
                        <Text className="text-white text-f13 font-bold">Xuất kho</Text>
                    </View>
                    <Text className="text-f11 text-right mt-2 text-gray-400">13:39 24/09/2025</Text>
                    <Text className="text-right font-bold mt-1">Tuấn Anh</Text>
                </View>
            </View>
            <View className='flex-row items-center'>
                <HeroSolid.UserCircleIcon size={17} color={'#CECECE'} />
                <View className='flex-row ml-3'>
                    <Text className='text-f14'>Anh Việt - </Text>
                    <Text className='font-medium underline text-f14'>098765637</Text>
                </View>
            </View>
            <View className='flex-row items-center my-2.5'>
                <HeroSolid.MapPinIcon size={17} color={'#CECECE'} />
                <View className='flex-row ml-3'>
                    <Text className='text-f14'>361A Lê Văn Sỹ</Text>
                </View>
            </View>
            <View className='flex-row items-start'>
                <HeroSolid.PencilSquareIcon size={17} color={'#CECECE'} />
                <Text className="ml-3">
                    <Text className="font-bold text-f14">Ghi chú: </Text>
                    *** Khách Viết Chênh VAT số tiền: 9.969.100đ
                </Text>
            </View>
            <View className='flex-row flex-wrap mt-3'>
                <View className='flex-row flex-wrap items-center w-1/2'>
                    <Text className='text-f15'>Thanh toán</Text>
                    <Text className='w-2 h-2 bg-black rounded-full ml-5'></Text>
                </View>
                <View className='flex-row flex-wrap items-center w-1/2'>
                    <Text className='text-f15'>VAT</Text>
                    <Text className='w-2 h-2 bg-red-600 rounded-full ml-5'></Text>
                </View>
            </View>
            <View className='mt-3 pt-3 border-t border-gray-100 flex-row flex-wrap'>
                <View className='flex-row flex-wrap items-center w-1/2 justify-center'>
                    <View className='flex-row flex-wrap items-center'>
                        <HeroSolid.PrinterIcon size={26} color={'#d5d5d5'} />
                        <Text className='text-f15 ml-2'>In đơn hàng</Text>
                    </View>
                </View>
                <View className='flex-row flex-wrap items-center w-1/2 justify-center border-l border-gray-200'>
                    <View className='flex-row flex-wrap items-center'>
                        <HeroSolid.TruckIcon size={26} color={'#d5d5d5'} />
                        <Text className='text-f15 ml-2'>Nhận đơn giao</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default OrderItem