import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import * as HeroOutline from "react-native-heroicons/outline";
import { ActivityStack, OrtherSettingStack, SettingStoreStack } from './stack';


const Stack = createNativeStackNavigator();
const OrtherScreen = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
    }}
    >
      <Stack.Screen
        name="OrtherSettingStack"
        component={OrtherSettingStack}
        options={{ title: 'Cài đặt', headerBackVisible: false, }}
      />
      <Stack.Screen
        name="ActivityStack"
        component={ActivityStack}
        options={{ title: '', headerBackVisible: false, }}
      />
      <Stack.Screen
        name="SettingStoreStack"
        component={SettingStoreStack}
        options={ ({navigation}) => ({ 
          title: 'Thông tin cửa hàng', 
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
}

export default OrtherScreen