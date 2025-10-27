import { ScrollView, Text, View } from 'react-native';
import DisbursementItem from '../../../../components/disbursement/DisbursementItem';

const DisbursemenCanclledStack = ({ navigation }) => {
  return (
    <ScrollView className='px-4'>
      <View className='mt-6'>
        <Text className='text-gray-500 text-f14'>2.207 phiếu chi</Text>
        <View className='mt-4'>
          <DisbursementItem />
          <DisbursementItem />
          <DisbursementItem />
          <DisbursementItem />
          <DisbursementItem />
          <DisbursementItem />
          <DisbursementItem />
        </View>
      </View>
    </ScrollView>
  );
};

export default DisbursemenCanclledStack;
