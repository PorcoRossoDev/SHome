import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { useCallback, useRef, useState } from 'react';
import { Dimensions, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { BellIcon } from 'react-native-heroicons/solid';
import { SegmentedButtons } from 'react-native-paper';
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
        { id: '1', name: 'Thêm sản phẩm', icon: 'FolderIcon' },
        { id: '2', name: 'Tạo đơn hàng', icon: 'ShoppingCartIcon' },
        { id: '3', name: 'Quản lý nhân viên', icon: 'UserGroupIcon' },
        { id: '4', name: 'Tạo phiếu chi', icon: 'ClipboardIcon' },
        { id: '5', name: 'Báo cáo doanh thu', icon: 'ChartPieIcon' },
        { id: '6', name: 'Quản lý kho', icon: 'FolderIcon' },
        { id: '7', name: 'Quản lý giao hàng', icon: 'FolderIcon' },
        { id: '8', name: 'Tạo phiếu kiểm hàng', icon: 'FolderIcon' },
        { id: '9', name: 'Số quỹ', icon: 'FolderIcon' },
        { id: 'all', name: 'Xem thêm', icon: 'FolderPlusIcon' },
    ]
    const [activeActions, setActiveActions] = useState(['1', '2', '3', '4', '5', '6', 'all']);
    const actionListActive = actionList.filter(item => activeActions.includes(item.id));
    /*=== END: Modal - Thao tác nhanh ===*/

    return (
        <View className='flex-1 relative bg-white mb-4'>
            <View className='bg-primary py-6 px-5 flex flex-row justify-between'>
                <Text className='text-white font-bold text-xl'>Scent Home</Text>
                <TouchableOpacity className='relative'>
                    <BellIcon color='white' width='25' height='25' />
                    <Text className='w-5 h-5 text-center leading-5 text-white rounded-full font-bold text-f10 absolute bottom-[-5px] right-[-5px] bg-red-600'>10</Text>
                </TouchableOpacity>
            </View>
            <ScrollView className=''>
                <View className="flex-1 m-4">
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
                <View className='px-4'>
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

                {/* Thao tác nhanh */}
                <View className='px-4'>
                    <View className='flex flex-row justify-between mt-6'>
                        <Text className='uppercase font-nunito-bold text-f15'>Thao tác nhanh</Text>
                        <TouchableOpacity onPress={openSheet}>
                            <Text className='text-blue-600 text-f15 font-medium'>Tuỳ chỉnh</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="flex-row flex-wrap mt-6">
                        {actionListActive.map((item, index) => (
                            <View key={index} className="w-1/4">
                                <ActionItem name={item.name} icon={item.icon} variant={item?.variant ?? 'solid'} />
                            </View>
                        ))}
                    </View>
                </View>

                {/* Danh sách đơn hàng */}
                <OrderNavigation />
                
            </ScrollView>
            <BottomSheetActions ref={bottomSheetRef} onClose={closeSheet} actionList={actionList} activeActions={activeActions} />
        </View>
    );
}

export default HomeScreen