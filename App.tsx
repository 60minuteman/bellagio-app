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
import { SelectFlight } from './src/screens/flights/SelectFlight';
import { PassengerInfo } from './src/screens/flights/PassengerInfo';
import { FlightSummary } from './src/screens/flights/FlightSummary';
import { Checkout } from './src/screens/flights/Checkout';
import { BookingSuccess } from './src/screens/flights/BookingSuccess';
import { SearchResults } from './src/screens/check-in/SearchResults';
import { SeatSelect } from './src/screens/check-in/SeatSelect';
import { FlightRulesScreen } from './src/screens/check-in/FlightRulesScreen';
import { BoardingPassScreen } from './src/screens/check-in/BoardingPassScreen';
import { TierLevelsScreen } from './src/screens/profile/TierLevelsScreen';
import { BenefitsScreen } from './src/screens/profile/BenefitsScreen';
import { ActivityScreen } from './src/screens/profile/ActivityScreen';
import { RewardsScreen } from './src/screens/profile/RewardsScreen';
import { MyInformationScreen } from './src/screens/profile/MyInformationScreen';
import { PersonalDetailsScreen } from './src/screens/profile/PersonalDetailsScreen';
import { AddressScreen } from './src/screens/profile/AddressScreen';
import { YourAccountScreen } from './src/screens/profile/YourAccountScreen';
import { SecureTravelerScreen } from './src/screens/profile/SecureTravelerScreen';
import { PassportResidentScreen } from './src/screens/profile/PassportResidentScreen';
import { EmergencyContactScreen } from './src/screens/profile/EmergencyContactScreen';
import { PaymentMethodsScreen } from './src/screens/profile/PaymentMethodsScreen';
import { ReservationPreferencesScreen } from './src/screens/profile/ReservationPreferencesScreen';
import { CommunicationPreferencesScreen } from './src/screens/profile/CommunicationPreferencesScreen';
import { BeNotifiedScreen } from './src/screens/profile/BeNotifiedScreen';

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
          statusBarTranslucent: true,
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
        <Stack.Screen name="SelectFlight" component={SelectFlight} />
        <Stack.Screen name="PassengerInfo" component={PassengerInfo} />
        <Stack.Screen name="FlightSummary" component={FlightSummary} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="BookingSuccess" component={BookingSuccess} />
        <Stack.Screen name="SearchResults" component={SearchResults} />
        <Stack.Screen name="SeatSelect" component={SeatSelect} />
        <Stack.Screen name="FlightRules" component={FlightRulesScreen} />
        <Stack.Screen name="BoardingPass" component={BoardingPassScreen} />
        <Stack.Screen name="TierLevels" component={TierLevelsScreen} />
        <Stack.Screen name="Benefits" component={BenefitsScreen} />
        <Stack.Screen name="Activity" component={ActivityScreen} />
        <Stack.Screen name="Rewards" component={RewardsScreen} />
        <Stack.Screen 
          name="PersonalDetails" 
          component={PersonalDetailsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Address" 
          component={AddressScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="YourAccount" 
          component={YourAccountScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="SecureTraveler" 
          component={SecureTravelerScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="PassportAndResident" 
          component={PassportResidentScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="EmergencyContact" 
          component={EmergencyContactScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="MyInformation" 
          component={MyInformationScreen}
          options={{
            headerShown: false,
            title: "My Information"
          }}
        />
        <Stack.Screen 
          name="PaymentMethods" 
          component={PaymentMethodsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="ReservationPreferences" 
          component={ReservationPreferencesScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="CommunicationPreferences" 
          component={CommunicationPreferencesScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="BeNotified" 
          component={BeNotifiedScreen}
          options={{ headerShown: false }}
        />
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
