import { View } from 'react-native';

const ProgressBar = ({ progress, color }) => {
    return (
        <View className="mt-2">
            <View className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <View
                className="h-3 rounded-lg"
                style={{ width: `${progress}%`, backgroundColor: color }}
                />
            </View>
        </View>
    )
}

export default ProgressBar;