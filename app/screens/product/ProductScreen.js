import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import * as HeroOutline from "react-native-heroicons/outline";
import HeaderProduct from '../../../components/product/HeaderProduct';
import { ProductAddStack, ProductOverviewStack } from './stack';


const Stack = createNativeStackNavigator();
const ProductScreen = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name="ProductOverviewStack"
        component={ProductOverviewStack}
        options={({navigation, route}) => ({
          header: () => <HeaderProduct title={'Danh sách sản phẩm'} navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="ProductAddStack"
        component={ProductAddStack}
        options={ ({navigation}) => ({ 
          title: 'Tạo sản phẩm', 
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

export default ProductScreen;
