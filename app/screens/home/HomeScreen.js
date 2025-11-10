import SegmentedControl from "@react-native-segmented-control/segmented-control";
import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  Dimensions,
  NativeModules,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BellIcon, ChevronRightIcon } from "react-native-heroicons/solid";
import { SegmentedButtons } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BarHomeChart from "../../../components/charts/BarHomeChart";
import SalesPieChartAside from "../../../components/charts/SalesPieChartAside";
import SalesPieChartAside1 from "../../../components/charts/SalesPieChartAside1";

import {
  ActionItem,
  BottomSheetActions,
  OrderNavigation,
} from "../../../components/home";

const HomeScreen = () => {
  const { width } = Dimensions.get("window");
  const sideSpacing = 16;
  const navigation = useNavigation();

  /*=== START: Tab - Biểu đồ ===*/
  const [index, setIndex] = useState(0);
  const segments = [
    { value: 0, label: "Doanh thu" },
    { value: 1, label: "Nguồn khách" },
    { value: 2, label: "Phân bố" },
  ];
  /*=== END: Tab - Biểu đồ ===*/

  /*=== START: Modal - Thao tác nhanh ===*/
  const selectedIndex = segments.findIndex((s) => s.value === index);
  const bottomSheetRef = useRef(null);
  const openSheet = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);
  const closeSheet = useCallback(() => {
    bottomSheetRef.current?.dismiss();
  }, []);

  const actionList = [
    {
      id: "1",
      name: "Thêm sản phẩm",
      icon: "FolderIcon",
      navigateTo: { name: "Product", screen: "ProductAddStack" },
      background: "#3B82F6",
    },
    {
      id: "2",
      name: "Tạo đơn hàng",
      icon: "ShoppingCartIcon",
      navigateTo: { name: "Order", screen: "OrderAddStack" },
      background: "#22C55E",
    },
    {
      id: "3",
      name: "Quản lý nhân viên",
      icon: "UserGroupIcon",
      navigateTo: { name: "Product", screen: "ProductAddStack" },
      background: "#2563EB",
    },
    {
      id: "4",
      name: "Tạo phiếu chi",
      icon: "ClipboardIcon",
      navigateTo: { name: "Disbursement", screen: "DisbursementOverviewStack" },
      background: "#6366F1",
    },
    {
      id: "5",
      name: "Báo cáo doanh thu",
      icon: "ChartPieIcon",
      navigateTo: { name: "Report", screen: "ReportOverviewStack" },
      background: "#10B981",
    },
    {
      id: "6",
      name: "Quản lý kho",
      icon: "FolderIcon",
      navigateTo: { name: "Product", screen: "ProductAddStack" },
      background: "#F97316",
    },
    {
      id: "7",
      name: "Quản lý giao hàng",
      icon: "FolderIcon",
      navigateTo: { name: "Product", screen: "ProductAddStack" },
      background: "#FACC15",
    },
    {
      id: "8",
      name: "Tạo phiếu kiểm hàng",
      icon: "FolderIcon",
      navigateTo: { name: "Product", screen: "ProductAddStack" },
      background: "#EC4899",
    },
    {
      id: "9",
      name: "Số quỹ",
      icon: "FolderIcon",
      navigateTo: { name: "Product", screen: "ProductAddStack" },
      background: "#14B8A6",
    },
    {
      id: "10",
      name: "Công việc",
      icon: "FolderIcon",
      navigateTo: { name: "Job", screen: "JobOverviewStack" },
      background: "#8B5CF6",
    },
    {
      id: "all",
      name: "Xem thêm",
      icon: "FolderPlusIcon",
      navigateTo: { name: "Product", screen: "ProductAddStack" },
      background: "#EF4444",
    },
  ];
  const [activeActions, setActiveActions] = useState([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "10",
    "all",
  ]);
  const actionListActive = actionList.filter((item) =>
    activeActions.includes(item.id)
  );
  const handleActionToggle = (id) => {
    setActiveActions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };
  /*=== END: Modal - Thao tác nhanh ===*/

  const [paddingHeader, setPaddingHeader] = useState(
    Platform.OS === "android" ? StatusBar.currentHeight + 10 : 50
  );

  useEffect(() => {
    if (Platform.OS === "ios") {
      const { StatusBarManager } = NativeModules;
      StatusBarManager.getHeight((statusBarFrameData) => {
        setPaddingHeader(statusBarFrameData.height + 20);
      });
    }
  }, []);

  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-gray-50">
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      {/* <LinearGradient
                colors={['#245de9', '#2d65ec', '#356cef', '#3e74f2', '#467bf4']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 300,
                    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : insets.top,

                    // paddingTop: 100,
                    // paddingHorizontal: 20,
                    zIndex: 10,
                }}
            >
            </LinearGradient> */}

      {/* <LinearGradient
                colors={['#f85b5f', '#e74448', '#d32f2f', '#c9252b', '#a51f25']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 300,
                    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : insets.top,
                    zIndex: 10,
                }}
                ></LinearGradient> */}

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

      <View
        className="pt-3 px-5 pb-5 flex flex-row justify-between relative z-50 bg-[#c9252b]"
        style={{ paddingTop: paddingHeader }}
      >
        <Text className="text-white font-sfbold text-f20">Scent Home</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Orther", { screen: "LogStack" })}
          className="relative"
        >
          <BellIcon color="white" width="25" height="25" />
          <Text
            className={`w-5 h-5 text-center leading-5 text-white rounded-full font-bold text-f10 absolute ${
              Platform.OS == "ios" ? "-top-[5px]" : "top-[-7px]"
            } right-[-5px] bg-yellow-400`}
          >
            10
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView className="relative z-50 mt-5">
        <View className="">
          <View className="mb-4 px-5 hidden">
            <View className="bg-gray-100 rounded-xl p-0.5">
              {Platform.OS === "ios" ? (
                <SegmentedControl
                  values={segments.map((s) => s.label)}
                  selectedIndex={selectedIndex}
                  onChange={(event) => {
                    const newIndex = event.nativeEvent.selectedSegmentIndex;
                    setIndex(segments[newIndex].value);
                  }}
                />
              ) : (
                <SegmentedButtons
                  value={index}
                  onValueChange={(val) => setIndex(val)}
                  buttons={segments.map((s, i) => ({
                    value: s.value,
                    label: s.label,
                    style: {
                      borderRadius: 10,
                      //borderColor: '#007AFF',
                      borderWidth: 0,
                      backgroundColor:
                        index === s.value ? "#fff" : "transparent",
                      //marginLeft: i === 0 ? 0 : -1, // dính liền các nút
                    },
                    labelStyle: {
                      //color: index === s.value ? 'white' : '#007AFF',
                      //fontWeight: '500',
                      fontSize: 14,
                    },
                  }))}
                  style={{
                    // margin:9,
                    borderRadius: 10,
                    padding: 3,
                    //overflow: 'hidden',
                    borderColor: "#007AFF",
                    borderWidth: 0,
                    backgroundColor: "#ecebeb",
                  }}
                />
              )}
            </View>
          </View>

          <View className="flex-1 px-5 mt-1">
            {index === 0 && <BarHomeChart />}
            {index === 1 && <SalesPieChartAside1 />}
            {index === 2 && <SalesPieChartAside />}
          </View>

          <View className="px-5 mb-3 mt-2">
            <TouchableOpacity
              className="flex-row justify-between py-4 px-5"
              // style={{
              //     backgroundColor: "white",
              //     borderRadius: 10,
              //     // paddingVertical: 16,
              //     // Shadow cho iOS
              //     shadowColor: "#000",
              //     shadowOffset: { width: 0, height: 4 },
              //     shadowOpacity: 0.05,
              //     shadowRadius: 6,
              //     // Shadow cho Android
              //     elevation: 6,
              // }}
              style={{
                backgroundColor: "#fff",
                borderRadius: 10,
                paddingVertical: 15,
                // iOS
                shadowColor: "#0e3f7e", // màu gần giống web
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 10,
                // Android
                elevation: 1,
              }}
            >
              <Text className="font-sfmediaum text-[15px]">
                Danh sách đơn hàng hôm nay
              </Text>
              <View>
                <ChevronRightIcon size={19} color={"#000"} />
              </View>
            </TouchableOpacity>
          </View>

          <View className=" ">
            {/* Thao tác nhanh */}
            <View className="px-5">
              <View
                className="mt-3"
                // style={{
                //     backgroundColor: "white",
                //     borderRadius: 10,
                //     // paddingVertical: 16,
                //     // Shadow cho iOS
                //     shadowColor: "#000",
                //     shadowOffset: { width: 0, height: 4 },
                //     shadowOpacity: 0.05,
                //     shadowRadius: 6,
                //     // Shadow cho Android
                //     elevation: 6,
                // }}

                // style={{
                //     backgroundColor: '#fff',
                //     borderRadius: 10,
                //     // paddingVertical: 15,
                //     // iOS
                //     shadowColor: '#0e3f7e',           // màu gần giống web
                //     shadowOffset: { width: 0, height: 4 },
                //     shadowOpacity: 0.1,
                //     shadowRadius: 10,
                //     // Android
                //     elevation: 2,
                // }}

                style={{
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.08,
                  shadowRadius: 10,
                  elevation: 4,
                  backgroundColor: "#FFFFFF",
                  borderRadius: 16,
                }}
              >
                <View className="flex flex-row justify-between mt-6 px-5">
                  <Text className="uppercase font-sfmedium text-f15">
                    Thao tác nhanh
                  </Text>
                  <TouchableOpacity onPress={openSheet}>
                    <Text className="text-blue-600 text-f15 font-sfmedium">
                      Tuỳ chỉnh
                    </Text>
                  </TouchableOpacity>
                </View>
                <View className="flex-row flex-wrap mt-6">
                  {actionListActive.map((item, index) => (
                    <View key={index} className="w-1/4">
                      <ActionItem
                        name={item.name}
                        icon={item.icon}
                        variant={item?.variant ?? "solid"}
                        navigateTo={item.navigateTo}
                        navigation={navigation}
                        background={item.background}
                      />
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </View>

          {/* Danh sách đơn hàng */}
          <View className="mt-7 mb-5 ">
            <OrderNavigation />
          </View>
        </View>
      </ScrollView>
      <BottomSheetActions
        ref={bottomSheetRef}
        onClose={closeSheet}
        actionList={actionList}
        activeActions={activeActions}
        handleActionToggle={handleActionToggle}
      />
    </View>
  );
};

export default HomeScreen;
