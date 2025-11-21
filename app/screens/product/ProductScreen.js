import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, TouchableOpacity, View } from 'react-native';
import * as HeroOutline from "react-native-heroicons/outline";
import HeaderProduct from '../../../components/product/HeaderProduct';
import { AttributeStack, ProductAddStack, ProductBrandStack, ProductCategoryStack, ProductOverviewStack } from './stack';


const Stack = createNativeStackNavigator();
const ProductScreen = () => {
  const navigation = useNavigation();

  const HeaderBar = ({ title, navigation, add = false, onAddPress }) => {
    return (
      <View
        className="bg-white flex-row justify-between items-center px-5"
        style={{
          backgroundColor: "white",
          borderRadius: 5,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 2,
          elevation: 2,
          paddingVertical: 12,
        }}
      >
        {/* Icon Back */}
        <TouchableOpacity
          className='flex-1'
          onPress={() => navigation.goBack()}
        >
          <HeroOutline.ArrowLeftIcon size={22} />
        </TouchableOpacity>

        {/* Title */}
        <Text
          className='font-sfbold text-f20 items-center w-[80%] text-center'
        >
          {title}
        </Text>
        {
          add ? (
          <TouchableOpacity
            onPress={onAddPress}
            className='flex-1 items-end'
          >
            <HeroOutline.PlusIcon size={22} />
          </TouchableOpacity>
          ) :
          (
            <View className='flex-1 items-end' />
          )
        }
      </View>
    )
  }

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
        name="ProductCategoryStack"
        component={ProductCategoryStack}
        options={({navigation, route}) => ({
          header: () => <HeaderBar title={'Loại sản phẩm'} add={true} navigation={navigation} onAddPress={route.params?.onAddPress} />,
        })}
      />
      <Stack.Screen
        name="ProductBrandStack"
        component={ProductBrandStack}
        options={({navigation, route}) => ({
          header: () => <HeaderBar title={'Nhãn hiệu'} add={true} navigation={navigation} onAddPress={route.params?.onAddPress} />,
        })}
      />
      <Stack.Screen
        name="AttributeStack"
        component={AttributeStack}
        options={({navigation, route}) => ({
          header: () => <HeaderBar title={'Thuộc tính'} add={true} navigation={navigation} onAddPress={route.params?.onAddPress} />,
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
