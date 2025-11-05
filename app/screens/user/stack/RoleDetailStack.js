import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as HeroOutline from "react-native-heroicons/outline";
import RoleItemCheck from '../../../../components/user/RoleItemCheck';

const RoleDetailStack = ({ navigation }) => {
  
  const roles = [
    {
      id: 0,
      title: 'Thành viên',
      group: [
        { id: 0, title: 'Xem thành viên' },
        { id: 1, title: 'Thêm thành viên' },
        { id: 2, title: 'Sửa thành viên' },
        { id: 3, title: 'Xoá thành viên' },
      ],
    },
    {
      id: 1,
      title: 'Nhóm thành viên',
      group: [
        { id: 4, title: 'Xem nhóm thành viên' },
        { id: 5, title: 'Thêm nhóm thành viên' },
        { id: 6, title: 'Sửa nhóm thành viên' },
        { id: 7, title: 'Xoá nhóm thành viên' },
      ],
    },
    {
      id: 2,
      title: 'Khách hàng',
      group: [
        { id: 8, title: 'Xem tất cả khách hàng' },
        { id: 9, title: 'Xem khách hàng được phụ trách' },
        { id: 10, title: 'Thêm khách hàng' },
        { id: 11, title: 'Sửa khách hàng' },
        { id: 12, title: 'Xoá khách hàng' },
        { id: 13, title: 'Khách hàng cần xử lý & quá hạn' },
        { id: 14, title: 'Liên hệ theo thứ tự khách hàng' },
        { id: 15, title: 'Ngày tạo cũ khách hàng' },
      ],
    },
    {
      id: 3,
      title: 'Cấu hình hệ thống',
      group: [
        { id: 16, title: 'Sửa cấu hình hệ thống' },
      ],
    },
    {
      id: 4,
      title: 'Nhóm khách hàng',
      group: [
        { id: 17, title: 'Xem nhóm khách hàng' },
        { id: 18, title: 'Thêm nhóm khách hàng' },
        { id: 19, title: 'Sửa nhóm khách hàng' },
        { id: 20, title: 'Xoá nhóm khách hàng' },
      ],
    },
    {
      id: 5,
      title: 'Hình thức thanh toán',
      group: [
        { id: 21, title: 'Xem hình thức thanh toán' },
        { id: 22, title: 'Thêm hình thức thanh toán' },
        { id: 23, title: 'Sửa hình thức thanh toán' },
        { id: 24, title: 'Xoá hình thức thanh toán' },
      ],
    },
    {
      id: 6,
      title: 'Quản lý logs',
      group: [
        { id: 25, title: 'Xem tất cả quản lý logs' },
        { id: 26, title: 'Xem quản lý logs' },
      ],
    },
    {
      id: 7,
      title: 'Quản lý tags',
      group: [
        { id: 27, title: 'Xem tất cả quản lý tags' },
        { id: 28, title: 'Xem quản lý tags' },
        { id: 29, title: 'Thêm quản lý tags' },
        { id: 30, title: 'Sửa quản lý tags' },
        { id: 31, title: 'Xoá quản lý tags' },
      ],
    },
  ];

  const toggleActive = () => {
    
  }

  return (
    <View className='flex-1 bg-white'>
      <ScrollView className='px-4 bg-white flex-1 relative'>
        <View className='mt-6'>
            <View>
              <Text className='font-sfmedium text-f15'><Text className='text-red-500'>*</Text> Tên vai trò</Text>
              <TextInput 
              className='border-b h-10 font-sfregular text-f14 border-gray-200'
              placeholder=''
              />
            </View>
            <View className='mt-4'>
              <Text className='font-sfmedium text-f15'>Team phụ trách</Text>
              <TextInput 
              className='border-b h-10 font-sfregular text-f14 border-gray-200'
              placeholder=''
              />
            </View>
            <View className='mt-4'>
              <View className='flex-row justify-between'>
                <Text className='font-sfmedium text-f15'>Phân quyền chi tiết</Text>
                <Text className='font-sfregular px-1 py-1 text-f13 rounded-lg bg-blue-100 border border-blue-300 text-blue-700'>40/119 quyền</Text>
              </View>
              <TextInput 
              className='border-b h-10 font-sfregular text-f14 border-gray-200'
              placeholder='Tìm kiếm module hoặc quyền...'
              />
            </View>
            
            <View
            className='p-3 mt-5'
            style={{
                backgroundColor: "white",
                borderRadius: 10,
                // paddingVertical: 16,
                // Shadow cho iOS
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.05,
                shadowRadius: 6,
                // Shadow cho Android
                elevation: 6,
            }}
            >
              <View className='flex-row justify-between items-center'>
                <Text className='text-sfregular'>Nhóm thành viên</Text>
                <View className='flex-row gap-x-1 items-center'>
                   <Text className='font-sfregular text-gray-500'>4 quyền</Text>
                   <View><HeroOutline.ChevronDownIcon size={15} /></View>
                </View>
              </View>
              <View className='flex-row flex-wrap justify-between'>
                <RoleItemCheck active={false} />
                <RoleItemCheck active={true} />
                <RoleItemCheck active={true} />
                <RoleItemCheck active={false} />
                <RoleItemCheck active={false} />
              </View>
            </View>

            <View className='mt-4'>
              <Text className='font-sfmedium text-f15 text-gray-500'>Trạng thái</Text>
              <TextInput 
              className='border-b h-10 font-sfregular text-f14 border-gray-200'
              placeholder=''
              />
            </View>
            <View className='mt-4'>
              <Text className='font-sfmedium text-f15 text-gray-500'>Email</Text>
              <TextInput 
              className='border-b h-10 font-sfregular text-f14 border-gray-200'
              placeholder=''
              />
            </View>
            <View className='mt-4'>
              <Text className='font-sfmedium text-f15 text-gray-500'>Ngày sinh</Text>
              <TextInput 
              className='border-b h-10 font-sfregular text-f14 border-gray-200'
              placeholder=''
              />
            </View>
            <View className='flex-row justify-between items-center mt-4'>
              <View className='justify-center flex-col w-1/2 gap-x-3 items-center mt-4'>
                  <Text>Ảnh đại diện</Text>
                  <View>
                    <View className='mt-2 bg-white h-14 w-14 justify-center items-center rounded-lg self-start'>
                        <Image
                        className='border border-gray-300 rounded-md'
                        style={{ width: '100%', height: '100%', borderRadius: 10 }}
                        />
                    </View>
                  </View>
              </View>
              <View className='justify-center flex-col w-1/2 gap-x-3 items-center mt-4'>
                  <Text>Ảnh chữ ký</Text>
                  <View>
                    <View className='mt-2 bg-white h-14 w-14 justify-center items-center rounded-lg self-start'>
                        <Image
                        className='border border-gray-300 rounded-md'
                        style={{ width: '100%', height: '100%', borderRadius: 10 }}
                        />
                    </View>
                  </View>
              </View>
          </View>
        </View>
      </ScrollView>
      <View className='flex-row justify-center gap-x-4 items-center px-5 mb-4'>
        <TouchableOpacity className='flex-row gap-x-1 w-[40%] h-11 justify-center items-center border-red-300 border rounded-md'>
          <View><HeroOutline.TrashIcon size={20} color={'red'} /></View>
          <Text className='text-red-600'>Xoá</Text>
        </TouchableOpacity>
        <TouchableOpacity className='h-11 rounded-md items-center flex-row justify-center border-red-300 flex-1 bg-blue-700'>
          <Text className='text-white'>Cập nhật</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RoleDetailStack;
