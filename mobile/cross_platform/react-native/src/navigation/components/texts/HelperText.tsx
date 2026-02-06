import { Text, } from 'react-native';
import { textStyles } from '../../../styles';

export function HelperText({ children }: { children: React.ReactNode }) {
  return <Text style={textStyles.helper}>{children}</Text>;
}