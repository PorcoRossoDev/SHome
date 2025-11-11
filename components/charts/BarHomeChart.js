import React from "react";
import { Dimensions, Text, View } from "react-native";
import Svg, { Rect, Text as SvgText } from "react-native-svg";

const BarHomeChart = () => {
  const screenWidth = Dimensions.get("window").width;
  const chartHeight = 240; //240

  const barData = [
    { value: 80, label: "Hà Nội", color: "#FF6B6B" },
    { value: 95, label: "HCM", color: "#FF8E53" },
    { value: 65, label: "Đà Nẵng", color: "#4ECDC4" },
    { value: 50, label: "Hải Phòng", color: "#5C7AEA" },
    { value: 40, label: "Cần Thơ", color: "#FFD93D" },
    { value: 30, label: "Khác", color: "#A8A8A8" },
    { value: 45, label: "Online", color: "#C084FC" },
  ];

  const numberOfBars = barData.length;
  const spacing = 20;
  const barWidth = (screenWidth - spacing * (numberOfBars + 3)) / numberOfBars;
  const maxValue = Math.max(...barData.map((b) => b.value));

  return (
    <View>
      <View className="mb-3 px-4 hidden">
        <Text className="text-[20px] font-sfmedium">Doanh thu bán hàng</Text>
        <Text className="text-gray-500 mt-1 text-[12px]">
          Cập nhật lúc 17:30 20/01/2025
        </Text>
      </View>

      <Svg height={chartHeight} width={screenWidth}>
        {barData.map((item, index) => {
          const barHeight = (item.value / maxValue) * (chartHeight - 30); //. - 60
          const x = spacing + index * (barWidth + spacing);
          const y = chartHeight - barHeight - 0; // -40

          return (
            <React.Fragment key={index}>
              {/* Cột */}
              <Rect
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                rx={8}
                fill={item.color}
              />

              {/* Label giá trị */}
              <SvgText
                x={x + barWidth / 2}
                y={y - 5}
                fontSize="12"
                fill="#111827"
                fontWeight="bold"
                textAnchor="middle"
              >
                {item.value}%
              </SvgText>

              {/* Label tên thành phố - Chính */}
              {/* <SvgText
                x={x + barWidth / 2}
                y={chartHeight - 20}
                fontSize="12"
                fill="#000"
                textAnchor="middle"
              >
                <TSpan x={x + barWidth / 2} dy="0">
                  {item.label.split(" ")[0]}
                </TSpan>
                {item.label.split(" ")[1] && (
                  <TSpan x={x + barWidth / 2} dy="14">
                    {item.label.split(" ")[1]}
                  </TSpan>
                )}
              </SvgText> */}
            </React.Fragment>
          );
        })}
      </Svg>
      {/* Legend - chú giải */}
      {/* Legend - chú giải dạng ngang */}
      <View
        className='flex-row flex-wrap justify-center items-center mt-4 gap-4 px-3'
      >
        {barData.map((item, index) => (
          <View
            key={index}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: item.color,
                marginRight: 6,
              }}
            />
            <Text style={{ color: "#374151", fontSize: 13 }}>{item.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default BarHomeChart;
