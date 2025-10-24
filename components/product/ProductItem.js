import { useState } from 'react';
import { Switch, Text, TouchableOpacity, View } from 'react-native';

const ProductItem = ({navigation}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(!isEnabled);

    return (
        <TouchableOpacity>
             <View className='mb-5 pb-5 border-b flex-row justify-between items-start border-gray-200'>
                <View className='flex-col justify-between'>
                    <Text className='font-sfbold text-f16'>Tinh dầu Ocean Hotel 100ml</Text>
                    <Text className='text-gray-400 font-sfregular my-2'>TINH DẦU 100 ml</Text>
                    <Text className='text-gray-400 font-sfregular'>23:00 28/08/2025</Text>
                </View>
                <View className='flex-col justify-end items-end'>
                    <Text className='font-sfbold font-medium text-f15'>1.399.000 đ</Text>
                    <View>
                        <Switch
                            className='mt-1 scale-75'
                            trackColor={{ false: "#fff", true: "#2563eb" }} // màu nền khi bật/tắt
                            thumbColor={isEnabled ? "#fff" : "#fff"} // màu nút trượt
                            ios_backgroundColor="#ddd" // dành cho iOS
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductItem
