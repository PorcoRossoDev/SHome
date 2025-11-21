import { Pressable, ScrollView, Text, View } from 'react-native';
import * as HeroSolid from "react-native-heroicons/solid";

// Hàm format tiền
const money = (v) => v.toLocaleString("vi-VN");

export default function OrderAddStack() {
  
  const order = {
    id: '#201125-127',
    statusLabel: 'Chưa thanh toán',
    customer: {
      name: 'Trần Triệu Luân',
      phone: '0353696226',
      address: 'Củ Chi',
    },
    amount: 699000,
    history: [
      { time: '10:28 20/11/2025', note: 'Nhận đơn bởi Võ Ngọc Trúc' },
    ],
    orderInfo: {
      createdAt: '10:21 20/11/2025',
      due: '20/11/2025',
      handler: 'Võ Ngọc Trúc',
      paymentNotes:
        'SD TK 0931004203198 +699,000VND lúc 20-11-2025 10:26:1. Ref 020097048811201026172056gf3661232...',
    },
  };

  return (
    <ScrollView className="px-4 bg-white">

      {/* Order ID */}
      <View className="flex-row items-center justify-between mt-7 mb-4">
        <Text className="text-[20px] font-sfbold text-black">{order.id}</Text>

        <View className="bg-[#fff0ea] px-3 py-1 rounded-md">
          <Text className="text-[#d35400] font-medium">{order.statusLabel}</Text>
        </View>
      </View>

      {/* Buttons */}
      <View className="flex-row gap-x-3 mb-4">
        <Pressable className="bg-blue-600 px-4 py-3 rounded-lg flex-row items-center">
          <Text className="text-white font-sfregular text-f15">
            <View className='translate-y-1 pr-1'>
              <HeroSolid.PrinterIcon size='14' color='#fff' />
            </View>
            In đơn hàng
          </Text>
        </Pressable>

        <Pressable className="bg-blue-600 px-4 py-3 rounded-lg flex-row items-center">
          <Text className="text-white font-sfregular text-f15">
            <View className='translate-y-1 pr-1'>
              <HeroSolid.TruckIcon size='17' color='#fff' />
            </View>
            Đã giao hàng
          </Text>
        </Pressable>
      </View>

      {/* Customer info */}
      <View className="bg-white shadow rounded-lg p-4 mb-4 border border-gray-100">
        <Text className="text-f18 font-sfbold mb-2">Thông tin khách hàng</Text>

        <View>
          <Text className='font-sfmedium text-blue-600 text-f15'>
            Dũng - 0909898787 <Text className='translate-y-1'><HeroSolid.PencilSquareIcon size='17' color='#000' /></Text>
          </Text>
        </View>

        <View className='mt-1 flex-row'>
          <Text className='w-2/5 font-sfregular text-f15'>Số điện thoại: </Text>
          <Text className='flex-1 font-sfregular text-f15'>0902210689</Text>
        </View>

        <View className='mt-1 flex-row'>
          <Text className='w-2/5 font-sfregular text-f15'>Địa chỉ giao hàng: </Text>
          <Text className='flex-1 font-sfregular text-f15'>Ngõ 6 số nhà 26 phường Cao Xanh Hạ Long Quảng Ninh</Text>
        </View>

        <View className='border-t border-gray-200 mt-4 pt-3'>
          <View className='mt-1 flex-row justify-between'>
            <Text className='font-sfregular text-f15'>Tổng SL đơn hàng</Text>
            <Text className='font-sfregular text-f15'>1</Text>
          </View>
          <View className='mt-1 flex-row justify-between'>
            <Text className='font-sfregular text-f15'>Ngày cuối cùng mua hàng</Text>
            <Text className='font-sfregular text-f15'>14:00 12/11/2025</Text>
          </View>
          <View className='mt-1 flex-row justify-between'>
            <Text className='font-sfregular text-f15'>Công nợ hiện tại</Text>
            <Text className='font-sfbold text-red-600 text-f15'>2.565.000 đ</Text>
          </View>
        </View>
      </View>

      {/* Payment */}
      <View className="bg-white shadow rounded-lg p-4 mb-4 border border-gray-100">
        

        <View className="">
          <Text className="text-f18 font-sfbold mb-3">Đơn hàng chờ thanh toán</Text>

          <View className='items-start'>
            <View className="bg-red-600 px-4 py-2 rounded-lg mb-4">
              <View className="flex-row items-center">
                <HeroSolid.CurrencyDollarIcon size={20} color="#fff" />
                <Text className="text-white font-sfregular text-f15 ml-1">Xuất VAT</Text>
              </View>
            </View>
          </View>

        </View>


        <View className="space-y-2">
          <View className="flex-row justify-between">
            <Text className="text-lg font-medium">Khách phải trả:</Text>
            <Text className="text-lg font-bold text-red-600">
              {money(order.amount)} đ
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-lg">Đã thanh toán:</Text>
            <Text className="text-lg font-medium">0</Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-lg">Còn phải trả:</Text>
            <Text className="text-lg font-bold text-red-600">
              {money(order.amount)} đ
            </Text>
          </View>
        </View>
      </View>

      {/* History */}
      <View className="bg-white shadow rounded-lg p-4 mb-4 border border-gray-100">
        <Text className="text-2xl font-bold mb-3">Lịch sử trạng thái</Text>

        {order.history.map((h, i) => (
          <View key={i} className="flex-row items-start mb-3">
            <View className="w-3">
              <View className="w-2 h-2 bg-blue-600 rounded-full mt-1" />
            </View>

            <View className="flex-1">
              <Text className="text-base font-medium">{h.time}</Text>
              <Text className="text-gray-700 mt-1">{h.note}</Text>
            </View>
          </View>
        ))}

        <Pressable>
          <Text className="text-blue-600">Xem thêm</Text>
        </Pressable>
      </View>

      {/* Order Info */}
      <View className="bg-white shadow rounded-lg p-4 mb-10 border border-gray-100">
        <Text className="text-2xl font-bold mb-3">Thông tin đơn hàng</Text>

        <Text className="text-base mb-2">
          Ngày tạo: {order.orderInfo.createdAt}
        </Text>
        <Text className="text-base mb-2">Hẹn giao: {order.orderInfo.due}</Text>
        <Text className="text-base mb-2">
          Xử lý bởi: {order.orderInfo.handler}
        </Text>

        <View className="mt-3 p-3 rounded-md bg-green-50 border border-green-100">
          <Text className="text-sm text-gray-800">
            {order.orderInfo.paymentNotes}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
