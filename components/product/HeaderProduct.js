import { useCallback, useRef, useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as HeroOutline from "react-native-heroicons/outline";
import * as HeroSolid from "react-native-heroicons/solid";

// import BottomOrderFilterSheet from './BottomOrderFilterSheet';

const HeaderProduct = ({ title, navigation, route }) => {

  const bottomSheetRef = useRef(null);

  const openSheet = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  const closeSheet = useCallback(() => {
    bottomSheetRef.current?.dismiss();
  }, []);

  // Modal
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  // Danh sách menu
  const menuItems = [
    { id: 1, title: 'Loại sản phẩm', screen: 'Product', navigate: 'ProductCategoryStack'  },
    { id: 2, title: 'Nhãn hiệu', screen: 'Product', navigate: 'ProductBrandStack'  },
    { id: 4, title: 'Thuộc tính', screen: 'Product', navigate: 'AttributeStack'  },
  ];

  const onMenuPress = (item) => {
    setModalVisible(false)
    navigation.navigate(item.screen, {screen: item.navigate})
  };

  return (
    <View className='bg-white'
      style={{
        backgroundColor: "white",
        borderRadius: 5,
        //paddingVertical: 16,
        // Shadow cho iOS
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        // Shadow cho Android
        elevation: 2,
      }}
    >
      {/* Phần trên của header */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 16,
          marginBottom: 8,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ color: '#0089FF', fontWeight: '600' }}>
            <HeroSolid.ArrowLeftIcon size={22} />
          </Text>
        </TouchableOpacity>
        <View className='flex-row items-center'>
          <TouchableOpacity className='hidden bg-gray-200 w-10 h-10 justify-center items-center rounded-full' onPress={() => alert('Tìm kiếm')}>
            <HeroOutline.Squares2X2Icon size={20} color={'#333'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={openModal} className='bg-gray-200 w-10 h-10 justify-center items-center rounded-full ml-2'>
            <HeroSolid.EllipsisVerticalIcon size={25} color={'#333'} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Phần tiêu đề */}
      <Text
        style={{
          textAlign: 'center',
          fontSize: 18,
          fontWeight: '700',
          color: '#333',
        }}
      >
        {title}
      </Text>

      {/* Tìm kiếm */}
      <View className='px-4 mt-5'>
        <View className='border border-gray-100 rounded-3xl p-3 mb-4 relative flex-row flex-wrap items-center bg-gray-100'>
          <HeroOutline.MagnifyingGlassIcon className='relative top-[10px]' size={18} color={'#6b7280'} />
          <TextInput
            placeholderTextColor="#6b7280"
            className='pl-2 py-1 text-gray-500 text-f14'
            placeholder='Tìm kiếm tên, mã...'
          />
        </View>
      </View>

      {/* Lọc */}
      <View className='px-4 mt-3 flex-row justify-between'>
        <Text className='pb-4 text-blue-600 text-f15 font-medium px-3 border-b-2 border-blue-600'>Tất cả</Text>
        <TouchableOpacity
          onPress={openSheet}
        >
          <HeroOutline.FunnelIcon size={25} />
        </TouchableOpacity>
      </View>

      {/* <BottomOrderFilterSheet ref={bottomSheetRef} onClose={closeSheet} /> */}

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.backdrop}>
          <View className='bg-white w-[70%] rounded-lg pt-5'  onStartShouldSetResponder={() => true}>
            <Pressable onPress={closeModal}>
              <View className="">
                <Text className="text-center font-sfbold text-f17 mb-4">Chọn hành động</Text>
                {menuItems.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    className="py-3 border-b border-gray-200"
                    onPress={() => onMenuPress(item)}
                  >
                    <Text className="text-center text-f15 font-sfregular">{item.title}</Text>
                  </TouchableOpacity>
                ))}

                <TouchableOpacity className="mt-4 py-3" onPress={closeModal}>
                  <Text className="text-center text-blue-600 font-sfmedium">Hủy</Text>
                </TouchableOpacity>
              </View>
            </Pressable>
          </View>
        </View>
      </Modal>

    </View>

  );
}

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

export default HeaderProduct