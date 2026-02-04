import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import {
  BodyText,
  OptionButton,
  PrimaryButton,
  ScreenContainer,
  SectionTitle,
  Spacer,
} from './components';

const OPTIONS = [
  '🌿 Küçük ama somut bir davranış',
  '🤍 Bir niyet ve farkındalık',
  '🧠 Gün boyu aklımda kalması',
  '🤝 İnsanlarla ilişkilerimde görünmesi',
];

export function OnboardingReflectionStyle() {
  const navigation = useNavigation();
  const [selected, setSelected] = React.useState<string | null>(null);

  return (
    <ScreenContainer>
      <SectionTitle>Bir ayeti yaşamak senin için neye benziyor?</SectionTitle>
      <Spacer size={10} />
      <BodyText>Burada doğru ya da yanlış yok. Sadece senin hissin.</BodyText>

      <Spacer size={14} />

      <View style={{ gap: 12 }}>
        {OPTIONS.map((option) => (
          <OptionButton
            key={option}
            label={option}
            selected={selected === option}
            onPress={() => setSelected(option)}
            fullWidth
          />
        ))}
      </View>

      <Spacer size={24} />

      <PrimaryButton
        label="Devam edelim ✨"
        onPress={() => navigation.navigate('OnboardingTransition' as never)}
      />
    </ScreenContainer>
  );
}
