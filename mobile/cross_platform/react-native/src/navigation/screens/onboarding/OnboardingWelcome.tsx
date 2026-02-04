import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import {
  BodyText,
  PrimaryButton,
  ScreenContainer,
  SectionSubtitle,
  SectionTitle,
  Spacer,
} from './components';

export function OnboardingWelcome() {
  const navigation = useNavigation();

  return (
    <ScreenContainer>
      <View>
        <SectionTitle>Yaşayan Ayetler</SectionTitle>
        <Spacer size={14} />
        <SectionSubtitle>
          Ayetler kitapta kalmaz.{"\n"}Hayatta yaşar.
        </SectionSubtitle>
      </View>

      <BodyText>
        Burası bir sınav değil.{"\n"}Kimse seni ölçmüyor.{"\n"}Sadece
        ayetlerle yavaşça yürümek için buradasın.
      </BodyText>

      <Spacer size={24} />

      <PrimaryButton
        label="Niyetimle devam ediyorum 🤍"
        onPress={() => navigation.navigate('OnboardingName' as never)}
      />
    </ScreenContainer>
  );
}
