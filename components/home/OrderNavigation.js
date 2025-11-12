import { useNavigation } from "@react-navigation/native";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import * as HeroOutline from "react-native-heroicons/outline";
const orders = [
  {
    id: "1",
    title: "Tổng đơn hàng",
    value: "225.435.678 ₫",
    count: 117,
    color: "bg-blue-500",
    icon: HeroOutline.ShoppingCartIcon,
    navigation: 'OrderListStack'
  },
  {
    id: "2",
    title: "Hoàn thành",
    value: "225.435.678 ₫",
    count: 90,
    color: "bg-green-500",
    icon: HeroOutline.CheckCircleIcon,
    navigation: 'OrderListStack'
  },
  {
    id: "3",
    title: "Đã thanh toán",
    value: "225.435.678 ₫",
    count: 88,
    color: "bg-purple-500",
    icon: HeroOutline.CreditCardIcon,
    navigation: 'OrderListStack'
  },
  {
    id: "4",
    title: "Chưa thanh toán",
    value: "225.435.678 ₫",
    count: 21,
    color: "bg-yellow-400",
    icon: HeroOutline.ClockIcon,
    navigation: 'OrderListStack'
  },
  {
    id: "5",
    title: "Hẹn giao",
    value: "225.435.678 ₫",
    count: 17,
    color: "bg-sky-400",
    icon: HeroOutline.TruckIcon,
    navigation: 'OrderListStack'
  },
  {
    id: "6",
    title: "Công nợ",
    value: "225.435.678 ₫",
    count: 0,
    color: "bg-red-400",
    icon: HeroOutline.ArrowDownCircleIcon,
    navigation: 'OrderListStack'
  },
];

export default function OrderListScreen() {
  const navigation = useNavigation();
  return (
    <View className="px-5 pt-0">
      <Text className="text-xl font-sfmedium text-gray-800 mb-4">
        Danh Sách Đơn Hàng
      </Text>

      <FlatList
        scrollEnabled={false}
        data={orders}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => {
          const Icon = item.icon;
          return (
            <TouchableOpacity
              activeOpacity={0.9}
              className="mb-3"
              onPress={()=>navigation.navigate(item.navigation)}
            >
              <View
                className="flex-row items-center bg-white p-4 rounded-3xl"
                style={{
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 8 },
                  shadowOpacity: 0.03,
                  shadowRadius: 12,
                  elevation: 1,
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
  );
}
