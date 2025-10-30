import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Image, Platform, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { EnvelopeIcon, EyeIcon, EyeSlashIcon, LockClosedIcon } from 'react-native-heroicons/outline';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const LoginScreen = ({ onLogin }) => {

    const logo = require('../../../assets/images/logo.png');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const [isRemember, setIsRemember] = useState(false);

    const [focus, setFocus] = useState({}); // object lưu trạng thái focus theo key
    const handleFocus = (name) => setFocus(prev => ({ ...prev, [name]: true }));
    const handleBlur = (name) => setFocus(prev => ({ ...prev, [name]: false }));

    const insets = useSafeAreaInsets();

    return (
        <View className='flex-1 justify-center items-center bg-white'>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="light-content"
            />
            {/* <LinearGradient
                    colors={[
                        '#f85b5f',
                        '#e74448',
                        '#d32f2f',
                        '#c9252b',
                        'rgba(255,255,255,0.1)',
                        'rgba(255,255,255,0.3)',
                        'rgba(255,255,255,0.6)',
                        'rgba(255,255,255,0.8)',
                        '#ffffff',
                    ]}
                    locations={[0, 0.15, 0.25, 0.35, 0.55, 0.7, 0.8, 0.9, 1]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 900, // 👉 tăng chiều cao gradient để phần trắng dài hơn
                        zIndex: 10,
                        paddingTop:
                        Platform.OS === 'android' ? StatusBar.currentHeight : insets.top,
                    }}
                    /> */}
            <LinearGradient
                colors={[
                    '#b71c1c', // đậm nhất
                    '#d32f2f',
                    '#e53935',
                    '#f85b5f',
                    '#ff8a80',
                    'rgba(255,255,255,0.6)',
                    '#ffffff',
                ]}
                locations={[0, 0.2, 0.35, 0.5, 0.7, 0.85, 1]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 600,
                    zIndex: 10,
                    paddingTop:
                        Platform.OS === 'android' ? StatusBar.currentHeight : insets.top,
                }}
            />

            <Text className='text-white font-sfbold text-[25px] z-50 uppercase w-full text-center mb-10'>Đăng nhập</Text>
            <View className='px-5 w-full relative z-50'>
                <View
                    className='px-7 pt-5 pb-10'
                    style={{
                        backgroundColor: "white",
                        borderRadius: 10,
                        // Shadow cho iOS
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.1,
                        shadowRadius: 6,
                        // Shadow cho Android
                        elevation: 2,
                    }}
                >
                    {/* Logo */}
                    <Image
                        source={logo}
                        className='w-full h-[100px] mb-10'
                        resizeMode="contain"
                    />
                    {/* Form */}
                    <View className='mb-4'>
                        <Text className='font-sfregular text-f16 mb-3'>Email hoặc số điện thoại</Text>
                        <View className='relative'>
                            <View className='absolute top-1/2 -translate-y-1/2 left-3 justify-center items-center z-50'>
                                <EnvelopeIcon key={focus.email ? 'red' : 'gray'} size={18} color={`${focus.email ? '#D70404' : '#555'}`} />
                            </View>
                            <TextInput
                                placeholder="Nhập số điện thoại hoặc email"
                                placeholderTextColor="#999"
                                className={`h-[50px] px-12 rounded-2xl font-sfregular text-f15 border transition-all duration-500 ease-in-out
                                ${focus.email
                                        ? 'border-red-300 bg-white'
                                        : 'border-transparent bg-[#F8F7FB]'
                                    }`}
                                style={{
                                    shadowColor: focus.email ? '#D70404' : 'transparent',
                                    shadowOffset: { width: 0, height: 3 },
                                    shadowOpacity: 0.3,
                                    shadowRadius: 8,
                                    elevation: focus.email ? 8 : 0, // Android
                                }}
                                onFocus={() => handleFocus('email')}   // khi bấm vào
                                onBlur={() => handleBlur('email')}   // khi ra ngoài
                            />
                        </View>
                    </View>
                    <View className='mb-4'>
                        <Text className='font-sfregular text-f16 mb-3'>Mật khẩu</Text>
                        <View className='relative'>
                            <View className='absolute top-1/2 -translate-y-1/2 left-3 justify-center items-center z-50'>
                                <LockClosedIcon key={focus.password ? 'red' : 'gray'} size={18} color={`${focus.password ? '#D70404' : '#555'}`} />
                            </View>
                            <TextInput
                                placeholder="Nhập mật khẩu"
                                className={`h-[50px] px-12 rounded-2xl font-sfregular text-f15 border transition-all duration-500 ease-in-out
                                ${focus.password
                                        ? 'border-red-300 bg-white'
                                        : 'border-transparent bg-[#F8F7FB]'
                                    }`}
                                style={{
                                    shadowColor: focus.password ? '#D70404' : 'transparent',
                                    shadowOffset: { width: 0, height: 3 },
                                    shadowOpacity: 0.3,
                                    shadowRadius: 8,
                                    elevation: focus.password ? 8 : 0, // Android
                                }}
                                onFocus={() => handleFocus('password')}   // khi bấm vào
                                onBlur={() => handleBlur('password')}   // khi ra ngoài
                                placeholderTextColor="#999"
                                secureTextEntry={!showPassword}
                                value={password}
                                onChangeText={setPassword}
                            />
                            {showPassword == false ? (
                                <TouchableOpacity className='absolute top-1/2 -translate-y-1/2 right-3' onPress={() => setShowPassword(true)}>
                                    <View className='justify-center items-center z-50'>
                                        <EyeIcon key={focus.password ? 'red' : 'gray'} size={18} color={`${focus.password ? '#D70404' : '#555'}`} />
                                    </View>
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity className='absolute top-1/2 -translate-y-1/2 right-3' onPress={() => setShowPassword(false)}>
                                    <View className='justify-center items-center z-50'>
                                        <EyeSlashIcon key={focus.password ? 'red' : 'gray'} size={18} color="#D70404" />
                                    </View>
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>
                    <View className='flex-row justify-between items-center w-full my-2'>
                        <View className="flex-1 flex-shrink">
                            <BouncyCheckbox
                                size={20}
                                fillColor="#D70404"
                                unfillColor="#FFFFFF"
                                text="Ghi nhớ"
                                iconStyle={{
                                    borderColor: "#D70404",
                                    borderRadius: 6,    // 👉 thay vì 9999, giờ là bo nhẹ
                                }}
                                innerIconStyle={{
                                    borderWidth: 1,
                                    borderRadius: 6,    // 👉 khớp với iconStyle
                                }}
                                textStyle={{
                                    fontFamily: "SF-Pro-Display-Regular",
                                    fontSize: 15,
                                    color: "#333",
                                    marginLeft: -5,
                                    textDecorationLine: 'none'
                                }}
                                disableBuiltInState
                                isChecked={isRemember}
                                onPress={() => setIsRemember(!isRemember)}
                            />
                        </View>
                        <TouchableOpacity className='font-sfregular text-f15'>
                            <Text>Quên mật khẩu?</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Button */}
                    <TouchableOpacity
                        onPress={onLogin}
                        className='bg-[#D70404] justify-center items-center h-[55px] rounded-2xl mt-4'
                    >
                        <Text className='text-white text-f17 font-sfbold'>
                            Đăng nhập
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default LoginScreen