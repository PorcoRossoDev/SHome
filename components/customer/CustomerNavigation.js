import { useNavigation } from "@react-navigation/native";
import { Platform, Text, TouchableOpacity, View } from 'react-native';
import * as HeroOutline from "react-native-heroicons/outline";

const CustomerNavigation = () => {
    const navigation = useNavigation();
    return (
        // <View className='mt-4 px-4'>
        //     <Text className='uppercase font-medium text-f15'>Danh sách Khách hàng</Text>
        //     <View className='mt-3 px-3 pt-4' style={{
        //         backgroundColor: "white",
        //         borderRadius: 10,
        //         // paddingVertical: 16,
        //         // Shadow cho iOS
        //         shadowColor: "#000",
        //         shadowOffset: { width: 0, height: 1 },
        //         shadowOpacity: 0.1,
        //         shadowRadius: 6,
        //         // Shadow cho Android
        //         elevation: 6,
        //         }}>
        //         <TouchableOpacity onPress={() => navigation.navigate('CustomerListStack')} className='mb-4 pb-4 flex-row flex-wrap justify-between w-full items-center border-b border-gray-200'>
        //             <View className='flex-row flex-wrap'>
        //                 <View className='bg-blue-100 rounded-xl w-11 h-11 justify-center items-center'>
        //                     <HeroOutline.ShoppingCartIcon size={18} color={'#60a5fa'} />
        //                 </View>
        //                 <View className='pl-3'>
        //                     <Text className='font-nunitoBold font-medium'>Tất cả khách hàng</Text>
        //                     <Text className='text-blue-600 text-f13 mt-1'>586.727.343</Text>
        //                 </View>
        //             </View>
        //             <View className='flex-row flex-wrap items-center'>
        //                 <Text className='ml-2'>
        //                     <HeroOutline.ChevronRightIcon size={17} color={'#9ca3af'} />
        //                 </Text>
        //             </View>
        //         </TouchableOpacity>
        //         <TouchableOpacity onPress={() => (navigation.navigate('CustomerAllStack'))} className='mb-4 pb-4 flex-row flex-wrap justify-between w-full items-center border-b border-gray-200'>
        //             <View className='flex-row flex-wrap'>
        //                 <View className='bg-green-100 rounded-xl w-11 h-11 justify-center items-center'>
        //                     <HeroOutline.CheckCircleIcon size={18} color={'#4ade80'} />
        //                 </View>
        //                 <View className='pl-3'>
        //                     <Text className='font-medium'>Tổng khách hàng</Text>
        //                     <Text className='text-green-600 text-f13 mt-1'>586.727.343</Text>
        //                 </View>
        //             </View>
        //             <View className='flex-row flex-wrap items-center'>
        //                 <Text className='ml-2'>
        //                     <HeroOutline.ChevronRightIcon size={17} color={'#9ca3af'} />
        //                 </Text>
        //             </View>
        //         </TouchableOpacity>
        //         <TouchableOpacity onPress={() => (navigation.navigate('CustomerNewStack'))} className='mb-4 pb-4 flex-row flex-wrap justify-between w-full items-center border-b border-gray-200'>
        //             <View className='flex-row flex-wrap'>
        //                 <View className='bg-purple-100 rounded-xl w-11 h-11 justify-center items-center'>
        //                     <HeroOutline.CreditCardIcon size={18} color={'#c084fc'} />
        //                 </View>
        //                 <View className='pl-3'>
        //                     <Text className='font-medium'>Khách hàng mới</Text>
        //                     <Text className='text-purple-600 text-f13 mt-1'>586.727.343</Text>
        //                 </View>
        //             </View>
        //             <View className='flex-row flex-wrap items-center'>
        //                 <Text className='ml-2'>
        //                     <HeroOutline.ChevronRightIcon size={17} color={'#9ca3af'} />
        //                 </Text>
        //             </View>
        //         </TouchableOpacity>
        //         <TouchableOpacity onPress={() => (navigation.navigate('UnpaidOrdersStack'))} className='mb-4 pb-4 flex-row flex-wrap justify-between w-full items-center border-b border-gray-200'>
        //             <View className='flex-row flex-wrap'>
        //                 <View className='bg-orange-100 rounded-xl w-11 h-11 justify-center items-center'>
        //                     <HeroOutline.ClockIcon size={18} color={'#fb923c'} />
        //                 </View>
        //                 <View className='pl-3'>
        //                     <Text className='font-medium'>Tỷ lệ mua hàng</Text>
        //                     <Text className='text-orange-600 text-f13 mt-1'>586.727.343</Text>
        //                 </View>
        //             </View>
        //             <View className='flex-row flex-wrap items-center'>
        //                 <Text className='ml-2'>
        //                     <HeroOutline.ChevronRightIcon size={17} color={'#9ca3af'} />
        //                 </Text>
        //             </View>
        //         </TouchableOpacity>
        //     </View>
        // </View>

        <View className='px-4'>
            <Text className='uppercase font-medium text-f15 font-nunito-bold'>Danh sách khách hàng</Text>
            <View className='mt-3 px-3 pt-4' 
                style={{
                    backgroundColor: "white",
                    borderRadius: 10,
                    // paddingVertical: 16,
                    // Shadow cho iOS
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.1,
                    shadowRadius: 6,
                    // Shadow cho Android
                    elevation: 6,
                }}
                >
                <TouchableOpacity 
                    onPress={() =>
                        navigation.navigate('Customer', {
                        screen: 'CustomerListStack',
                        })
                    }
                    className={`${Platform.OS == "ios" ? 'mb-4 pb-4' : 'mb-3 pb-3'} flex-row flex-wrap justify-between w-full items-center border-b border-gray-100`}
                    >
                    <View className='flex-row flex-wrap items-center justify-center'>
                        <View className='rounded-xl h-10 w-10 bg-blue-100 justify-center items-center'>
                            <HeroOutline.ShoppingCartIcon size={20} color={'#2563eb'} />
                        </View>
                        <View className='pl-3'>
                            <Text className='font-sfregular text-f15'>Tất cả khách hàng</Text>
                            <Text className={`text-gray-500 font-sfregular text-f13 ${Platform.OS == 'android' ? '-mt-1.5' : 'mt-1'}`}>225.435.678</Text>
                        </View>
                    </View>
                    <View className='flex-row flex-wrap items-center'>
                        <Text className='bg-gray-100 rounded-2xl px-2 py-2 text-f11'>117</Text>
                        <Text className='ml-2'>
                            <HeroOutline.ChevronRightIcon size={17} color={'#9ca3af'} />
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() =>
                        navigation.navigate('Customer', {
                        screen: 'CustomerAllStack',
                        })
                    }
                    className={`${Platform.OS == "ios" ? 'mb-4 pb-4' : 'mb-3 pb-3'} flex-row flex-wrap justify-between w-full items-center border-b border-gray-100`}
                    >
                    <View className='flex-row flex-wrap'>
                        <View className='rounded-xl h-10 w-10 bg-green-100 justify-center items-center'>
                            <HeroOutline.CheckCircleIcon size={22} color={'#16a34a'} />
                        </View>
                        <View className='pl-3'>
                            <Text className='font-sfregular text-f15'>Tổng khách hàng</Text>
                            <Text className={`text-gray-500 font-sfregular text-f13 ${Platform.OS == 'android' ? '-mt-1.5' : 'mt-1'}`}>225.435.678</Text>
                        </View>
                    </View>
                    <View className='flex-row flex-wrap items-center'>
                        <Text className='bg-gray-100 rounded-2xl px-2 py-2 text-f11'>90</Text>
                        <Text className='ml-2'>
                            <HeroOutline.ChevronRightIcon size={17} color={'#9ca3af'} />
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() =>
                        navigation.navigate('Customer', {
                        screen: 'CustomerAllStack',
                        })
                    }
                    className={`${Platform.OS == "ios" ? 'mb-4 pb-4' : 'mb-3 pb-3'} flex-row flex-wrap justify-between w-full items-center border-b border-gray-100`}
                    >
                    <View className='flex-row flex-wrap'>
                        <View className='rounded-xl h-10 w-10 bg-purple-100 justify-center items-center'>
                            <HeroOutline.CreditCardIcon size={20} color={'#9333ea'} />
                        </View>
                        <View className='pl-3'>
                            <Text className='font-sfregular text-f15'>Khách hàng mới</Text>
                            <Text className={`text-gray-500 font-sfregular text-f13 ${Platform.OS == 'android' ? '-mt-1.5' : 'mt-1'}`}>225.435.678</Text>
                        </View>
                    </View>
                    <View className='flex-row flex-wrap items-center'>
                        <Text className='bg-gray-100 rounded-2xl px-2 py-2 text-f11'>88</Text>
                        <Text className='ml-2'>
                            <HeroOutline.ChevronRightIcon size={17} color={'#9ca3af'} />
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
                        <View className='rounded-xl h-10 w-10 bg-red-100 justify-center items-center'>
                            <HeroOutline.TruckIcon size={22} color={'#dc2626'} />
                        </View>
                        <View className='pl-3'>
                            <Text className='font-sfregular text-f15'>Tỷ lệ mua</Text>
                            <Text className={`text-gray-500 font-sfregular text-f13 ${Platform.OS == 'android' ? '-mt-1.5' : 'mt-1'}`}>225.435.678</Text>
                        </View>
                    </View>
                    <View className='flex-row flex-wrap items-center'>
                        <Text className='bg-gray-100 rounded-2xl px-2 py-2 text-f11'>17</Text>
                        <Text className='ml-2'>
                            <HeroOutline.ChevronRightIcon size={17} color={'#9ca3af'} />
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CustomerNavigation