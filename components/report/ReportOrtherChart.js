import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import { BarChart } from "react-native-gifted-charts";
import * as HeroOutline from "react-native-heroicons/outline";

const ReportOrtherChart = () => {
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

    const menu = [
        {
        id: "1",
        title: "Tổng doanh thu",
        value: "225.435.678 ₫",
        count: 117,
        color: "bg-blue-500",
        icon: HeroOutline.ShoppingCartIcon,
        },
        {
        id: "2",
        title: "Tổng thu đơn hàng",
        value: "225.435.678 ₫",
        count: 90,
        color: "bg-green-500",
        icon: HeroOutline.CheckCircleIcon,
        },
        {
        id: "3",
        title: "Tổng thu công việc",
        value: "225.435.678 ₫",
        count: 88,
        color: "bg-purple-500",
        icon: HeroOutline.CreditCardIcon,
        },
        {
        id: "4",
        title: "Tổng nhân viên",
        value: "225.435.678 ₫",
        count: 21,
        color: "bg-yellow-400",
        icon: HeroOutline.ClockIcon,
        }
    ];

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
                            <HeroOutline.ChevronDownIcon size={18} color="#fff" />
                        </View>
                        )}
                        />
                    </View>

                    {/* Icon kế bên */}
                    <View className="ml-2">
                        <HeroOutline.FunnelIcon size={20} color="#fff" />
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
            

            <View className='pt-7 bg-gray-100 px-5'>
                <Text className='uppercase text-f14 font-sfregular'>Báo cáo khác theo phân loại</Text>
                <View className="mt-4 pt-0">
                    <FlatList
                    scrollEnabled={false}
                    data={menu}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item }) => {
                        const Icon = item.icon;
                        return (
                        <TouchableOpacity
                            activeOpacity={0.9}
                            className="mb-3"
                        >
                            <View
                            className="flex-row items-center bg-white p-4 rounded-3xl"
                            style={{
                                shadowColor: "#000",
                                shadowOffset: { width: 0, height: 8 },
                                shadowOpacity: 0.03,
                                shadowRadius: 12,
                                elevation: 6,
                            }}
                            >
                            {/* Icon */}
                            <View
                                className={`w-12 h-12 rounded-full ${item.color} items-center justify-center mr-4`}
                            >
                                <Icon size={22} color="white" strokeWidth={2} />
                            </View>
            
                            {/* Text */}
                            <View className="flex-1">
                                <Text className="text-lg font-sfmedium text-gray-800">
                                {item.title}
                                </Text>
                                <Text className="text-gray-500">{item.value}</Text>
                            </View>
            
                            {/* Badge */}
                            <View
                                className={`px-3 py-1 rounded-full ${item.color} bg-opacity-20`}
                            >
                                <Text className="text-white text-sm font-sfmedium">
                                {item.count}
                                </Text>
                            </View>
                            </View>
                        </TouchableOpacity>
                        );
                    }}
                    />
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
                            <HeroOutline.ChevronDownIcon size={18} color="#000" />
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
                                <Text className='text-center font-sfregular text-f14 text-gray-500'>Tổng dịch vụ</Text>
                                <Text className='text-center font-sfbold text-green-700 mt-1 text-f16'>1.00%</Text>
                            </View>
                            <View className='h-[90%] w-[0.5px] bg-gray-300 absolute right-0 top-1/2 translate-y-[-50%] z-50' />
                        </View>
                    </View>
                    <View className='w-1/3'>
                        <Text className='text-right font-sfregular text-f14 text-gray-500'>Tổng nhân viên</Text>
                        <Text className='text-right font-sfbold text-yellow-700 mt-1 text-f16'>450.000</Text>
                    </View>
                </View>

                <View
                className='mt-5 px-5 pt-1'
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
                            <Text className='font-sfmedium text-f16'>Trần Văn Xuân - <Text className='text-green-600'>200.000</Text></Text>
                            <View className='flex-row flex-wrap items-center'>
                                <Text className='text-f13 font-sfmedium'>21</Text>
                                <Text className='ml-2'>
                                    <HeroOutline.ChevronRightIcon size={16} color={'#9ca3af'} />
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => navigation.navigate('Report',{screen: 'ReportOrderStack'})}
                    className='py-3 mb-2'>
                        <View className='flex-row justify-between'>
                            <Text className='font-sfmedium text-f16'>Tuấn Anh - <Text className='text-green-600'>200.000</Text></Text>
                            <View className='flex-row flex-wrap items-center'>
                                <Text className='text-f13 font-sfmedium'>21</Text>
                                <Text className='ml-2'>
                                    <HeroOutline.ChevronRightIcon size={16} color={'#9ca3af'} />
                                </Text>
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

export default ReportOrtherChart;
