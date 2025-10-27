import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeaderDisbursement from '../../../components/disbursement/HeaderDisbursement';
import { DisbursemenCanclledStack, DisbursementAddStack, DisbursementOverviewStack, DisbursementPenddingStack } from './stack';

const Stack = createNativeStackNavigator();
const DisbursementScreen = () => {
  const navigation = useNavigation();
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
        options={({navigation, route}) => ({
          header: () => <HeaderDisbursement title={'Tạo phiếu chi'} navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="DisbursementPenddingStack"
        component={DisbursementPenddingStack}
        options={({navigation, route}) => ({
          header: () => <HeaderDisbursement title={'Phiếu chi cần xử lý'} navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="DisbursemenCanclledStack"
        component={DisbursemenCanclledStack}
        options={({navigation, route}) => ({
          header: () => <HeaderDisbursement title={'Phiếu chi đã huỷ'} navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
};

export default DisbursementScreen;
