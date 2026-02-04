import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import {
  BodyText,
  HelperText,
  OptionButton,
  PrimaryButton,
  ScreenContainer,
  SectionTitle,
  Spacer,
} from './components';

const OPTIONS = [
  '🌿 Sabır',
  '🤍 Şükür',
  '✨ İç huzur',
  '🤝 İlişkilerde denge',
  '🧭 Yolumu bulmak',
  '🤍 Affetmek',
];

export function OnboardingHeartCheck() {
  const navigation = useNavigation();
  const [selected, setSelected] = React.useState<string | null>(null);

  return (
    <ScreenContainer>
      <SectionTitle>
        Bu aralar kalbin en çok neye ihtiyaç duyuyor?
      </SectionTitle>
      <Spacer size={6} />
      <HelperText>Tek bir cevap yeterli. Bu bir etiket değil.</HelperText>

      <Spacer size={8} />

      <View style={styles.options}>
        {OPTIONS.map((option) => (
          <OptionButton
            key={option}
            label={option}
            selected={selected === option}
            onPress={() => setSelected(option)}
          />
        ))}
      </View>

      <Spacer size={20} />

      <PrimaryButton
        label="Devam edelim 🌿"
        onPress={() => navigation.navigate('OnboardingJourneyStyle' as never)}
      />

      <Spacer size={4} />
      <BodyText>İstersen daha sonra değiştirebilirsin.</BodyText>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  options: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
});
