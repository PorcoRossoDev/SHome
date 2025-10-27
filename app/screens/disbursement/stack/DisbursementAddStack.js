import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const DisbursementAddStack = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];


  return (
    <View style={styles.container}>
      <Text style={styles.label}>Chọn quốc gia:</Text>

      <View style={styles.container}>
        <Dropdown
          style={styles.dropdown}
          data={data}
          labelField="label"
          valueField="value"
          placeholder="Select item"
          value={value}
          onChange={item => setValue(item.value)}
        />

      </View>
    </View>
  );
}

export default DisbursementAddStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dropdown: {
    height: 50,
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
  resultText: {
    marginTop: 20,
    fontSize: 16,
    color: '#2563eb',
  },
  result: { marginTop: 20, fontSize: 16, color: '#2563eb' },
});
