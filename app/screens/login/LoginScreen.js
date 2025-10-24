import { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { EnvelopeIcon, EyeIcon, EyeSlashIcon, LockClosedIcon } from 'react-native-heroicons/outline';

const LoginScreen = ({ onLogin }) => {

    const logo = require('../../../assets/images/logo.png');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View className='flex-1 justify-center items-center bg-white'>
            <View className='px-5 w-full'>
                {/* Logo */}
                <Image
                    source={logo}
                    className='w-full h-40 mb-10'
                    resizeMode="contain"
                />
                {/* Form */}
                <View className='mb-4'>
                    <Text className='font-sfmedium text-f16 mb-3'>Email hoặc số điện thoại</Text>
                    <View className='relative'>
                        <View className='absolute top-1/2 -translate-y-1/2 left-3 justify-center items-center z-50'>
                            <EnvelopeIcon size={20} color={`${isFocused ? '#D70404' : '#555'}`} />
                        </View>
                        <TextInput
                            placeholder="Nhập số điện thoại hoặc email"
                            placeholderTextColor="#999"
                            className={`h-[55px] px-12 rounded-2xl font-sfregular border text-f15 ${isFocused ? ' border-[#D70404]' : 'border-transparent bg-[#F8F7FB]'}`}
                            onFocus={() => setIsFocused(true)}   // khi bấm vào
                            onBlur={() => setIsFocused(false)}   // khi ra ngoài
                        />
                    </View>
                </View>
                <View className='mb-4'>
                    <Text className='font-sfmedium text-f16 mb-3'>Mật khẩu</Text>
                    <View className='relative'>
                        <View className='absolute top-1/2 -translate-y-1/2 left-3 justify-center items-center z-50'>
                            <LockClosedIcon size={20} color="#555" />
                        </View>
                        <TextInput
                            placeholder="Nhập mật khẩu"
                            className='bg-[#F8F7FB] h-[55px] px-12 rounded-2xl font-sfregular text-f15'
                            placeholderTextColor="#999"
                            secureTextEntry={!showPassword}
                            value={password}
                            onChangeText={setPassword}
                        />
                        {showPassword ? (
                            <TouchableOpacity className='absolute top-1/2 -translate-y-1/2 right-3' onPress={() => setShowPassword(false)}>
                                <View className='justify-center items-center z-50'>
                                    <EyeIcon size={20} color="#555" />
                                </View>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity className='absolute top-1/2 -translate-y-1/2 right-3' onPress={() => setShowPassword(true)}>
                                <View className='justify-center items-center z-50'>
                                    <EyeSlashIcon size={20} color="#555" />
                                </View>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>

                {/* Button */}
                <TouchableOpacity
                    onPress={onLogin}
                    className='bg-[#D70404] justify-center items-center h-[55px] rounded-2xl mt-4'
                >
                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>
                        Đăng nhập
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default LoginScreen