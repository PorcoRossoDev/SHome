import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import * as HeroOutline from "react-native-heroicons/outline";
import HeaderOrderCancelled from '../../../components/order/HeaderOrder';
import { CustomerGroupStack, CustomerListStack, CustomerOverDueStack, CustomerOverviewStack, CustomerPenddingStack } from './stack';

const Stack = createNativeStackNavigator();
const Customer = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
    }}
    >
      <Stack.Screen
        name="CustomerOverviewStack"
        component={CustomerOverviewStack}
        options={{ title: 'Khách hàng', headerBackVisible: false, navigation:navigation }}
      />
      <Stack.Screen
        name="CustomerListStack"
        component={CustomerListStack}
        options={({navigation, route}) => ({
          header: () => <HeaderOrderCancelled title={'Khách hàng'} navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="CustomerAllStack"
        component={CustomerListStack}
        options={({navigation, route}) => ({
          header: () => <HeaderOrderCancelled title={'Tổng khách hàng'} navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="CustomerNewStack"
        component={CustomerListStack}
        options={({navigation, route}) => ({
          header: () => <HeaderOrderCancelled title={'Khách hàng mới'} navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="CustomerPenddingStack"
        component={CustomerPenddingStack}
        options={({navigation, route}) => ({
          header: () => <HeaderOrderCancelled title={'Khách hàng cần xử lý'} navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="CustomerOverDueStack"
        component={CustomerOverDueStack}
        options={({navigation, route}) => ({
          header: () => <HeaderOrderCancelled title={'Khách hàng quá hạn'} navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="CustomerGroupStack"
        component={CustomerGroupStack}
        options={ ({navigation}) => ({ 
          title: 'Nhóm khách hàng', 
          headerBackVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('ProductOverviewStack')}
              className="">
              <HeroOutline.XMarkIcon size={22} color="#000" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('ProductOverviewStack')}
              className="">
              <HeroOutline.CheckIcon size={22} color="#000" />
            </TouchableOpacity>
          )
        })}
      />
    </Stack.Navigator>
  );
};

export default Customer;
