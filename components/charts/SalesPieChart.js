import { Text, View } from "react-native";
import { PieChart } from 'react-native-gifted-charts';
// import { PieChart } from 'react-native-svg-charts';

import ProgressBar from '../../components/common/ProgressBar';


// import Svg, { Circle } from 'react-native-svg';


const SalesPieChart = () => {
    const pieData = [
        { label: "Hà Nội", value: 20, color: "#907CFA", gradientCenterColor: "#006DFF", radius: 100, innerRadius: 70 },
        { label: "Hồ Chí Minh", value: 22, color: "#34DA50", gradientCenterColor: "#3BE9DE", radius: 100, innerRadius: 70 },
        { label: "Tỉnh/Công ty", value: 16, color: "#098DFA", gradientCenterColor: "#8F80F3" },
        { label: "Không có tiềm năng", value: 18, color: "#FF9E01", gradientCenterColor: "#FF7F97" },
        { label: "Sàn TMĐT", value: 10, color: "#BB64E4", gradientCenterColor: "#FF7F97" },
        { label: "Black List/Chặn", value: 10, color: "#F93363", gradientCenterColor: "#FF7F97" },
    ];

    const renderDot = (color) => (
        <View className="w-2.5 h-2.5 rounded-full mr-2" style={{ backgroundColor: color }} />
    );

    const renderLegendItem = ({ label, color, value }) => (
        <View key={label} className='w-1/2 px-3 mt-7'>
            <View className="flex-row items-center">
                <Text className="text-f12">{`${label}`}</Text>
                <View className="w-[1px] h-3 bg-gray-300 mx-2" />
                <Text className="text-f12">{`${value}%`}</Text>
            </View>
            <ProgressBar progress={value} color={color} />
        </View>
    );

    // Start
    const rings = [
    { color: '#177AD5', progress: 0.7 },
        { color: '#79D2DE', progress: 0.5 },
        { color: '#ED6665', progress: 0.3 },
    ];

    const size = 200;
    const strokeWidth = 20;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    // End

    return (
        <View className="h-full w-full">
            <View
                className="bg-white w-full p-5 rounded-xl border border-gray-300"
                // style={{
                //     backgroundColor: "white",
                //     borderRadius: 16,
                //     paddingVertical: 16,
                //     // Shadow cho iOS
                //     shadowColor: "#000",
                //     shadowOffset: { width: 0, height: 4 },
                //     shadowOpacity: 0.2,
                //     shadowRadius: 6,
                //     // Shadow cho Android
                //     elevation: 6,
                // }}
            >
                <Text className="font-bold text-f14 mb-4 uppercase">
                    Doanh thu bán hàng chi tiết trong năm 2
                </Text>
                <View className='mt-3'>
                    {/* Biểu đồ */}
                    <View className="items-center mb-4">
                        <View className=''>
                            {/* <PieChart
                                data={pieData}
                                donut
                                sectionAutoFocus
                                radius={100}
                                innerRadius={70}
                                sectionSpace={30}
                                isAnimated
                                
                                animationDuration={300}
                                innerCircleColor="#fafafa"
                                centerLabelComponent={() => (
                                <View className="items-center">
                                    <Text className="text-[19px] font-bold">47%</Text>
                                    <Text className="text-[14px]">Excellent</Text>
                                </View>
                                )}
                            /> */}

                            <PieChart
                                data={pieData}
                                donut
                                radius={100}
                                innerRadius={70}
                                sectionSpace={5}               // 👈 tạo khoảng cách giữa các phần
                                strokeWidth={3}              // 👈 tạo đường viền nhẹ giữa phần và nền
                                strokeColor="#fff"
                                showGradient                   // 👈 làm mượt màu các lát
                                isAnimated
                                animationDuration={400}
                                innerCircleColor="#fff"
                                centerLabelComponent={() => (
                                <View className="items-center">
                                    <Text className="text-[19px] font-bold">47%</Text>
                                    <Text className="text-[14px] text-gray-500">Excellent</Text>
                                </View>
                                )}
                            />

                            {/* <Svg width={size} height={size}>
                                {rings.map((ring, i) => (
                                <Circle
                                    key={i}
                                    cx={size / 2}
                                    cy={size / 2}
                                    r={radius - i * (strokeWidth + 5)} // tạo nhiều vòng
                                    stroke={ring.color}
                                    strokeWidth={strokeWidth}
                                    strokeDasharray={`${circumference * ring.progress} ${circumference}`}
                                    strokeLinecap="round"  // 👈 bo tròn đầu thật sự
                                    fill="none"
                                    rotation="-90"
                                    originX={size / 2}
                                    originY={size / 2}
                                />
                                ))}
                            </Svg> */}

                        </View>

                    </View>

                    {/* Chú thích */}
                    <View className="flex-row flex-wrap flex-1 -mx-3">
                        {pieData.map(renderLegendItem)}
                    </View>
                </View>
            </View>
        </View>
    );
};

export default SalesPieChart;
