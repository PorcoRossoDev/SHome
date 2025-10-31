import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Dimensions, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import { BarChart } from "react-native-gifted-charts";
import * as HeroSolid from "react-native-heroicons/solid";

const ReportBusinessChart = () => {
    const navigation = useNavigation();
    const data = [
        { label: 'Hà Nội', value: 42 },
        { label: 'Hồ Chí Minh', value: 58 },
        { label: 'Tỉnh/Công ty', value: 63 },
        { label: 'Sàn TMĐT', value: 71 },
        { label: 'Không tiềm năng', value: 49 },
        { label: 'Black List', value: 90 },
    ];

    const screenWidth = Dimensions.get("window").width;
    const chartWidth = screenWidth - 36; // trừ padding

    // Thời gian
    const times = [
        { label: 'Năm nay', value: '0' },
        { label: '6 Tháng', value: '1' },
        { label: 'Tháng này', value: '2' },
    ];
    const [value, setValue] = useState('0');
    const [isFocus, setIsFocus] = useState(false);
    const [selected, setSelected] = useState("");

    return (
        <View className='flex-1'>
            <View className='px-5'>
                <View className="justify-between flex-row items-center">
                    {/* Dropdown */}
                    <View className="relative">
                        <Dropdown
                        style={[
                            {
                            minWidth: 120,      // 👈 Có thể bỏ nếu muốn hoàn toàn auto
                            width: 'auto',      // 👈 Quan trọng: cho phép dropdown co giãn theo nội dung
                            paddingHorizontal: 8,
                            borderRadius: 8,
                            alignSelf: 'flex-start'
                            },
                            isFocus && { borderColor: 'blue' },
                        ]}
                        selectedTextStyle={{
                            fontSize: 15,
                            color: '#fff',
                            fontFamily: 'SF-Pro-Display-Medium',
                            paddingRight: 20, // 👈 để text không đè lên icon
                        }}
                        itemTextStyle={{
                            fontSize: 15,
                            fontFamily: 'SF-Pro-Display-Regular',
                            color: '#000',
                        }}
                        itemContainerStyle={{
                            paddingVertical: 0,
                            minHeight: 0,
                        }}
                        data={times}
                        labelField="label"
                        valueField="value"
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setValue(item.value);
                            setIsFocus(false);
                        }}
                        renderRightIcon={() => (
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: -8 }}>
                            <HeroSolid.ChevronDownIcon size={18} color="#fff" />
                        </View>
                        )}
                        />
                    </View>

                    {/* Icon kế bên */}
                    <View className="ml-2">
                        <HeroSolid.FunnelIcon size={20} color="#fff" />
                    </View>
                </View>
            </View>

            <View className='px-5'>
                <View
                    style={{
                        backgroundColor: "white",
                        borderRadius: 10,
                        paddingBottom: 30,
                        // paddingVertical: 16,
                        // Shadow cho iOS
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.05,
                        shadowRadius: 6,
                        // Shadow cho Android
                        elevation: 6,
                    }}
                    className=' rounded-xl bg-white mb-4 mt-5'>
                    <View
                        className="rounded-xl px-5 pt-3"
                    >
                        <View className='mb-4 mt-3'>
                            <Text className="font-sfmedium text-f15 uppercase">
                                Doanh thu theo phân loại
                            </Text>
                        </View>
                        <View className='mt-3'>
                            {/* Biểu đồ */}
                            <View className="items-center mb-1">
                                <View className=''>
                                    <BarChart
                                        className='bg-gray-100'
                                        // initialSpacing
                                        data={data}
                                        barWidth={40}
                                        spacing={23}
                                        frontColor="#e53935"
                                        yAxisThickness={0}
                                        xAxisThickness={0}
                                        hideRules
                                        isAnimated
                                        barBorderRadius={4}
                                        hideYAxisText
                                        xAxisLabelTextStyle={{
                                            fontSize: 13,
                                            // backgroundColor: 'red',
                                            color: "#000",
                                            marginTop: 5,              // tránh bị cắt
                                            // transform: [{ rotate: '-50deg' }], // nghiêng label
                                            // textAlign: 'right',
                                            textAnchor: 'end',
                                            alignmentBaseline: 'middle',
                                        }}
                                        // xAxisLabelsHeight={70}         // tăng chiều cao vùng label
                                        width={chartWidth}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            

            <View className='pt-7 bg-white px-5'>
                <Text className='uppercase text-f14 font-sfregular'>Báo cáo kinh doanh theo phân loại</Text>
                <View className='mt-4 px-3 pt-4' 
                    style={{
                        backgroundColor: "white",
                        borderRadius: 10,
                        // paddingVertical: 16,
                        // Shadow cho iOS
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.1,
                        shadowRadius: 6,
                        // Shadow cho Android
                        elevation: 6,
                    }}
                    >
                    <TouchableOpacity 
                        onPress={() =>
                            navigation.navigate('Order', {
                            screen: 'OrderListStack',
                            })
                        }
                        className={`${Platform.OS == "ios" ? 'mb-4 pb-4' : 'mb-3 pb-3'} flex-row flex-wrap justify-between w-full items-center border-b border-gray-100`}
                        >
                        <View className='flex-row flex-wrap items-center justify-center'>
                            <View className='rounded-xl w-10 h-10 bg-blue-100 justify-center items-center'>
                                <HeroSolid.ShoppingCartIcon size={20} color={'#2563eb'} />
                            </View>
                            <View className='pl-3'>
                                <Text className='font-sfregular text-f16'>Tổng doanh thu</Text>
                                <Text className={`text-gray-500 font-sfregular text-f13 ${Platform.OS == 'android' ? '-mt-1.5' : 'mt-1'}`}>225.435.678</Text>
                            </View>
                        </View>
                        <View className='flex-row flex-wrap items-center'>
                            <Text className='bg-gray-100 rounded-2xl px-2 py-2 text-f11'>117</Text>
                            <Text className='ml-2'>
                                <HeroSolid.ChevronRightIcon size={17} color={'#9ca3af'} />
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() =>
                            navigation.navigate('Order', {
                            screen: 'OrderSuccessStack',
                            })
                        }
                        className={`${Platform.OS == "ios" ? 'mb-4 pb-4' : 'mb-3 pb-3'} flex-row flex-wrap justify-between w-full items-center border-b border-gray-100`}
                        >
                        <View className='flex-row flex-wrap'>
                            <View className='rounded-xl w-10 h-10 bg-green-100 justify-center items-center'>
                                <HeroSolid.CheckCircleIcon size={20} color={'#16a34a'} />
                            </View>
                            <View className='pl-3'>
                                <Text className='font-sfregular text-f16'>Tổng hoá đơn VAT</Text>
                                <Text className={`text-gray-500 font-sfregular text-f13 ${Platform.OS == 'android' ? '-mt-1.5' : 'mt-1'}`}>225.435.678</Text>
                            </View>
                        </View>
                        <View className='flex-row flex-wrap items-center'>
                            <Text className='bg-gray-100 rounded-2xl px-2 py-2 text-f11'>90</Text>
                            <Text className='ml-2'>
                                <HeroSolid.ChevronRightIcon size={17} color={'#9ca3af'} />
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() =>
                            navigation.navigate('Order', {
                            screen: 'OrderPaymentSuccessStack',
                            })
                        }
                        className={`${Platform.OS == "ios" ? 'mb-4 pb-4' : 'mb-3 pb-3'} flex-row flex-wrap justify-between w-full items-center border-b border-gray-100`}
                        >
                        <View className='flex-row flex-wrap'>
                            <View className='rounded-xl w-10 h-10 bg-yellow-100 justify-center items-center'>
                                <HeroSolid.CreditCardIcon size={20} color={'#ca8a04'} />
                            </View>
                            <View className='pl-3'>
                                <Text className='font-sfregular text-f16'>Tổng dịch vụ</Text>
                                <Text className={`text-gray-500 font-sfregular text-f13 ${Platform.OS == 'android' ? '-mt-1.5' : 'mt-1'}`}>225.435.678</Text>
                            </View>
                        </View>
                        <View className='flex-row flex-wrap items-center'>
                            <Text className='bg-gray-100 rounded-2xl px-2 py-2 text-f11'>88</Text>
                            <Text className='ml-2'>
                                <HeroSolid.ChevronRightIcon size={17} color={'#9ca3af'} />
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() =>
                            navigation.navigate('Order', {
                            screen: 'UnpaidOrdersStack',
                            })
                        }
                        className={`${Platform.OS == "ios" ? 'mb-4 pb-4' : 'mb-3 pb-3'} flex-row flex-wrap justify-between w-full items-center border-b border-gray-100`}
                        >
                        <View className='flex-row flex-wrap'>
                            <View className='rounded-xl w-10 h-10 bg-purple-100 justify-center items-center'>
                                <HeroSolid.ClockIcon size={20} color={'#9333ea'} />
                            </View>
                            <View className='pl-3'>
                                <Text className='font-sfregular text-f16'>Tổng trả hoa hồng</Text>
                                <Text className={`text-gray-500 font-sfregular text-f13 ${Platform.OS == 'android' ? '-mt-1.5' : 'mt-1'}`}>225.435.678</Text>
                            </View>
                        </View>
                        <View className='flex-row flex-wrap items-center'>
                            <Text className='bg-gray-100 rounded-2xl px-2 py-2 text-f11'>21</Text>
                            <Text className='ml-2'>
                                <HeroSolid.ChevronRightIcon size={17} color={'#9ca3af'} />
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View className='mt-6 mb-5 px-5 bg-white'>
                <View className='flex flex-row justify-between items-center'>
                    <Text className='uppercase text-f14 font-sfregular'>Báo cáo chi tiết theo phân loại</Text>
                    <View className="relative border border-gray-400 rounded-md pl-1 py-1">
                        <Dropdown
                        style={[
                            {
                            minWidth: 120,      // 👈 Có thể bỏ nếu muốn hoàn toàn auto
                            width: 'auto',      // 👈 Quan trọng: cho phép dropdown co giãn theo nội dung
                            paddingHorizontal: 8,
                            borderRadius: 8,
                            alignSelf: 'flex-start'
                            },
                            isFocus && { borderColor: 'blue' },
                        ]}
                        selectedTextStyle={{
                            fontSize: 15,
                            color: '#000',
                            fontFamily: 'SF-Pro-Display-Regular',
                            paddingRight: 20, // 👈 để text không đè lên icon
                        }}
                        itemTextStyle={{
                            fontSize: 15,
                            fontFamily: 'SF-Pro-Display-Regular',
                            color: '#000',
                        }}
                        itemContainerStyle={{
                            paddingVertical: 0,
                            minHeight: 0,
                        }}
                        data={times}
                        labelField="label"
                        valueField="value"
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setValue(item.value);
                            setIsFocus(false);
                        }}
                        renderRightIcon={() => (
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: -8 }}>
                            <HeroSolid.ChevronDownIcon size={18} color="#000" />
                        </View>
                        )}
                        />
                    </View>
                </View>
                <View className='flex-row mt-6'>
                    <View className='w-1/3'>
                        <Text className='font-sfregular text-f14 text-gray-500'>Doanh thu (trừ DV)</Text>
                        <Text className='font-sfbold text-blue-700 mt-1 text-f16'>1.400.000</Text>
                    </View>
                    <View className='w-1/3 relative'>
                        <View className='relative'>
                            <View className='h-[90%] w-[0.5px] bg-gray-300 absolute left-0 top-1/2 translate-y-[-50%] z-50' />
                            <View className=''>
                                <Text className='text-center font-sfregular text-f14 text-gray-500'>Mốc hoa hồng</Text>
                                <Text className='text-center font-sfbold text-green-700 mt-1 text-f16'>1.00%</Text>
                            </View>
                            <View className='h-[90%] w-[0.5px] bg-gray-300 absolute right-0 top-1/2 translate-y-[-50%] z-50' />
                        </View>
                    </View>
                    <View className='w-1/3'>
                        <Text className='text-right font-sfregular text-f14 text-gray-500'>Quỹ trả hoa hồng</Text>
                        <Text className='text-right font-sfbold text-yellow-700 mt-1 text-f16'>450.000</Text>
                    </View>
                </View>

                <View
                className='mt-5 px-5'
                style={{
                    backgroundColor: "white",
                    borderRadius: 10,
                    // paddingVertical: 16,
                    // Shadow cho iOS
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.1,
                    shadowRadius: 6,
                    // Shadow cho Android
                    elevation: 6,
                }}
                >
                    <TouchableOpacity
                    onPress={() => navigation.navigate('Report',{screen: 'ReportOrderStack'})}
                    className='py-3 mb-2 border-b border-gray-200'>
                        <View className='flex-row justify-between'>
                            <Text className='font-sfmedium text-f16'>Nguyễn Mạnh Chiến</Text>
                            <View className='flex-row flex-wrap items-center'>
                                <Text className='text-f13 font-sfmedium'>21</Text>
                                <Text className='ml-2'>
                                    <HeroSolid.ChevronRightIcon size={16} color={'#9ca3af'} />
                                </Text>
                            </View>
                        </View>
                        <View className='flex-row justify-between mt-1'>
                            <View>
                                <Text className='text-gray-500 font-sfregular text-f15'>KPI cá nhân</Text>
                                <Text className='font-sfmedium text-center text-f14'>0</Text>
                            </View>
                            <View>
                                <Text className='text-gray-500 font-sfregular text-f15'>Tỷ lệ</Text>
                                <Text className='font-sfmedium text-center text-f14'>0</Text>
                            </View>
                            <View>
                                <Text className='text-gray-500 font-sfregular text-f15'>Hoa hồng</Text>
                                <Text className='font-sfmedium text-center text-f14'>0</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => navigation.navigate('Report',{screen: 'ReportOrderStack'})}
                    className='py-3 mb-2 border-b border-gray-200'>
                        <View className='flex-row justify-between'>
                            <Text className='font-sfmedium text-f16'>Tuấn Anh</Text>
                            <View className='flex-row flex-wrap items-center'>
                                <Text className='text-f13 font-sfmedium'>21</Text>
                                <Text className='ml-2'>
                                    <HeroSolid.ChevronRightIcon size={16} color={'#9ca3af'} />
                                </Text>
                            </View>
                        </View>
                        <View className='flex-row justify-between mt-1'>
                            <View>
                                <Text className='text-gray-500 font-sfregular text-f15'>KPI cá nhân</Text>
                                <Text className='font-sfmedium text-center text-f14'>0</Text>
                            </View>
                            <View>
                                <Text className='text-gray-500 font-sfregular text-f15'>Tỷ lệ</Text>
                                <Text className='font-sfmedium text-center text-f14'>0</Text>
                            </View>
                            <View>
                                <Text className='text-gray-500 font-sfregular text-f15'>Hoa hồng</Text>
                                <Text className='font-sfmedium text-center text-f14'>0</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => navigation.navigate('Report',{screen: 'ReportOrderStack'})}
                    className='py-3 mb-2 '>
                        <View className='flex-row justify-between'>
                            <Text className='font-sfmedium text-f16'>Huy Huân</Text>
                            <View className='flex-row flex-wrap items-center'>
                                <Text className='text-f13 font-sfmedium'>21</Text>
                                <Text className='ml-2'>
                                    <HeroSolid.ChevronRightIcon size={16} color={'#9ca3af'} />
                                </Text>
                            </View>
                        </View>
                        <View className='flex-row justify-between mt-1'>
                            <View>
                                <Text className='text-gray-500 font-sfregular text-f15'>KPI cá nhân</Text>
                                <Text className='font-sfmedium text-center text-f14'>0</Text>
                            </View>
                            <View>
                                <Text className='text-gray-500 font-sfregular text-f15'>Tỷ lệ</Text>
                                <Text className='font-sfmedium text-center text-f14'>0</Text>
                            </View>
                            <View>
                                <Text className='text-gray-500 font-sfregular text-f15'>Hoa hồng</Text>
                                <Text className='font-sfmedium text-center text-f14'>0</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    dropdown: {
        height: 40,
        borderColor: 'gray',
        borderRadius: 8,
        paddingHorizontal: 8,
        fontFamily: 'sfbold',
        // width: '120'
    },
    selectedTextStyle: {
        fontSize: 14,
        color: '#374151',
    },
});

export default ReportBusinessChart;
