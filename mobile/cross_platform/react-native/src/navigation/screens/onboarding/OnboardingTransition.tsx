import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Animated, StyleSheet, View } from 'react-native';
import { BodyText, ScreenContainer, SectionSubtitle, Spacer } from './components';
import { colors } from './styles';

export function OnboardingTransition() {
  const navigation = useNavigation<any>();
  const pulse = React.useRef(new Animated.Value(0.3)).current;

  React.useEffect(() => {
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
      navigation.replace('HomeTabs' as never);
    }, 2600);

    return () => {
      animation.stop();
      clearTimeout(timer);
    };
  }, [navigation, pulse]);

  const translateY = pulse.interpolate({
    inputRange: [0.3, 1],
    outputRange: [4, -4],
  });

  return (
    <ScreenContainer contentStyle={styles.centerContent}>
      <View style={styles.centerBlock}>
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
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  centerContent: {
    justifyContent: 'center',
    flexGrow: 1,
  },
  centerBlock: {
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
