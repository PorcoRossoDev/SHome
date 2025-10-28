import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeaderPolicy from '../../../components/policy/HeaderPolicy';
import { PolicyListStack } from './stack';


const Stack = createNativeStackNavigator();
const PolicyScreen = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
    }}
    >
      {/* <Stack.Screen
        name="PolicyListStack"
        component={PolicyListStack}
        options={ ({navigation}) => ({ 
          title: 'Đơn hàng', 
          headerBackVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('ProductOverviewStack')}
              className="">
              <HeroOutline.ArrowLeftIcon size={22} color="#000" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('ProductOverviewStack')}
              className="">
              <HeroOutline.PlusIcon size={22} color="blue" />
            </TouchableOpacity>
          )
        })}
      /> */}
      <Stack.Screen
        name="PolicyListStack"
        component={PolicyListStack}
        options={({navigation, route}) => ({
          header: () => <HeaderPolicy title={'Danh sách chính sách giá'} navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
};

export default PolicyScreen;
