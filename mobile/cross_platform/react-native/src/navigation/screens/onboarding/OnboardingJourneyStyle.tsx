import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import {
  HelperText,
  OptionButton,
  PrimaryButton,
  ScreenContainer,
  SectionTitle,
  Spacer,
} from './components';

const OPTIONS = [
  '🌱 Yumuşak, beni zorlamasın',
  '🌿 Dengeli, düşündürsün',
  '🔍 Zorlayan ayetlerden kaçmam',
];

export function OnboardingJourneyStyle() {
  const navigation = useNavigation();
  const [selected, setSelected] = React.useState<string | null>(null);

  return (
    <ScreenContainer>
      <SectionTitle>Ayetlerle yolculuğun nasıl olsun istersin?</SectionTitle>
      <Spacer size={6} />
      <HelperText>Herkesin yolu farklıdır.</HelperText>

      <Spacer size={12} />

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
        label="Devam edelim 🌿"
        onPress={() => navigation.navigate('OnboardingReflectionStyle' as never)}
      />
    </ScreenContainer>
  );
}
