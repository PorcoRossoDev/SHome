import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from "react-native";
import * as HeroOutline from "react-native-heroicons/outline";
import { ReportCustomerStack, ReportOrderStack, ReportOverviewStack } from './stack';



const Stack = createNativeStackNavigator();
const ReportScreen = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="ReportOverviewStack"
        component={ReportOverviewStack}
        options={{ title: 'Báo cáo', headerBackVisible: false, }}
      />
      <Stack.Screen
        name="ReportCustomerStack"
        component={ReportCustomerStack}
        options={ ({navigation}) => ({ 
          title: 'Công việc', 
          headerBackVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="">
              <HeroOutline.ChevronLeftIcon size={22} color="#000" />
            </TouchableOpacity>
          )
        })}
      />
      <Stack.Screen
        name="ReportOrderStack"
        component={ReportOrderStack}
        options={ ({navigation}) => ({ 
          title: 'Đơn hàng', 
          headerBackVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="">
              <HeroOutline.ChevronLeftIcon size={22} color="#000" />
            </TouchableOpacity>
          )
        })}
      />
    </Stack.Navigator>
  );
};

export default ReportScreen;
