import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { LinearGradient } from 'expo-linear-gradient';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Dimensions, NativeModules, Platform, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { BellIcon } from 'react-native-heroicons/solid';
import { SegmentedButtons } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SalesPieChart from '../../../components/charts/SalesPieChart';



import { ActionItem, BottomSheetActions, OrderNavigation } from '../../../components/home';

const HomeScreen = () => {
    const { width } = Dimensions.get('window');
    const sideSpacing = 16;

    /*=== START: Tab - Biểu đồ ===*/
    const [index, setIndex] = useState(0);
    const segments = [
        { value: 0, label: 'Doanh thu' },
        { value: 1, label: 'Nguồn khách' },
        { value: 2, label: 'Phân bố' },
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

    const actionList = [
        { id: '1', name: 'Thêm sản phẩm', icon: 'FolderIcon' , background: '#4ade80' },
        { id: '2', name: 'Tạo đơn hàng', icon: 'ShoppingCartIcon' , background: '#facc15' },
        { id: '3', name: 'Quản lý nhân viên', icon: 'UserGroupIcon' , background: '#facc15' },
        { id: '4', name: 'Tạo phiếu chi', icon: 'ClipboardIcon' , background: '#4ade80' },
        { id: '5', name: 'Báo cáo doanh thu', icon: 'ChartPieIcon' , background: '#2563eb' },
        { id: '6', name: 'Quản lý kho', icon: 'FolderIcon' , background: '#4ade80' },
        { id: '7', name: 'Quản lý giao hàng', icon: 'FolderIcon' , background: '#4ade80' },
        { id: '8', name: 'Tạo phiếu kiểm hàng', icon: 'FolderIcon' , background: '#2563eb' },
        { id: '9', name: 'Số quỹ', icon: 'FolderIcon' , background: '#2563eb' },
        { id: 'all', name: 'Xem thêm', icon: 'FolderPlusIcon' , background: '#4ade80' },
    ]
    const [activeActions, setActiveActions] = useState(['1', '2', '3', '4', '5', '6', 'all']);
    const actionListActive = actionList.filter(item => activeActions.includes(item.id));
    /*=== END: Modal - Thao tác nhanh ===*/


    const [paddingHeader, setPaddingHeader] = useState(
        Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 50
    );

    useEffect(() => {
        if (Platform.OS === 'ios') {
            const { StatusBarManager } = NativeModules;
            StatusBarManager.getHeight((statusBarFrameData) => {
                setPaddingHeader(statusBarFrameData.height + 20);
            });
        }
    }, []);

      const insets = useSafeAreaInsets();

    return (
        <View className='flex-1 bg-gray-50'>
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

            <LinearGradient
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
                ></LinearGradient>

            <View className='py-3 px-5 flex flex-row justify-between relative z-50' style={{paddingTop: paddingHeader}}>
                <Text className='text-white font-sfbold text-f20'>Scent Home</Text>
                <TouchableOpacity className='relative'>
                    <BellIcon color='white' width='25' height='25' />
                    <Text className='w-5 h-5 text-center leading-5 text-white rounded-full font-bold text-f10 absolute bottom-[-5px] right-[-5px] bg-yellow-400'>10</Text>
                </TouchableOpacity>
            </View>
            <ScrollView className='relative z-50 mt-3'>
                <View className=''>

                    <View className='hidden'>
                        <View className='mb-4 px-5'>
                            {Platform.OS === 'ios' ? (
                                <SegmentedControl
                                    values={segments.map(s => s.label)}
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
                                            backgroundColor: index === s.value ? '#fff' : 'transparent',
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
                                        borderColor: '#007AFF',
                                        borderWidth: 0,
                                        backgroundColor: '#ecebeb'
                                    }}
                                />
                            )}
                        </View>
                    </View>

                    <View className="flex-1 px-5">
                        {index === 0 && (
                            <SalesPieChart />
                        )}
                        {index === 1 && (
                            <SalesPieChart />
                        )}
                        {index === 2 && (
                            <SalesPieChart />
                        )}
                    </View>

                    <View className='bg-gray-50 px-5'>

                        {/* Thao tác nhanh */}
                        <View className=''>
                            <View className='flex flex-row justify-between mt-4'>
                                <Text className='uppercase font-sfmedium text-f15'>Thao tác nhanh</Text>
                                <TouchableOpacity onPress={openSheet}>
                                    <Text className='text-blue-600 text-f15 font-sfmedium'>Tuỳ chỉnh</Text>
                                </TouchableOpacity>
                            </View>
                            <View 
                                className='mt-5'
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
                                <View className="flex-row flex-wrap mt-6">
                                    {actionListActive.map((item, index) => (
                                        <View key={index} className="w-1/4">
                                            <ActionItem name={item.name} icon={item.icon} variant={item?.variant ?? 'solid'} background={item.background} />
                                        </View>
                                    ))}
                                </View>
                            </View>
                        </View>

                        {/* Danh sách đơn hàng */}
                        <View className='mt-7 mb-5'>
                            <OrderNavigation />
                        </View>
                    </View>

                </View>
            </ScrollView>
            <BottomSheetActions ref={bottomSheetRef} onClose={closeSheet} actionList={actionList} activeActions={activeActions} />
        </View>
    );
}

export default HomeScreen