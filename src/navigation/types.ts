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
  SearchResults: undefined;
  SeatSelect: undefined;
  TierLevels: undefined;
  Benefits: undefined;
  PersonalDetails: undefined;
  Address: undefined;
  YourAccount: undefined;
  SecureTraveler: undefined;
  PassportAndResident: undefined;
  EmergencyContact: undefined;
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