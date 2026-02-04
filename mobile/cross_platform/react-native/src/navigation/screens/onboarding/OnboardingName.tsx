import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {
  BodyText,
  HelperText,
  PrimaryButton,
  ScreenContainer,
  SectionTitle,
  Spacer,
} from './components';
import { colors } from './styles';

export function OnboardingName() {
  const navigation = useNavigation();
  const [name, setName] = React.useState('');

  return (
    <ScreenContainer>
      <KeyboardAvoidingView
        behavior={Platform.select({ ios: 'padding', android: undefined })}
      >
        <SectionTitle>Sana nasıl hitap edelim?</SectionTitle>
        <Spacer size={10} />
        <BodyText>
          İstersen sadece ismini yazabilirsin.{"\n"}Bu bir kayıt değil, bir
          tanışma.
        </BodyText>

        <Spacer size={20} />

        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="İsmin…"
          placeholderTextColor={colors.mutedText}
          style={styles.input}
          accessibilityLabel="İsmin"
          autoCapitalize="words"
          returnKeyType="done"
        />

        <Spacer size={6} />
        <HelperText>Bu isim sadece sana hitap etmek için.</HelperText>

        <Spacer size={24} />

        <PrimaryButton
          label="Devam edelim 🌿"
          onPress={() => navigation.navigate('OnboardingHeartCheck' as never)}
        />
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: colors.primary,
    fontSize: 16,
    lineHeight: 22,
  },
});
