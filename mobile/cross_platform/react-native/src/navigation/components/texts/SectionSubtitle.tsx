import { Text, } from 'react-native';
import { textStyles } from '../../../styles';

export function SectionSubtitle({ children }: { children: React.ReactNode }) {
  return <Text style={textStyles.subtitle}>{children}</Text>;
}