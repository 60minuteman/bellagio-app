import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScreenLayout } from '../../components/layout/ScreenLayout';
import { FlightHeader } from '../../components/flights/FlightHeader';
import { BookingProgress } from '../../components/flights/BookingProgress';
import { DatePriceSelector } from '../../components/flights/DatePriceSelector';
import { FlightsList } from '../../components/flights/FlightsList';
import { CountdownBanner } from '../../components/flights/CountdownBanner';
import { colors } from '../../styles/theme';

export const SelectFlight = () => {
  const handleTimeUp = () => {
    // Handle countdown completion
  };

  return (
    <ScreenLayout statusBarStyle="dark-content" backgroundColor="transparent">
      <View style={styles.container}>
        <FlightHeader title="Select Departure Flight" />
        <CountdownBanner 
          initialMinutes={29} 
          initialSeconds={54}
          onTimeUp={handleTimeUp}
        />
        <View style={styles.content}>
          <BookingProgress currentStep={1} />
          <DatePriceSelector />
          <FlightsList />
        </View>
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
  },
}); 