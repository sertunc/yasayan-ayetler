import * as React from 'react';
import { Pressable, StyleSheet, Text, } from 'react-native';
import { colors } from '../../../styles';

export function OptionButton({ label, selected, onPress, fullWidth, }: { label: string; selected: boolean; onPress: () => void; fullWidth?: boolean; }) {
	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => [
				styles.option,
				fullWidth && styles.optionFull,
				selected && styles.optionSelected,
				pressed && styles.optionPressed,
			]}
			accessibilityRole="button"
			accessibilityState={{ selected }}
		>
			<Text style={styles.optionText}>{label}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	option: {
		borderRadius: 22,
		borderWidth: 1,
		borderColor: colors.border,
		backgroundColor: colors.surface,
		paddingVertical: 10,
		paddingHorizontal: 14,
	},
	optionFull: {
		alignSelf: 'stretch',
		borderRadius: 16,
		paddingVertical: 14,
		paddingHorizontal: 16,
	},
	optionSelected: {
		backgroundColor: '#EDE4D8',
		borderColor: '#D9CFC2',
	},
	optionPressed: {
		opacity: 0.85,
	},
	optionText: {
		color: colors.primary,
		fontSize: 15,
		lineHeight: 22,
	},
});