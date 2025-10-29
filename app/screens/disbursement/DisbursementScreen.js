import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import HeaderDisbursement from '../../../components/disbursement/HeaderDisbursement';
import { DisbursemenCanclledStack, DisbursementAddStack, DisbursementListStack, DisbursementOverviewStack, DisbursementPenddingStack } from './stack';

const Stack = createNativeStackNavigator();
const DisbursementScreen = () => {
  const navigation = useNavigation();
  const [layoutDisbursement, setlayoutDisbursement] = useState(false)
  const [layoutCanclled, setLayoutCanclled] = useState(false)

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name="DisbursementOverviewStack"
        component={DisbursementOverviewStack}
        options={{ title: 'Phiếu chi', headerBackVisible: false, }}
      />
      <Stack.Screen
        name="DisbursementAddStack"
        component={DisbursementAddStack}
        options={({ navigation, route }) => ({
          header: () => <HeaderDisbursement title={'Tạo phiếu chi'} navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="DisbursementPenddingStack"
        component={DisbursementPenddingStack}
        options={({ navigation, route }) => ({
          header: () => <HeaderDisbursement
            title={'Phiếu chi cần xử lý'}
            layoutDisbursement={route.params?.layoutDisbursement ?? false}
            onToggleLayout={() => {
              const current = route.params?.layoutDisbursement ?? false
              navigation.setParams({ layoutDisbursement: !current })
            }}
            navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="DisbursemenCanclledStack"
        component={DisbursemenCanclledStack}
        options={({ navigation, route }) => ({
          header: () => <HeaderDisbursement
            title={'Phiếu chi đã huỷ'}
            layoutCanclled={route.params?.layoutCanclled ?? false}
            onToggleLayout={() => {
              const current = route.params?.layoutCanclled ?? false
              navigation.setParams({ layoutCanclled: !current })
            }}
            navigation={navigation}
          />,
        })}
      />
      <Stack.Screen
        name="DisbursementListStack"
        component={DisbursementListStack}
        options={({ navigation, route }) => ({
          header: () => <HeaderDisbursement
            title={'Danh sách phiếu chi'}
            layoutList={route.params?.layoutList ?? false}
            onToggleLayout={() => {
              const current = route.params?.layoutList ?? false
              navigation.setParams({ layoutList: !current })
            }}
            navigation={navigation}
          />,
        })}
      />
    </Stack.Navigator>
  );
};

export default DisbursementScreen;
