import { Text, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";

const SalesPieChart = () => {
    const pieData = [
        { label: "Hà Nội", value: 20, color: "#5128A5", gradientCenterColor: "#006DFF" },
        { label: "Hồ Chí Minh", value: 22, color: "#733FE9", gradientCenterColor: "#3BE9DE" },
        { label: "Tỉnh/Công ty", value: 16, color: "#A885EC", gradientCenterColor: "#8F80F3" },
        { label: "Không có tiềm năng", value: 18, color: "#2DAC81", gradientCenterColor: "#FF7F97" },
        { label: "Sàn TMĐT", value: 10, color: "#3CCF9D", gradientCenterColor: "#FF7F97" },
        { label: "Black List/Chặn", value: 10, color: "#90E0C5", gradientCenterColor: "#FF7F97" },
    ];

    const renderDot = (color) => (
        <View className="w-2.5 h-2.5 rounded-full mr-2" style={{ backgroundColor: color }} />
    );

    const renderLegendItem = ({ label, color, value }) => (
        <View key={label} className="flex-row items-center mb-2 w-1/2">
            {renderDot(color)}
            <Text className="text-f13">{`${label}: ${value}%`}</Text>
        </View>
    );

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
                <Text className="font-medium text-f14 mb-4 uppercase">
                    Doanh thu bán hàng chi tiết trong năm 2
                </Text>
                <View className='mt-3'>
                    {/* Biểu đồ */}
                    <View className="items-center mb-4">
                        <View className=''>
                            <PieChart
                                data={pieData}
                                donut
                                // showGradient
                                sectionAutoFocus
                                radius={100}
                                innerRadius={70}
                                isAnimated
                                animationDuration={300}
                                innerCircleColor={"#fff"}
                                centerLabelComponent={() => (
                                    <View className="items-center">
                                        <Text className="text-[19px] font-bold">47%</Text>
                                        <Text className="text-[14px]">Excellent</Text>
                                    </View>
                                )}
                            />
                        </View>

                    </View>

                    {/* Chú thích */}
                    <View className="flex-row flex-wrap">
                        {pieData.map(renderLegendItem)}
                    </View>
                </View>
            </View>
        </View>
    );
};

export default SalesPieChart;
