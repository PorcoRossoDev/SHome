import { useState } from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import PolicyPriceItem from '../../../../components/policy/PolicyPriceItem';

const JobOverviewStack = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <View className='flex-1 bg-white'>
      <ScrollView className='px-4 bg-white flex-1 relative'>
        <View className='mt-6'>
          <View className='mt-4'>
            <PolicyPriceItem openModal={openModal} />
          </View>
        </View>
      </ScrollView>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.backdrop}>
          <View className='bg-white w-[80%] rounded-lg'>
            <View className='px-3 py-3'>
              <Text className='text-center font-sfbold mb-4 text-f17 mt-2'>Cập nhật chính sách giá</Text>
                <View>
                  <Text className='text-red-600 font-sfregular'>* <Text className='text-gray-500 font-sfregular'>Tên chính sách giá</Text></Text>
                  <TextInput 
                    value='Đơn giao xa'
                    className='border-b border-gray-200 py-2 font-sfregular text-f15'
                  />
                </View>
                <View className='mt-4'>
                  <Text className='text-red-600 font-sfregular'>* <Text className='text-gray-500 font-sfregular'>Giá (VND)</Text></Text>
                  <TextInput 
                    value='100.000'
                    className='border-b border-gray-200 py-2 font-sfregular text-f15'
                  />
                </View>
            </View>
            
            <View className='mt-4 flex-row border-t border-gray-300'>
              <Pressable className='w-1/2 justify-center border-r border-gray-300' onPress={closeModal}>
                <Text className='text-center text-blue-600 py-4 text-f15 font-sfmedium'>Thoát</Text>
              </Pressable>
              <Pressable className='flex-1' onPress={closeModal}>
                <Text className='text-center text-blue-600 py-4 text-f15 font-sfmedium'>Cập nhật</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)', // 🔥 lớp mờ nền
    justifyContent: 'center',
    alignItems: 'center',
  },
  backdropTouchable: {
    ...StyleSheet.absoluteFillObject, // cho phép click ra ngoài để đóng
  }
});

export default JobOverviewStack;
