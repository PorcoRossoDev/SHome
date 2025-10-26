import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import {
    CubeIcon,
    HomeIcon,
    ListBulletIcon,
    ShoppingBagIcon,
    UserGroupIcon
} from 'react-native-heroicons/outline';
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
        // <Tab.Navigator
        //     screenOptions={{
        //         headerShown: false,
        //         tabBarActiveTintColor: '#007bff',
        //         tabBarInactiveTintColor: 'gray',
        //         tabBarShowLabel: false,       // 👉 ẩn text dưới icon

        //         tabBarStyle: {
        //             height: 70,
        //             borderTopWidth: 1,
        //             backgroundColor: 'white',
        //             paddingTop: 5,
        //             paddingBottom: 0,
        //             shadowColor: '#000',
        //             shadowOffset: { width: 0, height: -3 },
        //             shadowOpacity: 0.1,
        //             shadowRadius: 4,
        //             // marginTop: 20,
        //             elevation: 0, // Android bỏ shadow mặc định
        //         },
        //         tabBarItemStyle: {
        //             flexDirection: 'column',   // icon + label xếp theo cột
        //             alignItems: 'center',      // căn giữa ngang
        //             justifyContent: 'center',  // căn giữa dọc
        //             backgroundColor: 'red',
        //         },
        //     }}
        // >
        //     {tabs.map(({ name, component, icon: Icon, label }) => (
        //         <Tab.Screen
        //             key={name}
        //             name={name}
        //             component={component}
        //             options={{
        //                 tabBarIcon: ({ color }) => (
        //                     <View className='bg-gray-100 flex-1 w-12 h-12 justify-center items-center rounded-xl'>
        //                         <Icon color={color} width={24} height={24} />
        //                     </View>
        //                 ),
        //                 // tabBarLabel: ({ color }) => (
        //                 //     <Text className='font-sfmedium text-f14 text-center mt-1 hidden' style={{color:color}}>
        //                 //         {label}
        //                 //     </Text>
        //                 // ),
        //             }}
        //         />
        //     ))}
        // </Tab.Navigator>

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
            {tabs.map(({ name, component, icon: Icon, label }) => (
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
                        tabBarLabel: ({ color, focused }) => (
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