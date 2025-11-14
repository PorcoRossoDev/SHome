import { useNavigation } from '@react-navigation/native';
import { FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import * as HeroOutline from "react-native-heroicons/outline";
import DisbursementLineChart from '../../../../components/disbursement/DisbursementLineChart';


const DisbursementOverview = () => {
    const navigation = useNavigation()
    const menu = [
      {
        id: "1",
        title: "Tổng đơn hàng",
        value: "225.435.678 ₫",
        count: 117,
        color: "bg-blue-500",
        icon: HeroOutline.ShoppingCartIcon,
        navigation: 'DisbursementListStack'
      },
      {
        id: "2",
        title: "Hoàn thành",
        value: "225.435.678 ₫",
        count: 90,
        color: "bg-green-500",
        icon: HeroOutline.CheckCircleIcon,
        navigation: 'DisbursementListStack'
      },
      {
        id: "3",
        title: "Đã thanh toán",
        value: "225.435.678 ₫",
        count: 88,
        color: "bg-purple-500",
        icon: HeroOutline.CreditCardIcon,
        navigation: 'DisbursementListStack'
      },
      {
        id: "4",
        title: "Chưa thanh toán",
        value: "225.435.678 ₫",
        count: 21,
        color: "bg-yellow-400",
        icon: HeroOutline.ClockIcon,
        navigation: 'DisbursementListStack'
      },
      {
        id: "5",
        title: "Hẹn giao",
        value: "225.435.678 ₫",
        count: 17,
        color: "bg-sky-400",
        icon: HeroOutline.TruckIcon,
        navigation: 'DisbursementListStack'
      },
      {
        id: "6",
        title: "Công nợ",
        value: "225.435.678 ₫",
        count: 0,
        color: "bg-red-400",
        icon: HeroOutline.ArrowDownCircleIcon,
        navigation: 'DisbursementListStack'
      },
    ];
    return (
        <ScrollView className='bg-gray-100'>
            <View className=''>

                {/* Tạo đơn hàng */}
                <View className='justify-center items-center'>
                    <View className='w-[85%] py-10 mt-10 justify-center items-center bg-white rounded-t-2xl'>
                        <TouchableOpacity onPress={() => navigation.navigate('DisbursementAddStack')} className='justify-center text-center'>
                            <View className='justify-center items-center'>
                                <View className='w-[50px] h-[50px] justify-center items-center bg-blue-600 rounded-full'>
                                    <HeroOutline.PlusIcon size={25} color={'white'} />
                                </View>
                            </View>
                            <Text className='text-f16 mt-4 font-sfmedium'>Tạo phiếu chi</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View className=''>
                    {/* Biểu đồ */}
                    <View className='w-full px-5 pb-7 bg-white'>
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
                    </View>

                    <View className='mt-7 px-5'>
                        <Text className='uppercase text-f15 font-sfmedium mb-4'>Danh sách phiếu chi</Text>
                        <FlatList
                        scrollEnabled={false}
                        data={menu}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item }) => {
                            const Icon = item.icon;
                            return (
                            <TouchableOpacity
                                activeOpacity={0.9}
                                className="mb-3"
                                onPress={()=>navigation.navigate(item.navigation)}
                            >
                                <View
                                className="flex-row items-center bg-white p-4 rounded-3xl"
                                style={{
                                    shadowColor: "#000",
                                    shadowOffset: { width: 0, height: 8 },
                                    shadowOpacity: 0.03,
                                    shadowRadius: 12,
                                    elevation: 1,
                                }}
                                >
                                {/* Icon */}
                                <View
                                    className={`w-12 h-12 rounded-full ${item.color} items-center justify-center mr-4`}
                                >
                                    <Icon size={22} color="white" strokeWidth={2} />
                                </View>
                
                                {/* Text */}
                                <View className="flex-1">
                                    <Text className="text-lg font-sfmedium text-gray-800">
                                    {item.title}
                                    </Text>
                                    <Text className="text-gray-500">{item.value}</Text>
                                </View>
                
                                {/* Badge */}
                                <View
                                    className={`px-3 py-1 rounded-full ${item.color} bg-opacity-20`}
                                >
                                    <Text className="text-white text-sm font-sfmedium">
                                    {item.count}
                                    </Text>
                                </View>
                                </View>
                            </TouchableOpacity>
                            );
                        }}
                        />
                    </View>
                </View>

                {/* Đơn hàng */}
                <View className='bg-white mt-5 flex-1 w-full px-4 mb-6'>
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
