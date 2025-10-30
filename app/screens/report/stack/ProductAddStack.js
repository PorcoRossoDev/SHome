import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as HeroOutline from "react-native-heroicons/outline";
import * as HeroSolid from "react-native-heroicons/solid";

const ProductAddStack = () => {

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
          <View className='flex-row gap-x-2 mt-6'>
            <TouchableOpacity
              className='bg-white h-14 w-14 justify-center items-center rounded-lg self-start' 
              onPress={pickImage}
              >
              <HeroOutline.PhotoIcon size={30} color={'#3b82f6'} />
              <View className='absolute right-0 top-0'>
                <HeroSolid.PlusCircleIcon size={20} color={'#3b82f6'} />
              </View>
            </TouchableOpacity>
            {
              image ? (
                <View className='bg-white h-14 w-14 justify-center items-center rounded-lg self-start'>
                  <Image
                    source={{ uri: image }}
                    style={{ width: '100%', height: '100%', borderRadius: 10 }}
                  />
                </View>
              ) : (
                <></>
              )
            }
          </View>
          <View className=''>
            <View className='mt-6 p-4 bg-white rounded-lg'>
              <Text className='text-f16 font-sfbold'>Tên sản phẩm</Text>
              <TextInput 
                className='border-b h-10 font-sfregular text-f14 border-gray-200'
                placeholder='Nhập tên sản phẩm'
                placeholderTextColor={'#ddd'}
              />
            </View>

            <View className='mt-4 p-4 bg-white rounded-lg'>
              <Text className='text-f16 font-sfbold'>Danh mục</Text>
              <TextInput 
                className='border-b h-10 border-gray-200 font-sfregular text-f14'
                placeholder='Tìm kiếm hoặc thêm mới danh mục'
                placeholderTextColor={'#ddd'}
              />
            </View>
            <View className='mt-4 p-4 bg-white rounded-lg'>
              <Text className='text-f16 font-sfbold'>Giá bán lẻ</Text>
              <TextInput 
                className='border-b h-10 border-gray-200 font-sfregular text-f14'
                placeholder='0'
                placeholderTextColor={'#ddd'}
              />
            </View>

            <View className='mt-4 p-4 bg-white rounded-lg'>
              <Text className='text-f16 font-sfbold'>Mô tả</Text>
              <TextInput 
                className='border-b h-20 border-gray-200'
                placeholder=''
                placeholderTextColor={'#ddd'}
              />
            </View>
          </View>
      </ScrollView>
      <View className='px-4 flex-row my-5 gap-x-2'>
          <TouchableOpacity 
            onPress={() => navigation.navigate('ProductOverviewStack')}
            className='w-[40%] justify-center h-12 rounded-lg items-center bg-white'>
            <Text className='text-f16 font-sfregular'>Huỷ</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => navigation.navigate('ProductOverviewStack')}
            className='flex-1 justify-center items-center h-12 rounded-lg bg-blue-500'>
            <Text className='text-white text-f16 font-sfregular'>Tạo sản phẩm</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

export default ProductAddStack;