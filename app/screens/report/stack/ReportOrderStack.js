import { useCallback, useEffect, useRef, useState } from 'react';
import { NativeModules, Platform, ScrollView, StatusBar, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import JobItemOrder from '../../../../components/job/JobItemOrder';


const ReportOrderStack = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  /*=== START: Tab - Biểu đồ ===*/
  const [index, setIndex] = useState(0);
  const segments = [
    { value: 0, label: 'Công việc đơn hàng' },
    { value: 1, label: 'Công việc' },
  ];
  /*=== END: Tab - Biểu đồ ===*/

  /*=== START: Modal - Thao tác nhanh ===*/
  const selectedIndex = segments.findIndex(s => s.value === index);
  const bottomSheetRef = useRef(null);
  const openSheet = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);
  const closeSheet = useCallback(() => {
    bottomSheetRef.current?.dismiss();
  }, []);

  const [paddingHeader, setPaddingHeader] = useState(
    Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 50
  );

  useEffect(() => {
    if (Platform.OS === 'ios') {
      const { StatusBarManager } = NativeModules;
      StatusBarManager.getHeight((statusBarFrameData) => {
        setPaddingHeader(statusBarFrameData.height);
      });
    }
  }, []);

  const insets = useSafeAreaInsets();

  return (
    <View className='flex-1 bg-white'>
      <ScrollView className='px-4 bg-white flex-1 relative'>
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
          <View
            className='py-3'>
            <View className='flex-row justify-between'>
              <Text className='font-sfmedium text-f16'>Nguyễn Mạnh Chiến</Text>
              <View className='flex-row flex-wrap items-center'>
                <Text className='text-f16 font-sfmedium'>21 công việc</Text>
              </View>
            </View>
            <View className='flex-row justify-between mt-1'>
              <View>
                <Text className='text-gray-500 font-sfregular text-f15 mt-1'>Thu đơn hàng</Text>
                <Text className='font-sfmedium text-center text-f14 mt-1'>950.000</Text>
              </View>
              <View>
                <Text className='text-gray-500 font-sfregular text-f15 mt-1'>Thu công việc</Text>
                <Text className='font-sfmedium text-center text-f14 mt-1'>450.000</Text>
              </View>
              <View>
                <Text className='text-gray-500 font-sfregular text-f15 text-right mt-1'>Tổng thu</Text>
                <Text className='font-sfmedium text-center text-f14 text-green-600 mt-1'>1.400.000</Text>
              </View>
            </View>
          </View>
        </View>
        <View className='mt-6'>
          <JobItemOrder />
          <JobItemOrder />
          <JobItemOrder />
          <JobItemOrder />
          <JobItemOrder />
          <JobItemOrder />
          <JobItemOrder />
        </View>
      </ScrollView>
    </View>
  );
};

export default ReportOrderStack;
