import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderButton, Text } from '@react-navigation/elements';
import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import bell from '../assets/bell.png';
import newspaper from '../assets/newspaper.png';
import { Home } from './screens/Home';
import { Profile } from './screens/Profile';
import { Settings } from './screens/Settings';
import { Updates } from './screens/Updates';
import { NotFound } from './screens/NotFound';
import { OnboardingWelcome } from './screens/onboarding/OnboardingWelcome';
import { OnboardingName } from './screens/onboarding/OnboardingName';
import { OnboardingHeartCheck } from './screens/onboarding/OnboardingHeartCheck';
import { OnboardingJourneyStyle } from './screens/onboarding/OnboardingJourneyStyle';
import { OnboardingReflectionStyle } from './screens/onboarding/OnboardingReflectionStyle';
import { OnboardingTransition } from './screens/onboarding/OnboardingTransition';

const HomeTabs = createBottomTabNavigator({
  screens: {
    Home: {
      screen: Home,
      options: {
        title: 'Feed',
        tabBarIcon: ({ color, size }) => (
          <Image
            source={newspaper}
            tintColor={color}
            style={{
              width: size,
              height: size,
            }}
          />
        ),
      },
    },
    Updates: {
      screen: Updates,
      options: {
        tabBarIcon: ({ color, size }) => (
          <Image
            source={bell}
            tintColor={color}
            style={{
              width: size,
              height: size,
            }}
          />
        ),
      },
    },
  },
});

const RootStack = createNativeStackNavigator({
  initialRouteName: 'OnboardingWelcome',
  screens: {
    OnboardingWelcome: {
      screen: OnboardingWelcome,
      options: {
        headerShown: false,
      },
    },
    OnboardingName: {
      screen: OnboardingName,
      options: {
        headerShown: false,
      },
    },
    OnboardingHeartCheck: {
      screen: OnboardingHeartCheck,
      options: {
        headerShown: false,
      },
    },
    OnboardingJourneyStyle: {
      screen: OnboardingJourneyStyle,
      options: {
        headerShown: false,
      },
    },
    OnboardingReflectionStyle: {
      screen: OnboardingReflectionStyle,
      options: {
        headerShown: false,
      },
    },
    OnboardingTransition: {
      screen: OnboardingTransition,
      options: {
        headerShown: false,
      },
    },
    HomeTabs: {
      screen: HomeTabs,
      options: {
        title: 'Home',
        headerShown: false,
      },
    },
    Profile: {
      screen: Profile,
      linking: {
        path: ':user(@[a-zA-Z0-9-_]+)',
        parse: {
          user: (value) => value.replace(/^@/, ''),
        },
        stringify: {
          user: (value) => `@${value}`,
        },
      },
    },
    Settings: {
      screen: Settings,
      options: ({ navigation }) => ({
        presentation: 'modal',
        headerRight: () => (
          <HeaderButton onPress={navigation.goBack}>
            <Text>Close</Text>
          </HeaderButton>
        ),
      }),
    },
    NotFound: {
      screen: NotFound,
      options: {
        title: '404',
      },
      linking: {
        path: '*',
      },
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
