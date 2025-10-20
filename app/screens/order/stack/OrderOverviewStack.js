import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import * as HeroSolid from "react-native-heroicons/solid";
import OrderNavigation from '../../../../components/home/OrderNavigation';
import BarChartOrder from '../../../../components/order/BarChartOrder';

const OrderOverviewStack = ({ navigation }) => {

  const goOrderCancelled = () => {
    navigation.navigate('OrderCancelledStack')
  }

  return (
    <ScrollView>
      <View className='justify-center items-center bg-gray-200'>

        {/* Tạo đơn hàng */}
        <View className='w-[85%] py-10 mt-10 justify-center items-center bg-white rounded-t-2xl'>
          <TouchableOpacity onPress={() => navigation.navigate('OrderAddStack')} className='justify-center text-center'>
            <View className='justify-center items-center'>
              <View className='w-[50px] h-[50px] justify-center items-center bg-blue-600 rounded-full'>
                <HeroSolid.PlusIcon size={25} color={'white'} />
              </View>
            </View>
            <Text className='text-f16 mt-4 font-medium'>Tạo đơn hàng</Text>
          </TouchableOpacity>
        </View>

        <View className='bg-white pb-6'>

          {/* Biểu đồ */}
          <View className='pt-5 mb-7 px-4'>
            <BarChartOrder />
          </View>

          {/* Danh sách đơn hàng */}
          <OrderNavigation />
        </View>

        {/* Đơn hàng */}
        <View className='bg-white mt-7 flex-1 w-full px-4 mb-6'>
          <TouchableOpacity onPress={() => navigation.navigate('OrderPenddingStack')} className='flex-row justify-between items-center py-4 border-b border-gray-100'>
            <View className='flex-row items-center'>
              <HeroSolid.ClipboardDocumentListIcon size={30} color={'#6b7280'} />
              <Text className='pl-3'>Đơn hàng cần xử ý</Text>
            </View>
            <View className='flex-row flex-wrap items-center'>
                <Text className='text-f12'>219</Text>
                <Text className='ml-2'>
                    <HeroSolid.ChevronRightIcon size={17} color={'#9ca3af'} />
                </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('OrderCancelledStack')} className='flex-row justify-between items-center py-4 border-b border-gray-100'>
            <View className='flex-row items-center'>
              <HeroSolid.ClipboardDocumentCheckIcon size={30} color={'#6b7280'} />
              <Text className='pl-3'>Đơn hàng huỷ</Text>
            </View>
            <View className='flex-row flex-wrap items-center'>
                <Text className='text-f12'>0</Text>
                <Text className='ml-2'>
                    <HeroSolid.ChevronRightIcon size={17} color={'#9ca3af'} />
                </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className='flex-row justify-between items-center py-4 border-b border-gray-100'>
            <View className='flex-row items-center'>
              <HeroSolid.ReceiptRefundIcon size={30} color={'#6b7280'} />
              <Text className='pl-3'>Phiếu trả hàng</Text>
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

export default OrderOverviewStack;
