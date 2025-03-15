export type RootStackParamList = {
  Welcome: undefined;
  Onboarding: undefined;
  OnboardingScreen3: undefined;
  OnboardingScreen4: undefined;
  SignUp: undefined;
  SignIn: undefined;
  ForgotPassword: undefined;
  MainApp: undefined;
  SelectFlight: undefined;
  PassengerInfo: undefined;
  FlightSummary: undefined;
  Checkout: undefined;
  BookingSuccess: undefined;
};

export type TabParamList = {
  Home: undefined;
  Bookings: undefined;
  Notifications: undefined;
  Profile: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
} 