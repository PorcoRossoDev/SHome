import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import * as HeroOutline from "react-native-heroicons/outline";
import HeaderJob from '../../../components/job/HeaderJob';
import { JobAddStack, JobCancelledStack, JobListStack, JobOverviewStack, JobPenddingStack } from './stack';

const Stack = createNativeStackNavigator();
const JobScreen = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
    }}
    >
      <Stack.Screen
        name="JobOverviewStack"
        component={JobOverviewStack}
        options={ ({navigation}) => ({ 
          title: 'Công việc', 
          headerBackVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="">
              <HeroOutline.XMarkIcon size={22} color="#000" />
            </TouchableOpacity>
          )
        })}
      />
      <Stack.Screen
        name="JobPenddingStack"
        component={JobPenddingStack}
        options={({navigation, route}) => ({
          header: () => <HeaderJob 
            title={'Công việc quá hạn'} 
            layoutOrder={route.params?.layoutOrder ?? false}
              onToggleLayout={() => {
                const current = route.params?.layoutOrder ?? false
                navigation.setParams({ layoutOrder: !current })
              }}
            navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="JobAddStack"
        component={JobAddStack}
        options={ ({navigation}) => ({ 
          title: 'Tạo công việc', 
          headerBackVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="">
              <HeroOutline.XMarkIcon size={22} color="#000" />
            </TouchableOpacity>
          )
        })}
      />
      <Stack.Screen
          name="JobListStack"
          component={JobListStack}
          options={({navigation, route}) => ({
            header: () => <HeaderJob 
              title={'Danh sách công việc'} 
              layoutOrder={route.params?.layoutOrder ?? false}
                onToggleLayout={() => {
                  const current = route.params?.layoutOrder ?? false
                  navigation.setParams({ layoutOrder: !current })
                }}
              navigation={navigation} />,
          })}
        />
      <Stack.Screen
          name="JobCancelledStack"
          component={JobCancelledStack}
          options={({navigation, route}) => ({
            header: () => <HeaderJob 
              title={'Danh sách công việc huỷ'} 
              layoutOrder={route.params?.layoutOrder ?? false}
                onToggleLayout={() => {
                  const current = route.params?.layoutOrder ?? false
                  navigation.setParams({ layoutOrder: !current })
                }}
              navigation={navigation} />,
          })}
        />
    </Stack.Navigator>
  );
};

export default JobScreen;