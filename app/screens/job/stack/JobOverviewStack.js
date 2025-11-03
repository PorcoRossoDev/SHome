import { Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import * as HeroSolid from "react-native-heroicons/solid";
import BarChartJob from '../../../../components/order/BarChartJob';

const JobOverviewStack = ({ navigation }) => {

  const goOrderCancelled = () => {
    navigation.navigate('OrderCancelledStack')
  }
r
  return (
    <ScrollView>
      <View className='justify-center items-center bg-gray-200'>

        {/* Tạo đơn hàng */}
        <View className='w-[85%] py-10 mt-10 justify-center items-center bg-white rounded-t-2xl'>
          <TouchableOpacity onPress={() => navigation.navigate('JobAddStack')} className='justify-center text-center'>
            <View className='justify-center items-center'>
              <View className='w-[50px] h-[50px] justify-center items-center bg-blue-600 rounded-full'>
                <HeroSolid.PlusIcon size={25} color={'white'} />
              </View>
            </View>
            <Text className='text-f16 mt-4 font-sfmedium'>Tạo công việc</Text>
          </TouchableOpacity>
        </View>

        <View className='bg-white pb-6'>

          {/* Biểu đồ */}
          <View className='pt-5 mb-7 px-4'>
            <BarChartJob />
          </View>

          {/* Danh sách đơn hàng */}
          <View className='px-4 mt-2'>
            <Text className='uppercase text-f14 font-sfregular'>Báo cáo kỹ thuật theo phân loại</Text>
            <View className='mt-4 px-3 pt-4' 
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
                        navigation.navigate('Job', {
                        screen: 'JobListStack',
                        })
                    }
                    className={`${Platform.OS == "ios" ? 'mb-4 pb-4' : 'mb-3 pb-3'} flex-row flex-wrap justify-between w-full items-center border-b border-gray-100`}
                    >
                    <View className='flex-row flex-wrap items-center justify-center'>
                        <View className='rounded-xl w-10 h-10 bg-blue-100 justify-center items-center'>
                            <HeroSolid.CheckBadgeIcon size={20} color={'#2563eb'} />
                        </View>
                        <View className='pl-3'>
                            <Text className='font-sfregular text-f16'>Tổng công việc</Text>
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
                        <View className='rounded-xl w-10 h-10 bg-green-100 justify-center items-center'>
                            <HeroSolid.CheckIcon size={20} color={'#16a34a'} />
                        </View>
                        <View className='pl-3'>
                            <Text className='font-sfregular text-f16'>Công việc mới</Text>
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
                        <View className='rounded-xl w-10 h-10 bg-yellow-100 justify-center items-center'>
                            <HeroSolid.ClockIcon size={20} color={'#ca8a04'} />
                        </View>
                        <View className='pl-3'>
                            <Text className='font-sfregular text-f16'>Công việc đã hoàn thành</Text>
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
                        screen: 'OrderPaymentSuccessStack',
                        })
                    }
                    className={`${Platform.OS == "ios" ? 'mb-4 pb-4' : 'mb-3 pb-3'} flex-row flex-wrap justify-between w-full items-center border-b border-gray-100`}
                    >
                    <View className='flex-row flex-wrap'>
                        <View className='rounded-xl w-10 h-10 bg-red-100 justify-center items-center'>
                            <HeroSolid.ExclamationTriangleIcon size={20} color={'#dc2626'} />
                        </View>
                        <View className='pl-3'>
                            <Text className='font-sfregular text-f16'>Công việc chưa hoàn thành</Text>
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
                        <View className='rounded-xl w-10 h-10 bg-purple-100 justify-center items-center'>
                            <HeroSolid.ClockIcon size={20} color={'#9333ea'} />
                        </View>
                        <View className='pl-3'>
                            <Text className='font-sfregular text-f16'>Công việc quá hạn</Text>
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
            </View>
          </View>
        </View>

        {/* Đơn hàng */}
        <View className='bg-white mt-7 flex-1 w-full px-4 mb-6'>
          <TouchableOpacity onPress={() => navigation.navigate('JobPenddingStack')} className='flex-row justify-between items-center py-4 border-b border-gray-100'>
            <View className='flex-row items-center'>
              <HeroSolid.ClipboardDocumentListIcon size={30} color={'#6b7280'} />
              <Text className='pl-3 font-sfregular text-f15'>Công việc cần xử ý</Text>
            </View>
            <View className='flex-row flex-wrap items-center'>
                <Text className='text-f12'>219</Text>
                <Text className='ml-2'>
                    <HeroSolid.ChevronRightIcon size={17} color={'#9ca3af'} />
                </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('JobCancelledStack')} className='flex-row justify-between items-center py-4 border-b border-gray-100'>
            <View className='flex-row items-center'>
              <HeroSolid.ClipboardDocumentCheckIcon size={30} color={'#6b7280'} />
              <Text className='pl-3 font-sfregular text-f15'>Công việc quá hạn</Text>
            </View>
            <View className='flex-row flex-wrap items-center'>
                <Text className='text-f12'>0</Text>
                <Text className='ml-2'>
                    <HeroSolid.ChevronRightIcon size={17} color={'#9ca3af'} />
                </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('JobCancelledStack')} className='flex-row justify-between items-center py-4 border-b border-gray-100'>
            <View className='flex-row items-center'>
              <HeroSolid.ReceiptRefundIcon size={30} color={'#6b7280'} />
              <Text className='pl-3 font-sfregular text-f16'>Công việc huỷ</Text>
            </View>
            <View className='flex-row flex-wrap items-center'>
                <Text className='text-f12'>50</Text>
                <Text className='ml-2'>
                    <HeroSolid.ChevronRightIcon size={17} color={'#9ca3af'} />
                </Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
};

export default JobOverviewStack;
