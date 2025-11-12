import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as HeroOutline from "react-native-heroicons/outline";
import { RadioButton } from 'react-native-paper';

const CustomerAddStack = () => {

  const navigation = useNavigation()
  const [value, setValue] = useState('first');
  const typeCustomer = ['Cá nhân', 'Doanh nghiệp']

  // Số điện thoại
  const [phone, setPhone] = useState([''])
  const AddPhone = () => {
    setPhone([...phone, ''])
  }
  const RemovePhone = (index) => {
    setPhone(phone.filter((_,i) => i!== index))
  }
  const UpdatePhone = (index, value) => {
    const newPhone = [...phone]
    newPhone[index] = value
    setPhone(newPhone);
  }
  const InputPhone = ({item, index, isLast}) => {
    return (
      <View key={index} className='flex-row gap-x-2 mb-4'>
        <TextInput 
        value={item}
        className='py-4 border border-[#ccc] px-3 rounded-lg flex-1'
        placeholder='Nhập số điện thoại'
        />
        {
          isLast ?? 
            (
              <TouchableOpacity onPress={()=> RemovePhone(index)} className='border border-red-500 w-12 rounded-md justify-center items-center'><HeroOutline.MinusIcon size='19' color='#ef4444' /></TouchableOpacity>
            )
        }
        <TouchableOpacity onPress={AddPhone} className='border w-12 rounded-md justify-center items-center'><HeroOutline.PlusIcon size='19' /></TouchableOpacity>
      </View>
    )
  }

  return (
    <View className='flex-1 bg-white'>
      <ScrollView className='flex-1 px-4'>
          <View className='mt-8'>
            <Text className="font-sfregular text-[15px] mb-2 text-gray-700">
              <Text className="text-red-600">*</Text> Loại khách hàng
            </Text>
            <View className=''>
              <RadioButton.Group onValueChange={setValue} value={value}>
                <View className="flex-row items-center gap-x-7">
                  <View className="flex-row items-center">
                    <RadioButton
                      value="0"
                      color="#007AFF"          // màu khi chọn
                      uncheckedColor="#C0C0C0" // màu viền khi chưa chọn
                      // className='border border-gray-400 w-6 h-6 text-f8'
                    />
                    <Text>Cá nhân</Text>
                  </View>

                  <View className="flex-row items-center">
                    <RadioButton
                      value="1"
                      color="#007AFF"
                      uncheckedColor="#C0C0C0"
                    />
                    <Text>Doanh nghiệp</Text>
                  </View>
                </View>
              </RadioButton.Group>

            </View>
          </View>
          <View className='mt-8'>
            <Text className="font-sfregular text-[15px] mb-2 text-gray-700">
              <Text className="text-red-600">*</Text> Số điện thoại
            </Text>
            {
              phone.length > 0 ?
              phone.map((item, index) => {
                return (
                  <InputPhone key={index} index={index} isLast={index === phone.length - 1} item={item} remove={false} />
                )
              })
              : <InputPhone />
            }
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

export default CustomerAddStack;