import { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from './src/styles/theme';
import { Splash } from './src/components/Splash';
import { OnboardingScreen } from './src/screens/onboarding/OnboardingScreen';
import { OnboardingScreen2 } from './src/screens/onboarding/OnboardingScreen2';
import { OnboardingScreen3 } from './src/screens/onboarding/OnboardingScreen3';
import { OnboardingScreen4 } from './src/screens/onboarding/OnboardingScreen4';
import { SignUp } from './src/screens/auth/SignUp';
import { SignIn } from './src/screens/auth/SignIn';
import { ForgotPassword } from './src/screens/auth/ForgotPassword';
import { RootStackParamList } from './src/navigation/types';
import { TabNavigator } from './src/navigation/TabNavigator';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      try {
        await SplashScreen.hideAsync();
        // Hide splash screen after 2 seconds
        setTimeout(() => {
          setShowSplash(false);
        }, 2000);
      } catch (e) {
        console.warn(e);
      }
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  if (showSplash) {
    return (
      <View style={styles.container} onLayout={onLayoutRootView}>
        <Splash />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={OnboardingScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen2} />
        <Stack.Screen name="OnboardingScreen3" component={OnboardingScreen3} />
        <Stack.Screen name="OnboardingScreen4" component={OnboardingScreen4} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="MainApp" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
