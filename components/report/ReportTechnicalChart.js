import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Dimensions, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import { BarChart } from "react-native-gifted-charts";
import * as HeroSolid from "react-native-heroicons/solid";



const ReportTechnicalChart = () => {
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
            <View className=''>
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
            <View
                style={{
                    backgroundColor: "white",
                    borderRadius: 10,
                    paddingBottom: 30,
                    // paddingVertical: 16,
                    // Shadow cho iOS
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.1,
                    shadowRadius: 6,
                    // Shadow cho Android
                    elevation: 6,
                }}
                className=' rounded-xl bg-white mb-4 mt-5'>
                <View
                    className="rounded-xl px-5 pt-3 bg-white"
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

            <View className='mt-7 bg-white'>
                <Text className='uppercase text-f14 font-sfregular'>Báo cáo kỹ thuật theo phân loại</Text>
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
                            <View className='rounded-xl w-10 justify-center items-center'>
                                <HeroSolid.ShoppingCartIcon size={22} color={'#1e40af'} />
                            </View>
                            <View className='pl-3'>
                                <Text className='font-sfregular text-f16'>Tổng đơn hàng</Text>
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
                            <View className='rounded-xl w-10 justify-center items-center'>
                                <HeroSolid.CheckCircleIcon size={22} color={'#1e40af'} />
                            </View>
                            <View className='pl-3'>
                                <Text className='font-sfregular text-f16'>Hoàn thành</Text>
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
                            <View className='rounded-xl w-10 justify-center items-center'>
                                <HeroSolid.CreditCardIcon size={22} color={'#1e40af'} />
                            </View>
                            <View className='pl-3'>
                                <Text className='font-sfregular text-f16'>Đã Thanh toán</Text>
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
                            <View className='rounded-xl w-10 justify-center items-center'>
                                <HeroSolid.ClockIcon size={22} color={'#1e40af'} />
                            </View>
                            <View className='pl-3'>
                                <Text className='font-sfregular text-f16'>Chưa Thanh toán</Text>
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
                    <TouchableOpacity 
                        className={`${Platform.OS == "ios" ? 'mb-4 pb-4' : 'mb-3 pb-3'} flex-row flex-wrap justify-between w-full items-center border-b border-gray-100`}
                        >
                        <View className='flex-row flex-wrap'>
                            <View className='rounded-xl w-10 justify-center items-center'>
                                <HeroSolid.TruckIcon size={22} color={'#1e40af'} />
                            </View>
                            <View className='pl-3'>
                                <Text className='font-sfregular text-f16'>Hẹn giao</Text>
                                <Text className={`text-gray-500 font-sfregular text-f13 ${Platform.OS == 'android' ? '-mt-1.5' : 'mt-1'}`}>225.435.678</Text>
                            </View>
                        </View>
                        <View className='flex-row flex-wrap items-center'>
                            <Text className='bg-gray-100 rounded-2xl px-2 py-2 text-f11'>17</Text>
                            <Text className='ml-2'>
                                <HeroSolid.ChevronRightIcon size={17} color={'#9ca3af'} />
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        className={`${Platform.OS == "ios" ? 'mb-4 pb-4' : 'mb-3 pb-3'} flex-row flex-wrap justify-between w-full items-center border-b border-gray-100`}
                        >
                        <View className='flex-row flex-wrap'>
                            <View className='rounded-xl w-10 justify-center items-center'>
                                <HeroSolid.ArrowDownTrayIcon size={22} color={'#1e40af'} />
                            </View>
                            <View className='pl-3'>
                                <Text className='font-sfregular text-f16'>Công nợ</Text>
                                <Text className={`text-gray-500 font-sfregular text-f13 ${Platform.OS == 'android' ? '-mt-1.5' : 'mt-1'}`}>225.435.678</Text>
                            </View>
                        </View>
                        <View className='flex-row flex-wrap items-center'>
                            <Text className='bg-gray-100 rounded-2xl px-2 py-2 text-f11'>0</Text>
                            <Text className='ml-2'>
                                <HeroSolid.ChevronRightIcon size={17} color={'#9ca3af'} />
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View className='mt-6 mb-5'>
                <View className='flex flex-row justify-between items-center'>
                    <Text className='uppercase text-f14 font-sfmedium'>Báo cáo chi tiết theo phân loại</Text>
                    <Text className='font-sfregular border border-blue-600 px-2 py-1 rounded-md'>Hà Nội</Text>
                </View>
                <View className='flex-row mt-5'>
                    <View className='w-1/3'>
                        <Text className='text-center'>Doanh thu</Text>
                        <Text className='text-center'>1.400.000</Text>
                    </View>
                    <View className='w-1/3'>
                        <Text className='text-center'>Thu đơn hàng</Text>
                        <Text className='text-center'>900.000</Text>
                    </View>
                    <View className='w-1/3'>
                        <Text className='text-center'>Thu công việc</Text>
                        <Text className='text-center'>450.000</Text>
                    </View>
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

export default ReportTechnicalChart;
