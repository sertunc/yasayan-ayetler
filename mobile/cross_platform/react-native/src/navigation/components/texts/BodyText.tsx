import { Text, } from 'react-native';
import { textStyles } from '../../../styles';

export function BodyText({ children }: { children: React.ReactNode }) {
  return <Text style={textStyles.body}>{children}</Text>;
}