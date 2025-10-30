import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import {
    CubeIcon,
    HomeIcon,
    ListBulletIcon,
    ShoppingBagIcon,
    UserGroupIcon
} from 'react-native-heroicons/outline';
import { DisbursementScreen, HomeScreen, OrderScreen, OrtherScreen, PolicyScreen, ProductScreen, ReportScreen, SalesSourceScreen, UserScreen } from '../screens';

const Tab = createBottomTabNavigator();

// Mảng cấu hình tab để dễ mở rộng
const tabs = [
    { name: 'Home', component: HomeScreen, icon: HomeIcon, hidden: false, label: 'Tổng quan' },
    { name: 'Order', component: OrderScreen, icon: ShoppingBagIcon, hidden: false, label: 'Đơn hàng' },
    { name: 'User', component: UserScreen, icon: UserGroupIcon, hidden: false, label: 'Khách hàng' },
    { name: 'Product', component: ProductScreen, icon: CubeIcon, hidden: false, label: 'Sản phẩm' },
    { name: 'Orther', component: OrtherScreen, icon: ListBulletIcon, hidden: false, label: 'Thêm' },
    { name: 'Disbursement', component: DisbursementScreen, icon: ListBulletIcon, hidden: true, label: 'Phiếu chi' },
    { name: 'Policy', component: PolicyScreen, icon: ListBulletIcon, hidden: true, label: 'Chính sách giá' },
    { name: 'SalesSource', component: SalesSourceScreen, icon: ListBulletIcon, hidden: true, label: 'Nguồn' },
    { name: 'Report', component: ReportScreen, icon: ListBulletIcon, hidden: true, label: 'Báo cáo' },
];

const AppNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                // tabBarShowLabel: false,
                tabBarStyle: {
                    height: 60,
                    // borderTopWidth: 1,
                    // backgroundColor: 'white',
                    // shadowColor: '#000',
                    // shadowOffset: { width: 0, height: -3 },
                    // shadowOpacity: 0.05,
                    // shadowRadius: 4,
                    // elevation: 3,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 6,
                    // Shadow cho Android
                    elevation: 6,
                    paddingTop: 0,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    //justifyContent: 'center',  
                    flexDirection: 'row',
                    justifyContent: 'flex-start', // hoặc 'space-around'
                },
                tabBarItemStyle: {
                    // justifyContent: '',
                    alignItems: 'center',
                    // paddingVertical: 8,  // canh giữa icon
                },
            }}
        >
            {tabs.map(({ name, component, icon: Icon, hidden, label }) => (
                <Tab.Screen
                    key={name}
                    name={name}
                    component={component}
                    options={{
                        tabBarIcon: ({ color, focused }) => (
                            <View
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    // backgroundColor: focused ? '#FBEAEC' : '',
                                    // width: 40,
                                    // height: 40,
                                    // borderRadius: 12,
                                }}
                            >
                                <Icon color={focused ? '#D70404' : color} size={21} />
                            </View>
                        ),

                        // Ẩn tab khi hidden là true
                        tabBarButton: hidden ? () => null : undefined,
                        tabBarItemStyle: hidden ? { display: 'none' } : {},
                        tabBarLabel: hidden ? undefined : ({ color, focused }) => (
                            <Text className='font-sfmedium text-f12 text-center' style={{color: (focused ? '#D70404' : '#222')}}>
                                {label}
                            </Text>
                        ),
                    }}
                />
            ))}
        </Tab.Navigator>
    );
};

export default AppNavigation;