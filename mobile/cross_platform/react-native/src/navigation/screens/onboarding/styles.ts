import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#1F3D2B',
  background: '#F6F1E8',
  surface: '#FBF8F2',
  mutedText: '#5D6B61',
  border: '#E5DCD1',
  accent: '#C7A35B',
  onPrimary: '#FBF8F2',
};

export const textStyles = StyleSheet.create({
  title: {
    fontSize: 30,
    lineHeight: 40,
    color: colors.primary,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 20,
    lineHeight: 30,
    color: colors.primary,
    fontWeight: '500',
  },
  body: {
    fontSize: 16,
    lineHeight: 26,
    color: colors.mutedText,
    fontWeight: '400',
  },
  helper: {
    fontSize: 13,
    lineHeight: 20,
    color: colors.mutedText,
  },
});

export const layoutStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 48,
    gap: 18,
  },
});
