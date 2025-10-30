import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ReportOverviewStack } from './stack';

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
    </Stack.Navigator>
  );
};

export default ReportScreen;
