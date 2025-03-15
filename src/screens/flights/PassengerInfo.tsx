import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { ScreenLayout } from '../../components/layout/ScreenLayout';
import { FlightHeader } from '../../components/flights/FlightHeader';
import { BookingProgress } from '../../components/flights/BookingProgress';
import { CountdownBanner } from '../../components/flights/CountdownBanner';
import { PassengerForm } from '../../components/flights/PassengerForm';
import { Button } from '../../components/common/Button';
import { FlightList } from '../../components/flights/FlightList';
import { colors, typography } from '../../styles/theme';
import { useNavigation } from '@react-navigation/native';

export const PassengerInfo = () => {
  const navigation = useNavigation();

  const flight = {
    origin: {
      code: 'LOS',
      city: 'Lagos',
      time: '10:15 AM'
    },
    destination: {
      code: 'ABV', 
      city: 'Abuja',
      time: '11:15 AM'
    }
  };

  const handleContinue = () => {
    navigation.navigate('FlightSummary');
  };

  return (
    <ScreenLayout headerBackground={colors.background}>
      <FlightHeader title="Passenger Information" />
      <CountdownBanner initialMinutes={29} initialSeconds={54} />
      <BookingProgress currentStep={2} />
      
      <View style={styles.container}>
        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.flightSummary}>
            <FlightList flights={[flight]} />
          </View>

          <PassengerForm />
        </ScrollView>

        <View style={styles.footer}>
          <Button 
            title="Continue" 
            onPress={handleContinue} 
            style={styles.continueButton}
          />
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
  scrollContent: {
    padding: 20,
  },
  flightSummary: {
    backgroundColor: colors.white,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: typography.semiBold,
    color: colors.text,
    marginBottom: 8,
  },
  note: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textLight,
    marginBottom: 24,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: colors.background,
  },
  continueButton: {
    borderRadius: 30,
  },
}); 