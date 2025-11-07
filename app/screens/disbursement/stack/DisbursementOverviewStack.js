import { useNavigation } from '@react-navigation/native';
import { Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import * as HeroOutline from "react-native-heroicons/outline";
import DisbursementLineChart from '../../../../components/disbursement/DisbursementLineChart';


const DisbursementOverview = () => {
    const navigation = useNavigation()
    return (
        <ScrollView>
            <View className='justify-center items-center bg-gray-200'>

                {/* Tạo đơn hàng */}
                <View className='w-[85%] py-10 mt-10 justify-center items-center bg-white rounded-t-2xl'>
                    <TouchableOpacity onPress={() => navigation.navigate('OrderAddStack')} className='justify-center text-center'>
                        <View className='justify-center items-center'>
                            <View className='w-[50px] h-[50px] justify-center items-center bg-blue-600 rounded-full'>
                                <HeroOutline.PlusIcon size={25} color={'white'} />
                            </View>
                        </View>
                        <Text className='text-f16 mt-4 font-sfmedium'>Tạo phiếu chi</Text>
                    </TouchableOpacity>
                </View>

                <View className='bg-white pb-6'>
                    <View className='w-full px-5'>
                        {/* Biểu đồ */}
                        <View className='pt-8 mb-7'>
                            <DisbursementLineChart />
                        </View>

                        <View className='mt-6'>
                            <Text className='text-f16 font-sfmedium text-center'>Ngân sách với Thực tế</Text>
                            <View className='mt-5'>
                                <View className='flex-row justify-between items-center'>
                                    <Text className='text-f15 font-sfregular text-gray-700'>Ngân sách được duyệt</Text>
                                    <Text className='text-f15 font-sfmedium'>7.987.855</Text>
                                </View>
                                <View className='flex-row justify-between items-center mt-3'>
                                    <Text className='text-f15 font-sfregular text-gray-700'>Tổng đã đạt chi tiêu</Text>
                                    <Text className='text-f15 font-sfbold text-red-600'>7.987.855</Text>
                                </View>
                                <View className='flex-row justify-between items-center mt-3'>
                                    <Text className='text-f15 font-sfregular text-gray-700'>Ngân sách được duyệt còn lại</Text>
                                    <Text className='text-f15 font-sfbold text-red-600'>7.987.855</Text>
                                </View>
                                <View className='h-1 bg-red-400 mt-3 rounded-3xl'></View>
                                <View className='mt-3 justify-center items-center'>
                                    <Text className='text-f13 text-center font-sfregular text-gray-700'>
                                        75% ngân sách đã được sử dụng
                                        <Text className='font-sfbold text-red-600'> (Vượt quá 1045%)</Text>
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <View className='mt-10'>
                            <Text className='uppercase text-f14 font-sfregular'>Danh sách phiếu chi</Text>
                            <View className='mt-3 px-3 pt-4'
                                style={{
                                    backgroundColor: '#fff',
                                    borderRadius: 10,
                                    // paddingVertical: 15,
                                    // iOS
                                    shadowColor: '#0e3f7e',           // màu gần giống web
                                    shadowOffset: { width: 0, height: 4 },
                                    shadowOpacity: 0.1,
                                    shadowRadius: 10,
                                    // Android
                                    elevation: 2,
                                }}
                                >
                                <TouchableOpacity 
                                    onPress={() =>
                                        navigation.navigate('Disbursement', {
                                        screen: 'DisbursementListStack',
                                        })
                                    }
                                    className={`${Platform.OS == "ios" ? 'mb-4 pb-4' : 'mb-3 pb-3'} flex-row flex-wrap justify-between w-full items-center border-b border-gray-100`}
                                    >
                                    <View className='flex-row flex-wrap items-center justify-center'>
                                        <View className='rounded-xl h-10 w-10 bg-blue-100 justify-center items-center'>
                                            <HeroOutline.ShoppingCartIcon size={20} color={'#2563eb'} />
                                        </View>
                                        <View className='pl-3'>
                                            <Text className='font-sfregular text-f15'>Tổng phiếu chi</Text>
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
                                        navigation.navigate('Order', {
                                        screen: 'OrderSuccessStack',
                                        })
                                    }
                                    className={`${Platform.OS == "ios" ? 'mb-4 pb-4' : 'mb-3 pb-3'} flex-row flex-wrap justify-between w-full items-center border-b border-gray-100`}
                                    >
                                    <View className='flex-row flex-wrap'>
                                        <View className='rounded-xl h-10 w-10 bg-green-100 justify-center items-center'>
                                            <HeroOutline.CheckCircleIcon size={22} color={'#16a34a'} />
                                        </View>
                                        <View className='pl-3'>
                                            <Text className='font-sfregular text-f15'>Tiền thực thu</Text>
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
                                        navigation.navigate('Order', {
                                        screen: 'OrderPaymentSuccessStack',
                                        })
                                    }
                                    className={`${Platform.OS == "ios" ? 'mb-4 pb-4' : 'mb-3 pb-3'} flex-row flex-wrap justify-between w-full items-center border-b border-gray-100`}
                                    >
                                    <View className='flex-row flex-wrap'>
                                        <View className='rounded-xl h-10 w-10 bg-purple-100 justify-center items-center'>
                                            <HeroOutline.CreditCardIcon size={20} color={'#9333ea'} />
                                        </View>
                                        <View className='pl-3'>
                                            <Text className='font-sfregular text-f15'>Ngân sách được duyệt</Text>
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
                                        <View className='rounded-xl h-10 w-10 bg-blue-100 justify-center items-center'>
                                            <HeroOutline.ClockIcon size={20} color={'#2563eb'} />
                                        </View>
                                        <View className='pl-3'>
                                            <Text className='font-sfregular text-f15'>Đã chi tiêu</Text>
                                            <Text className={`text-gray-500 font-sfregular text-f13 ${Platform.OS == 'android' ? '-mt-1.5' : 'mt-1'}`}>225.435.678</Text>
                                        </View>
                                    </View>
                                    <View className='flex-row flex-wrap items-center'>
                                        <Text className='bg-gray-100 rounded-2xl px-2 py-2 text-f11'>21</Text>
                                        <Text className='ml-2'>
                                            <HeroOutline.ChevronRightIcon size={17} color={'#9ca3af'} />
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    className={`${Platform.OS == "ios" ? 'mb-4 pb-4' : 'mb-3 pb-3'} flex-row flex-wrap justify-between w-full items-center border-b border-gray-100`}
                                    >
                                    <View className='flex-row flex-wrap'>
                                        <View className='rounded-xl h-10 w-10 bg-red-100 justify-center items-center'>
                                            <HeroOutline.TruckIcon size={22} color={'#dc2626'} />
                                        </View>
                                        <View className='pl-3'>
                                            <Text className='font-sfregular text-f15'>Đợi duyệt</Text>
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

                    </View>
                </View>

                {/* Đơn hàng */}
                <View className='bg-white mt-7 flex-1 w-full px-4 mb-6'>
                    <TouchableOpacity onPress={() => navigation.navigate('DisbursementPenddingStack')} className='flex-row justify-between items-center py-4 border-b border-gray-100'>
                        <View className='flex-row items-center'>
                            <HeroOutline.ClipboardDocumentListIcon size={27} color={'#6b7280'} />
                            <Text className='pl-3 font-sfregular text-f15'>Phiếu chi cần xử lý</Text>
                        </View>
                        <View className='flex-row flex-wrap items-center'>
                            <Text className='text-f12'>219</Text>
                            <Text className='ml-2'>
                                <HeroOutline.ChevronRightIcon size={17} color={'#9ca3af'} />
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('DisbursemenCanclledStack')} className='flex-row justify-between items-center py-4 border-b border-gray-100'>
                        <View className='flex-row items-center'>
                            <HeroOutline.ClipboardDocumentCheckIcon size={27} color={'#6b7280'} />
                            <Text className='pl-3 font-sfregular text-f15'>Phiếu chi đã huỷ</Text>
                        </View>
                        <View className='flex-row flex-wrap items-center'>
                            <Text className='text-f12'>0</Text>
                            <Text className='ml-2'>
                                <HeroOutline.ChevronRightIcon size={17} color={'#9ca3af'} />
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    );
};

export default DisbursementOverview;
