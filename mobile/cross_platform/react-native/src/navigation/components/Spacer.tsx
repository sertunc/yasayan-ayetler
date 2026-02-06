import { View, } from 'react-native';

export function Spacer({ size = 12 }: { size?: number }) {
  return <View style={{ height: size }} />;
}