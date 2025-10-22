import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from 'react-native';
import * as HeroSolid from "react-native-heroicons/solid";

const UserNavigation = () => {
    const navigation = useNavigation();
    return (
        <View className='mt-4 px-4'>
            <Text className='uppercase font-medium text-f15'>Danh sách Khách hàng</Text>
            <View className='mt-3 px-3 pt-4' style={{
                backgroundColor: "white",
                borderRadius: 10,
                // paddingVertical: 16,
                // Shadow cho iOS
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.1,
                shadowRadius: 6,
                // Shadow cho Android
                elevation: 6,
                }}>
                <TouchableOpacity onPress={() => navigation.navigate('UserListStack')} className='mb-4 pb-4 flex-row flex-wrap justify-between w-full items-center border-b border-gray-200'>
                    <View className='flex-row flex-wrap'>
                        <View className='bg-blue-100 rounded-xl w-11 h-11 justify-center items-center'>
                            <HeroSolid.ShoppingCartIcon size={18} color={'#60a5fa'} />
                        </View>
                        <View className='pl-3'>
                            <Text className='font-nunitoBold font-medium'>Tất cả khách hàng</Text>
                            <Text className='text-blue-600 text-f13 mt-1'>586.727.343</Text>
                        </View>
                    </View>
                    <View className='flex-row flex-wrap items-center'>
                        <Text className='ml-2'>
                            <HeroSolid.ChevronRightIcon size={17} color={'#9ca3af'} />
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => (navigation.navigate('UserAllStack'))} className='mb-4 pb-4 flex-row flex-wrap justify-between w-full items-center border-b border-gray-200'>
                    <View className='flex-row flex-wrap'>
                        <View className='bg-green-100 rounded-xl w-11 h-11 justify-center items-center'>
                            <HeroSolid.CheckCircleIcon size={18} color={'#4ade80'} />
                        </View>
                        <View className='pl-3'>
                            <Text className='font-medium'>Tổng khách hàng</Text>
                            <Text className='text-green-600 text-f13 mt-1'>586.727.343</Text>
                        </View>
                    </View>
                    <View className='flex-row flex-wrap items-center'>
                        <Text className='ml-2'>
                            <HeroSolid.ChevronRightIcon size={17} color={'#9ca3af'} />
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => (navigation.navigate('UserNewStack'))} className='mb-4 pb-4 flex-row flex-wrap justify-between w-full items-center border-b border-gray-200'>
                    <View className='flex-row flex-wrap'>
                        <View className='bg-purple-100 rounded-xl w-11 h-11 justify-center items-center'>
                            <HeroSolid.CreditCardIcon size={18} color={'#c084fc'} />
                        </View>
                        <View className='pl-3'>
                            <Text className='font-medium'>Khách hàng mới</Text>
                            <Text className='text-purple-600 text-f13 mt-1'>586.727.343</Text>
                        </View>
                    </View>
                    <View className='flex-row flex-wrap items-center'>
                        <Text className='ml-2'>
                            <HeroSolid.ChevronRightIcon size={17} color={'#9ca3af'} />
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => (navigation.navigate('UnpaidOrdersStack'))} className='mb-4 pb-4 flex-row flex-wrap justify-between w-full items-center border-b border-gray-200'>
                    <View className='flex-row flex-wrap'>
                        <View className='bg-orange-100 rounded-xl w-11 h-11 justify-center items-center'>
                            <HeroSolid.ClockIcon size={18} color={'#fb923c'} />
                        </View>
                        <View className='pl-3'>
                            <Text className='font-medium'>Tỷ lệ mua hàng</Text>
                            <Text className='text-orange-600 text-f13 mt-1'>586.727.343</Text>
                        </View>
                    </View>
                    <View className='flex-row flex-wrap items-center'>
                        <Text className='ml-2'>
                            <HeroSolid.ChevronRightIcon size={17} color={'#9ca3af'} />
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default UserNavigation