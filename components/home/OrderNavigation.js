import { useNavigation } from "@react-navigation/native";
import { Platform, Text, TouchableOpacity, View } from 'react-native';
import * as HeroSolid from "react-native-heroicons/solid";

const OrderNavigation = () => {
    const navigation = useNavigation();
    return (
        <View className=''>
            <Text className='uppercase text-f15 font-sfregular'>Danh sách đơn hàng</Text>
            <View className='mt-3 px-3 pt-4' 
                style={{
                    backgroundColor: "white",
                    borderRadius: 10,
                    // paddingVertical: 16,
                    // Shadow cho iOS
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.05,
                    shadowRadius: 6,
                    // Shadow cho Android
                    elevation: 6,
                }}
                >
                <TouchableOpacity 
                    onPress={() =>
                        navigation.navigate('Order', {
                        screen: 'OrderListStack',
                        })
                    }
                    className={`${Platform.OS == "ios" ? 'mb-4 pb-4' : 'mb-3 pb-3'} flex-row flex-wrap justify-between w-full items-center border-b border-gray-100`}
                    >
                    <View className='flex-row flex-wrap items-center justify-center'>
                        <View className='rounded-xl w-10 justify-center items-center'>
                            <HeroSolid.ShoppingCartIcon size={22} color={'#1e40af'} />
                        </View>
                        <View className='pl-3'>
                            <Text className='font-sfregular text-f16'>Tổng đơn hàng</Text>
                            <Text className={`text-gray-500 font-sfregular text-f13 ${Platform.OS == 'android' ? '-mt-1.5' : 'mt-1'}`}>225.435.678</Text>
                        </View>
                    </View>
                    <View className='flex-row flex-wrap items-center'>
                        <Text className='bg-gray-100 rounded-2xl px-2 py-2 text-f11'>117</Text>
                        <Text className='ml-2'>
                            <HeroSolid.ChevronRightIcon size={17} color={'#9ca3af'} />
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() =>
                        navigation.navigate('Order', {
                        screen: 'OrderSuccessStack',
                        })
                    }
                    className={`${Platform.OS == "ios" ? 'mb-4 pb-4' : 'mb-3 pb-3'} flex-row flex-wrap justify-between w-full items-center border-b border-gray-100`}
                    >
                    <View className='flex-row flex-wrap'>
                        <View className='rounded-xl w-10 justify-center items-center'>
                            <HeroSolid.CheckCircleIcon size={22} color={'#1e40af'} />
                        </View>
                        <View className='pl-3'>
                            <Text className='font-sfregular text-f16'>Hoàn thành</Text>
                            <Text className={`text-gray-500 font-sfregular text-f13 ${Platform.OS == 'android' ? '-mt-1.5' : 'mt-1'}`}>225.435.678</Text>
                        </View>
                    </View>
                    <View className='flex-row flex-wrap items-center'>
                        <Text className='bg-gray-100 rounded-2xl px-2 py-2 text-f11'>90</Text>
                        <Text className='ml-2'>
                            <HeroSolid.ChevronRightIcon size={17} color={'#9ca3af'} />
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() =>
                        navigation.navigate('Order', {
                        screen: 'OrderPaymentSuccessStack',
                        })
                    }
                    className={`${Platform.OS == "ios" ? 'mb-4 pb-4' : 'mb-3 pb-3'} flex-row flex-wrap justify-between w-full items-center border-b border-gray-100`}
                    >
                    <View className='flex-row flex-wrap'>
                        <View className='rounded-xl w-10 justify-center items-center'>
                            <HeroSolid.CreditCardIcon size={22} color={'#1e40af'} />
                        </View>
                        <View className='pl-3'>
                            <Text className='font-sfregular text-f16'>Đã Thanh toán</Text>
                            <Text className={`text-gray-500 font-sfregular text-f13 ${Platform.OS == 'android' ? '-mt-1.5' : 'mt-1'}`}>225.435.678</Text>
                        </View>
                    </View>
                    <View className='flex-row flex-wrap items-center'>
                        <Text className='bg-gray-100 rounded-2xl px-2 py-2 text-f11'>88</Text>
                        <Text className='ml-2'>
                            <HeroSolid.ChevronRightIcon size={17} color={'#9ca3af'} />
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() =>
                        navigation.navigate('Order', {
                        screen: 'UnpaidOrdersStack',
                        })
                    }
                    className={`${Platform.OS == "ios" ? 'mb-4 pb-4' : 'mb-3 pb-3'} flex-row flex-wrap justify-between w-full items-center border-b border-gray-100`}
                    >
                    <View className='flex-row flex-wrap'>
                        <View className='rounded-xl w-10 justify-center items-center'>
                            <HeroSolid.ClockIcon size={22} color={'#1e40af'} />
                        </View>
                        <View className='pl-3'>
                            <Text className='font-sfregular text-f16'>Chưa Thanh toán</Text>
                            <Text className={`text-gray-500 font-sfregular text-f13 ${Platform.OS == 'android' ? '-mt-1.5' : 'mt-1'}`}>225.435.678</Text>
                        </View>
                    </View>
                    <View className='flex-row flex-wrap items-center'>
                        <Text className='bg-gray-100 rounded-2xl px-2 py-2 text-f11'>21</Text>
                        <Text className='ml-2'>
                            <HeroSolid.ChevronRightIcon size={17} color={'#9ca3af'} />
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                    className={`${Platform.OS == "ios" ? 'mb-4 pb-4' : 'mb-3 pb-3'} flex-row flex-wrap justify-between w-full items-center border-b border-gray-100`}
                    >
                    <View className='flex-row flex-wrap'>
                        <View className='rounded-xl w-10 justify-center items-center'>
                            <HeroSolid.TruckIcon size={22} color={'#1e40af'} />
                        </View>
                        <View className='pl-3'>
                            <Text className='font-sfregular text-f16'>Hẹn giao</Text>
                            <Text className={`text-gray-500 font-sfregular text-f13 ${Platform.OS == 'android' ? '-mt-1.5' : 'mt-1'}`}>225.435.678</Text>
                        </View>
                    </View>
                    <View className='flex-row flex-wrap items-center'>
                        <Text className='bg-gray-100 rounded-2xl px-2 py-2 text-f11'>17</Text>
                        <Text className='ml-2'>
                            <HeroSolid.ChevronRightIcon size={17} color={'#9ca3af'} />
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                    className={`${Platform.OS == "ios" ? 'mb-4 pb-4' : 'mb-3 pb-3'} flex-row flex-wrap justify-between w-full items-center border-b border-gray-100`}
                    >
                    <View className='flex-row flex-wrap'>
                        <View className='rounded-xl w-10 justify-center items-center'>
                            <HeroSolid.ArrowDownTrayIcon size={22} color={'#1e40af'} />
                        </View>
                        <View className='pl-3'>
                            <Text className='font-sfregular text-f16'>Công nợ</Text>
                            <Text className={`text-gray-500 font-sfregular text-f13 ${Platform.OS == 'android' ? '-mt-1.5' : 'mt-1'}`}>225.435.678</Text>
                        </View>
                    </View>
                    <View className='flex-row flex-wrap items-center'>
                        <Text className='bg-gray-100 rounded-2xl px-2 py-2 text-f11'>0</Text>
                        <Text className='ml-2'>
                            <HeroSolid.ChevronRightIcon size={17} color={'#9ca3af'} />
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OrderNavigation