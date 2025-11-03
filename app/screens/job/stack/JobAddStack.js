import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

const JobAddStack = () => {

  const navigation = useNavigation()

  const [image, setImage] = useState(null);
  const [contentTxt, SetContentTxt] = useState(null)

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      // aspect: [4, 3],
      quality: 1,
    })

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }

  return (
    <View className='flex-1'>
      <ScrollView className='flex-1 px-4'>
          <View className=''>
            <View className='mt-6 p-4 bg-white rounded-lg'>
              <Text className='text-f16 font-sfbold'>Tên công việc</Text>
              <TextInput 
                className='border-b h-10 font-sfregular text-f14 border-gray-200'
                placeholder='Nhập tên công việc'
                placeholderTextColor={'#ddd'}
              />
            </View>
            <View className='mt-6 p-4 bg-white rounded-lg'>
              <Text className='text-f16 font-sfbold'>Giá công việc</Text>
              <TextInput 
                className='border-b h-10 font-sfregular text-f14 border-gray-200'
                placeholder='Nhập giá công việc'
                placeholderTextColor={'#ddd'}
              />
            </View>
            <View className='mt-4 p-4 bg-white rounded-lg'>
              <Text className='text-f16 font-sfbold'>Ghi chú công việc</Text>
              <TextInput 
                className='border-b h-20 border-gray-200'
                placeholder='Nhập ghi chú công việc'
                placeholderTextColor={'#ddd'}
              />
            </View>

            <View className='mt-4 p-4 bg-white rounded-lg'>
              <Text className='text-f16 font-sfbold'>Phân loại</Text>
              <TextInput 
                className='border-b h-10 border-gray-200 font-sfregular text-f14'
                placeholder='Chọn phân loại'
                placeholderTextColor={'#ddd'}
              />
            </View>
            <View className='mt-4 p-4 bg-white rounded-lg'>
              <Text className='text-f16 font-sfbold'>Tạo bởi</Text>
              <TextInput 
                className='border-b h-10 border-gray-200 font-sfregular text-f14'
                placeholder='Tìm kiếm người tạo'
                placeholderTextColor={'#ddd'}
              />
            </View>
            <View className='mt-4 p-4 bg-white rounded-lg'>
              <Text className='text-f16 font-sfbold'>Xử lý bởi</Text>
              <TextInput 
                className='border-b h-10 border-gray-200 font-sfregular text-f14'
                placeholder='Tìm kiếm người xử lý'
                placeholderTextColor={'#ddd'}
              />
            </View>
            <View className='mt-4 p-4 bg-white rounded-lg'>
              <Text className='text-f16 font-sfbold'>Lập lịch công việc</Text>
              <TextInput 
                className='border-b h-10 border-gray-200 font-sfregular text-f14'
                placeholder='Một lần'
                placeholderTextColor={'#ddd'}
              />
            </View>
          </View>
      </ScrollView>
      <View className='px-4 flex-row my-5 gap-x-2'>
          <TouchableOpacity 
            onPress={() => navigation.navigate('ProductOverviewStack')}
            className='flex-1 justify-center items-center h-12 rounded-lg bg-blue-500'>
            <Text className='text-white text-f16 font-sfregular'>Tạo công việc</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

export default JobAddStack;