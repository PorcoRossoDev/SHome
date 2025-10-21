import { Text, View } from 'react-native';

const UserItemPendding = () => {
    return (
        <View className='mb-4 pb-4 border-b border-gray-200'>
            <View className='flex-row justify-between'>
                <Text className='font-nunitoBold font-bold text-f17'>Nguyễn Liên</Text>
                <Text className='font-nunitoBold font-medium text-gray-500 text-f14'>24/09/2025 22:38</Text>
            </View>
            <View className='flex-row justify-between items-center my-1'>
                <Text className='text-gray-400 mt-1'>Boy Boy</Text>
                <Text className='font-nunitoBold font-medium text-f14'>24/09/2025 22:38</Text>
            </View>
            <View className='flex-row justify-between items-center'>
                <Text className=' text-blue-500'>0988789877</Text>
                <Text className='font-nunitoBold mt-1 font-medium text-f14 text-white px-3 py-1 bg-orange-400 rounded-lg'>Liên hệ</Text>
            </View>
        </View>
    )
}

export default UserItemPendding
