import { View, Text, TouchableOpacity } from 'react-native';

const OrtherScreen = () => {
  return (
    <View className="flex-1 bg-white px-4 py-6 items-center justify-center">
      <View>
        <Text className="text-2xl font-bold text-blue-600 mb-4 text-center">
            Xin chào, Binh 👋
        </Text>

        <TouchableOpacity className="bg-blue-500 p-4 rounded-xl">
            <Text className="text-white text-center font-semibold">
                Thông tin trang Orther
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default OrtherScreen