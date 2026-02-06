import { Pressable, StyleSheet, Text, } from 'react-native';
import { colors } from '../../../styles';

export function PrimaryButton({ label, onPress, disabled, }: { label: string; onPress: () => void; disabled?: boolean; }) {
	return (
		<Pressable
			onPress={onPress}
			disabled={disabled}
			style={({ pressed }) => [
				styles.primaryButton,
				disabled && styles.primaryButtonDisabled,
				pressed && !disabled && styles.primaryButtonPressed,
			]}
			accessibilityRole="button"
		>
			<Text style={styles.primaryButtonText}>{label}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	primaryButton: {
		backgroundColor: colors.primary,
		paddingVertical: 14,
		paddingHorizontal: 20,
		borderRadius: 26,
		alignItems: 'center',
	},
	primaryButtonPressed: {
		opacity: 0.9,
	},
	primaryButtonDisabled: {
		opacity: 0.5,
	},
	primaryButtonText: {
		color: colors.onPrimary,
		fontSize: 16,
		lineHeight: 24,
		fontWeight: '600',
	},
});