import { Text, } from 'react-native';
import { textStyles } from '../../../styles';

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return <Text style={textStyles.title}>{children}</Text>;
}