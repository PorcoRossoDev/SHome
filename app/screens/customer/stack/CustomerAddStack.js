import { useNavigation } from '@react-navigation/native';
import format from 'date-fns/format';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { CalendarIcon, ChevronDownIcon } from "react-native-heroicons/outline";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { RadioButton } from 'react-native-paper';
import DynamicInputList from '../../../../components/customer/DynamicInputList';

const CustomerAddStack = () => {

  const navigation = useNavigation()
  const [value, setValue] = useState('first')
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isPickerVisible, setPickerVisible] = useState(false);
  const typeCustomer = ['Cá nhân', 'Doanh nghiệp']

  const [phones, setPhones] = useState([{ id: Date.now(), value: '' }]);
  const [emails, setEmails] = useState([{ id: Date.now(), value: '' }]);
  const [demands, setDemands] = useState([{ id: Date.now(), value: '' }]); //demand
  const [address, setAddress] = useState([{ id: Date.now(), value: '' }]);

  const [focusField, setFocusField] = useState(null);
  const type = [
    { label: 'Không tiềm năng', value: '0' },
    { label: 'Sàn TMĐT', value: '1' },
    { label: 'Hà Nội', value: '2' },
  ];
  const source = [
    { label: 'Admin', value: '0' },
    { label: 'Kế toán', value: '1' },
    { label: 'Ngọc Linh', value: '2' },
  ];
  const customer = [
    { label: 'CS01', value: '0' },
    { label: 'CS03', value: '1' },
    { label: 'CS05', value: '2' },
  ];

  const [formData, setFormData] = useState({
    type: null,
    source: null,
    customer: null,
  });

  useEffect(() => {
    if (!formData.product) return; // nếu null thì không làm gì

    const selectedProduct = product.find(p => p.value === formData.product);
    if (!selectedProduct) return;

    setProductAdd(prev => {
      const exists = prev.some(item => item.value === selectedProduct.value);

      if (exists) {
        // nếu đã tồn tại → xóa
        return prev.filter(item => item.value !== selectedProduct.value);
      } else {
        // nếu chưa có → thêm
        return [...prev, selectedProduct];
      }
    });

    // reset dropdown về null
    setFormData(prev => ({ ...prev, product: null }));

  }, [formData.product]);

  // Dropdowns
  const renderDropdown = (key, label, data, placeholder = 'Chọn...', hiddenText = false) => {
    return (
      <View className='mb-5'>
        {!hiddenText && (
          <Text className="font-sfregular text-[15px] mb-2 text-gray-700">
            <Text className="text-red-600">*</Text> {label}
          </Text>
        )}

        <Dropdown
          style={[
            styles.dropdown,
            focusField === key && { borderColor: '#3b82f6' },
          ]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={150}
          labelField="label"
          valueField="value"
          placeholder={placeholder}
          searchPlaceholder={`Tìm ${label.toLowerCase()}...`}
          value={formData[key]}
          onFocus={() => setFocusField(key)}
          onBlur={() => setFocusField(null)}
          onChange={(item) => {
            setFormData((prev) => ({ ...prev, [key]: item.value }));
            setFocusField(null);
          }}
        />
      </View>
    );
  };

  return (
    <View className='flex-1 bg-white'>
      <ScrollView className='flex-1 px-4'>
        <View className='mt-8'>
          <Text className="text-[15px] mb-2 text-gray-700">
            <Text className="text-red-600 font-sfmedium">*</Text> Loại khách hàng
          </Text>
          <View className=''>
            <RadioButton.Group onValueChange={setValue} value={value}>
              <View className="flex-row items-center gap-x-7">
                <View className="flex-row items-center">
                  <RadioButton
                    value="0"
                    color="#007AFF"          // màu khi chọn
                    uncheckedColor="#C0C0C0" // màu viền khi chưa chọn
                  // className='border border-gray-400 w-6 h-6 text-f8'
                  />
                  <Text>Cá nhân</Text>
                </View>

                <View className="flex-row items-center">
                  <RadioButton
                    value="1"
                    color="#007AFF"
                    uncheckedColor="#C0C0C0"
                  />
                  <Text>Doanh nghiệp</Text>
                </View>
              </View>
            </RadioButton.Group>
          </View>
        </View>

        {/* Tên doanh nghiệp */}
        <View className='mt-3'>
          <Text className="text-[15px] mb-2 text-gray-700 font-sfregular">
            <Text className="text-red-600 ">*</Text> Tên doanh nghiệp
          </Text>
          <View className='flex-row gap-x-2 mb-4'>
            <TextInput
              value=''
              className='py-4 border border-[#ccc] px-3 rounded-lg flex-1'
              placeholder='Nhập tên doanh nghiệp'
            />
          </View>
        </View>

        {/* Địa chỉ xuất */}
        <View className='mt-2'>
          <Text className="font-sfregular text-[15px] mb-2 text-gray-700">
            <Text className="text-red-600">*</Text> Địa chỉ xuất HĐ
          </Text>
          <View className='flex-row gap-x-2 mb-4'>
            <TextInput
              value=''
              className='py-4 border border-[#ccc] px-3 rounded-lg flex-1'
              placeholder='Nhập địa chỉ xuất hoá đơn'
            />
          </View>
        </View>

        {/* Email */}
        <View>
          <Text className="font-sfregular text-[15px] mb-2 text-gray-700">
            <Text className="text-red-600">*</Text> Email
          </Text>
          <DynamicInputList list={emails} setList={setEmails} placeholder='Nhập email' />
        </View>

        {/* Nhu cầu */}
        <View>
          <Text className="font-sfregular text-[15px] mb-2 text-gray-700">
            <Text className="text-red-600">*</Text> Nhu cầu
          </Text>
          <DynamicInputList list={demands} setList={setDemands} multiline={true} placeholder='Nhập nhu cầu' />
        </View>

        {/* Người đại diện */}
        <View className='mt-2'>
          <Text className="font-sfregular text-[15px] mb-2 text-gray-700">
            <Text className="text-red-600">*</Text> Người đại diện
          </Text>
          <View className='flex-row gap-x-2 mb-4'>
            <TextInput
              value=''
              className='py-4 border border-[#ccc] px-3 rounded-lg flex-1'
              placeholder='Nhậ họ tên/người đại diện'
            />
          </View>
        </View>

        {/* Mã số thuế */}
        <View className='mt-2'>
          <Text className="font-sfregular text-[15px] mb-2 text-gray-700">
            <Text className="text-red-600">*</Text> Mã số thuế
          </Text>
          <View className='flex-row gap-x-2 mb-4'>
            <TextInput
              value=''
              className='py-4 border border-[#ccc] px-3 rounded-lg flex-1'
              placeholder='Nhập mã số thuế'
            />
          </View>
        </View>

        {/* Số điện thoại */}
        <View>
          <Text className="font-sfregular text-[15px] mb-2 text-gray-700">
            <Text className="text-red-600">*</Text> Số điện thoại
          </Text>
          <DynamicInputList list={phones} setList={setPhones} multiline={false} placeholder='Nhập số điện thoại' />
        </View>

        {/* Địa chỉ giao hàng */}
        <View>
          <Text className="font-sfregular text-[15px] mb-2 text-gray-700">
            <Text className="text-red-600">*</Text> Địa chỉ giao hàng
          </Text>
          <DynamicInputList list={address} setList={setAddress} multiline={true} placeholder='Nhập địa chỉ' />
        </View>
        
        {/* Phân loại */}
        <View>
          <Text className="font-sfregular text-[15px] mb-2 text-gray-700">
            <Text className="text-red-600">*</Text> Phân loại
          </Text>
          {renderDropdown('type', 'Phân loại', type, 'Chọn', true)}
        </View>
        
        {/* Nguồn */}
        <View>
          <Text className="font-sfregular text-[15px] mb-2 text-gray-700">
            <Text className="text-red-600">*</Text> Nguồn
          </Text>
          {renderDropdown('source', 'Nguồn', source, 'Chọn', true)}
        </View>

        {/* Ngày tạo */}
        <View className='mb-3'>
          <Text className="font-sfregular text-[15px] mb-2 text-gray-700">
            <Text className="text-red-600">*</Text> Ngày tạo khách hàng cũ
          </Text>
          <TouchableOpacity onPress={() => setPickerVisible(true)}>
            <View className="flex-row items-center relative">
              <View className="w-[50px] justify-center bg-gray-100 rounded-l-lg h-full items-center flex-row">
                <CalendarIcon size={20} />
              </View>
              <TextInput
                editable={false}
                className="border border-gray-200 py-4 flex-1 px-3 rounded-r-lg text-[14px]"
                value={format(selectedDate, 'dd-MM-yyyy')}
                style={{ letterSpacing: 1.5 }}
              />
              <View className="absolute right-2">
                <ChevronDownIcon size={15} />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* Nhóm khách hàng */}
        <View>
          <Text className="font-sfregular text-[15px] mb-2 text-gray-700">
            <Text className="text-red-600">*</Text> Nhóm khách hàng
          </Text>
          {renderDropdown('source', 'Nhóm khách hàng', source, 'Chọn', true)}
        </View>

        <View className=''>
          <DateTimePickerModal
            isVisible={isPickerVisible}
            mode="date"
            display="inline"
            date={selectedDate}
            onConfirm={(date) => {
              setSelectedDate(date);
              setPickerVisible(false);
            }}
            onCancel={() => setPickerVisible(false)}
          // pickerContainerStyleIOS={{ width: '100%', alignSelf: 'center' }}
          />
        </View>


      </ScrollView>
      <View className='px-4 flex-row my-5 gap-x-2'>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProductOverviewStack')}
          className='flex-1 justify-center items-center h-12 rounded-lg bg-blue-500'>
          <Text className='text-white text-f16 font-sfregular'>Tạo sản khách hàng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    paddingVertical: 12,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 14,
    color: '#999',
  },
  selectedTextStyle: {
    fontSize: 14,
    color: '#000',
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 14,
  },
});

export default CustomerAddStack;