import { ScrollView, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { layoutStyles } from '../../styles';

export function ScreenContainer({ children, contentStyle, }: { children: React.ReactNode; contentStyle?: ViewStyle; }) {
	return (
		<SafeAreaView style={layoutStyles.screen} edges={['top', 'bottom']}>
			<ScrollView
				contentContainerStyle={[layoutStyles.content, contentStyle]}
				showsVerticalScrollIndicator={false}
				keyboardShouldPersistTaps="handled"
			>
				{children}
			</ScrollView>
		</SafeAreaView>
	);
}