import { Text, View } from 'react-native';

const OrderItemPendding = () => {
    return (
        <View className='mb-4 pb-4 border-b border-gray-200 flex-row justify-between'>
            <View className='flex-col justify-between gap-y-1'>
                <Text className='font-nunitoBold font-bold text-f17'>230925-128</Text>
                <Text className='font-nunitoBold font-medium text-gray-500 text-f14'>Chị Trang</Text>
                <Text className='font-nunitoBold font-medium text-gray-500 text-f14'>15:18 23/09/2025</Text>
                <Text className='font-nunitoBold font-medium text-blue-600 text-f14'>0989098987</Text>
            </View>
            <View className='flex-col justify-between items-center my-1'>
                <View className='justify-center flex-col items-center'>
                    <Text className='mt-1 text-f13 text-red-600'>00:00 31/08/2025</Text>
                    <Text className='font-nunitoBold text-red-600 bg-red-100 border border-red-300 mt-1 px-2 py-1 text-f13'>Quá hạn 25 ngày</Text>
                </View>
            </View>
            <View className='flex-col items-end gap-y-1'>
                <Text className='text-f15 font-bold'>230.709 đ</Text>
                <Text className=''>Đã giao hàng</Text>
                <Text className='text-gray-500 text-f13'>30 ngày</Text>
                <Text className='bg-red-600 text-white px-3 py-1 rounded-lg mt-1'>Liên hệ</Text>
            </View>
        </View>
    )
}

export default OrderItemPendding
