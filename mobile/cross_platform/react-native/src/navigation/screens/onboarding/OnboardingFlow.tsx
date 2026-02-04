import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Animated,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {
  BodyText,
  HelperText,
  OptionButton,
  PrimaryButton,
  ScreenContainer,
  SectionSubtitle,
  SectionTitle,
  Spacer,
} from './components';
import { colors } from './styles';

const HEART_OPTIONS = [
  '🌿 Sabır',
  '🤍 Şükür',
  '✨ İç huzur',
  '🤝 İlişkilerde denge',
  '🧭 Yolumu bulmak',
  '🤍 Affetmek',
];

const JOURNEY_OPTIONS = [
  '🌱 Yumuşak, beni zorlamasın',
  '🌿 Dengeli, düşündürsün',
  '🔍 Zorlayan ayetlerden kaçmam',
];

const REFLECTION_OPTIONS = [
  '🌿 Küçük ama somut bir davranış',
  '🤍 Bir niyet ve farkındalık',
  '🧠 Gün boyu aklımda kalması',
  '🤝 İnsanlarla ilişkilerimde görünmesi',
];

const TOTAL_STEPS = 6;

export function OnboardingFlow() {
  const navigation = useNavigation<any>();
  const [step, setStep] = React.useState(0);
  const [name, setName] = React.useState('');
  const [heartNeed, setHeartNeed] = React.useState<string | null>(null);
  const [journeyStyle, setJourneyStyle] = React.useState<string | null>(null);
  const [reflectionStyle, setReflectionStyle] = React.useState<string | null>(
    null
  );

  const pulse = React.useRef(new Animated.Value(0.3)).current;

  React.useEffect(() => {
    if (step !== TOTAL_STEPS - 1) {
      return;
    }

    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, {
          toValue: 1,
          duration: 1600,
          useNativeDriver: true,
        }),
        Animated.timing(pulse, {
          toValue: 0.3,
          duration: 1600,
          useNativeDriver: true,
        }),
      ])
    );

    animation.start();

    const timer = setTimeout(() => {
      navigation.replace('HomeTabs');
    }, 2600);

    return () => {
      animation.stop();
      clearTimeout(timer);
    };
  }, [navigation, pulse, step]);

  const translateY = pulse.interpolate({
    inputRange: [0.3, 1],
    outputRange: [4, -4],
  });

  const goNext = () => {
    if (step < TOTAL_STEPS - 1) {
      setStep((prev) => prev + 1);
    }
  };

  const goBack = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  return (
    <ScreenContainer>
      {step === 0 && (
        <View>
          <SectionTitle>Yaşayan Ayetler</SectionTitle>
          <Spacer size={14} />
          <SectionSubtitle>
            Ayetler kitapta kalmaz.{"\n"}Hayatta yaşar.
          </SectionSubtitle>
          <Spacer size={18} />
          <BodyText>
            Burası bir sınav değil.{"\n"}Kimse seni ölçmüyor.{"\n"}Sadece
            ayetlerle yavaşça yürümek için buradasın.
          </BodyText>
        </View>
      )}

      {step === 1 && (
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
        </KeyboardAvoidingView>
      )}

      {step === 2 && (
        <View>
          <SectionTitle>
            Bu aralar kalbin en çok neye ihtiyaç duyuyor?
          </SectionTitle>
          <Spacer size={6} />
          <HelperText>Tek bir cevap yeterli. Bu bir etiket değil.</HelperText>

          <Spacer size={8} />

          <View style={styles.pills}>
            {HEART_OPTIONS.map((option) => (
              <OptionButton
                key={option}
                label={option}
                selected={heartNeed === option}
                onPress={() => setHeartNeed(option)}
              />
            ))}
          </View>

          <Spacer size={10} />
          <BodyText>İstersen daha sonra değiştirebilirsin.</BodyText>
        </View>
      )}

      {step === 3 && (
        <View>
          <SectionTitle>Ayetlerle yolculuğun nasıl olsun istersin?</SectionTitle>
          <Spacer size={6} />
          <HelperText>Herkesin yolu farklıdır.</HelperText>

          <Spacer size={12} />

          <View style={{ gap: 12 }}>
            {JOURNEY_OPTIONS.map((option) => (
              <OptionButton
                key={option}
                label={option}
                selected={journeyStyle === option}
                onPress={() => setJourneyStyle(option)}
                fullWidth
              />
            ))}
          </View>
        </View>
      )}

      {step === 4 && (
        <View>
          <SectionTitle>Bir ayeti yaşamak senin için neye benziyor?</SectionTitle>
          <Spacer size={10} />
          <BodyText>Burada doğru ya da yanlış yok. Sadece senin hissin.</BodyText>

          <Spacer size={14} />

          <View style={{ gap: 12 }}>
            {REFLECTION_OPTIONS.map((option) => (
              <OptionButton
                key={option}
                label={option}
                selected={reflectionStyle === option}
                onPress={() => setReflectionStyle(option)}
                fullWidth
              />
            ))}
          </View>
        </View>
      )}

      {step === 5 && (
        <View style={styles.transitionCenter}>
          <Animated.View
            style={[
              styles.orb,
              {
                opacity: pulse,
                transform: [{ scale: pulse }, { translateY }],
              },
            ]}
          />

          <Spacer size={18} />

          <SectionSubtitle>
            Kalbini söyledin.{"\n"}Ayetleri seçmedin.
          </SectionSubtitle>

          <Spacer size={8} />

          <BodyText>Seninle yürüyecek ayetler hazırlanıyor…</BodyText>
        </View>
      )}

      {step < TOTAL_STEPS - 1 && (
        <View style={styles.actions}>
          {step > 0 ? (
            <Pressable onPress={goBack} accessibilityRole="button">
              <Text style={styles.backText}>Geri</Text>
            </Pressable>
          ) : (
            <View />
          )}

          <PrimaryButton
            label={step === 0 ? 'Niyetimle devam ediyorum 🤍' : 'Devam edelim 🌿'}
            onPress={goNext}
          />
        </View>
      )}
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
  pills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  actions: {
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
  },
  backText: {
    color: colors.mutedText,
    fontSize: 15,
    lineHeight: 22,
  },
  transitionCenter: {
    alignItems: 'center',
    gap: 6,
  },
  orb: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.accent,
  },
});
