import { ScrollView, Text, View } from 'react-native';
import DisbursementItem from '../../../../components/disbursement/DisbursementItem';

const DisbursementPenddingStack = () => {
    return (
        <ScrollView className='px-4 bg-white'>
            <View className='mt-6'>
                <Text className='text-gray-500 font-sfregular text-f15'>2.207 phiếu chi</Text>
                <View className='mt-4'>
                    <DisbursementItem />
                    <DisbursementItem />
                    <DisbursementItem />
                    <DisbursementItem />
                    <DisbursementItem />
                </View>
            </View>
        </ScrollView>
    )
}

export default DisbursementPenddingStack