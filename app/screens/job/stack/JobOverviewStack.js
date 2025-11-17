import { FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import * as HeroOutline from "react-native-heroicons/outline";
import BarChartJob from '../../../../components/order/BarChartJob';


const JobOverviewStack = ({ navigation }) => {

  const goOrderCancelled = () => {
    navigation.navigate('OrderCancelledStack')
  }

  const menu = [
    {
      id: "1",
      title: "Tổng công việc",
      value: "225.435.678 ₫",
      count: 117,
      color: "bg-blue-500",
      icon: HeroOutline.ShoppingCartIcon,
      navigation: 'JobListStack'
    },
    {
      id: "2",
      title: "Công việc mới",
      value: "225.435.678 ₫",
      count: 90,
      color: "bg-green-500",
      icon: HeroOutline.CheckCircleIcon,
      navigation: 'JobListStack'
    },
    {
      id: "3",
      title: "Công việc đã hoàn thành",
      value: "225.435.678 ₫",
      count: 88,
      color: "bg-purple-500",
      icon: HeroOutline.CreditCardIcon,
      navigation: 'JobListStack'
    },
    {
      id: "4",
      title: "Công việc chưa hoàn thành",
      value: "225.435.678 ₫",
      count: 21,
      color: "bg-yellow-400",
      icon: HeroOutline.ClockIcon,
      navigation: 'JobListStack'
    },
    {
      id: "5",
      title: "Công việc quá hạn",
      value: "225.435.678 ₫",
      count: 17,
      color: "bg-sky-400",
      icon: HeroOutline.TruckIcon,
      navigation: 'JobListStack'
    },
  ];

  const NavigationJob = () => {
    return(
        <View className="px-5 pt-0">
            <Text className="text-xl font-sfmedium text-gray-800 mb-4">
            Báo cáo kỹ thuật theo phân loại
            </Text>
    
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
    )
  }

  return (
    <ScrollView>
      <View className='bg-gray-100'>

        {/* Tạo đơn hàng */}
        <View className='justify-center bg-gray-100 items-center'>
            <View className='w-[85%] py-10 mt-10 justify-center items-center bg-white rounded-t-2xl'>
            <TouchableOpacity onPress={() => navigation.navigate('JobAddStack')} className='justify-center text-center'>
                <View className='justify-center items-center'>
                <View className='w-[50px] h-[50px] justify-center items-center bg-blue-600 rounded-full'>
                    <HeroOutline.PlusIcon size={25} color={'white'} />
                </View>
                </View>
                <Text className='text-f16 mt-4 font-sfmedium'>Tạo công việc</Text>
            </TouchableOpacity>
            </View>
        </View>

        <View className='bg-gray-100 pb-6'>

          {/* Biểu đồ */}
          <View className='pt-5 mb-7 px-4 bg-white pb-6'>
            <BarChartJob />
          </View>

          {/* Danh sách đơn hàng */}
          <NavigationJob />
        </View>

        {/* Đơn hàng */}
        <View className='bg-white flex-1 w-full px-4 mb-6'>
          <TouchableOpacity onPress={() => navigation.navigate('JobPenddingStack')} className='flex-row justify-between items-center py-4 border-b border-gray-100'>
            <View className='flex-row items-center'>
              <HeroOutline.ClipboardDocumentListIcon size={30} color={'#6b7280'} />
              <Text className='pl-3 font-sfregular text-f15'>Công việc cần xử ý</Text>
            </View>
            <View className='flex-row flex-wrap items-center'>
                <Text className='text-f12'>219</Text>
                <Text className='ml-2'>
                    <HeroOutline.ChevronRightIcon size={17} color={'#9ca3af'} />
                </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('JobCancelledStack')} className='flex-row justify-between items-center py-4 border-b border-gray-100'>
            <View className='flex-row items-center'>
              <HeroOutline.ClipboardDocumentCheckIcon size={30} color={'#6b7280'} />
              <Text className='pl-3 font-sfregular text-f15'>Công việc quá hạn</Text>
            </View>
            <View className='flex-row flex-wrap items-center'>
                <Text className='text-f12'>0</Text>
                <Text className='ml-2'>
                    <HeroOutline.ChevronRightIcon size={17} color={'#9ca3af'} />
                </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('JobCancelledStack')} className='flex-row justify-between items-center py-4 border-b border-gray-100'>
            <View className='flex-row items-center'>
              <HeroOutline.ReceiptRefundIcon size={30} color={'#6b7280'} />
              <Text className='pl-3 font-sfregular text-f16'>Công việc huỷ</Text>
            </View>
            <View className='flex-row flex-wrap items-center'>
                <Text className='text-f12'>50</Text>
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

export default JobOverviewStack;
