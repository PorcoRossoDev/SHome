import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Platform, Text, StyleSheet } from 'react-native';
import {
    HomeIcon,
    UserGroupIcon,
    CubeIcon,
    ListBulletIcon,
    ShoppingBagIcon
} from 'react-native-heroicons/solid';
import { HomeScreen, OrderScreen, OrtherScreen, ProductScreen, UserScreen } from '../screens';

const Tab = createBottomTabNavigator();

// Mảng cấu hình tab để dễ mở rộng
const tabs = [
    { name: 'Home', component: HomeScreen, icon: HomeIcon, label: 'Tổng quan' },
    { name: 'Order', component: OrderScreen, icon: ShoppingBagIcon, label: 'Đơn hàng' },
    { name: 'User', component: UserScreen, icon: UserGroupIcon, label: 'Khách hàng' },
    { name: 'Product', component: ProductScreen, icon: CubeIcon, label: 'Sản phẩm' },
    { name: 'Orther', component: OrtherScreen, icon: ListBulletIcon, label: 'Thêm' },
];


const AppNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#007bff',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    height: 70,
                    borderTopWidth: 1,
                    backgroundColor: 'white',
                    paddingTop: 5,
                    paddingBottom: 0,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: -3 },
                    shadowOpacity: 0.1,
                    shadowRadius: 4,
                    // marginTop: 20,
                    elevation: 0, // Android bỏ shadow mặc định
                },
                tabBarItemStyle: {
                    flexDirection: 'column',   // icon + label xếp theo cột
                    alignItems: 'center',      // căn giữa ngang
                    justifyContent: 'center',  // căn giữa dọc
                },
            }}
        >
            {tabs.map(({ name, component, icon: Icon, label }) => (
                <Tab.Screen
                    key={name}
                    name={name}
                    component={component}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Icon color={color} width={24} height={24} />
                        ),
                        tabBarLabel: ({ color }) => (
                            <Text className='font-medium text-sm text-center mt-1' style={{color:color}}>
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