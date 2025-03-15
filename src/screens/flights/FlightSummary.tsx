import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Switch } from 'react-native';
import { ScreenLayout } from '../../components/layout/ScreenLayout';
import { FlightHeader } from '../../components/flights/FlightHeader';
import { BookingProgress } from '../../components/flights/BookingProgress';
import { CountdownBanner } from '../../components/flights/CountdownBanner';
import { Button } from '../../components/common/Button';
import { colors, typography } from '../../styles/theme';
import { FlightList } from '../../components/flights/FlightList';
import { useNavigation } from '@react-navigation/native';

export const FlightSummary = () => {
  const [flexibleDatesEnabled, setFlexibleDatesEnabled] = useState(false);
  const [extraBaggageEnabled, setExtraBaggageEnabled] = useState(false);
  const navigation = useNavigation();

  const flight = {
    origin: {
      code: 'LOS',
      city: 'Lagos',
      time: '10:15 AM',
      date: 'Thu Feb 20 2025'
    },
    destination: {
      code: 'ABV', 
      city: 'Abuja',
      time: '11:15 AM',
      date: 'Thu Feb 20 2025'
    }
  };

  const handleContinue = () => {
    navigation.navigate('Checkout');
  };

  return (
    <ScreenLayout headerBackground={colors.background}>
      <FlightHeader title="Flight Summary" />
      <CountdownBanner initialMinutes={29} initialSeconds={54} />
      <BookingProgress currentStep={3} />
      
      <View style={styles.container}>
        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.card}>
            <FlightList flights={[flight]} />
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Add-Ons</Text>
            <View style={styles.addOn}>
              <View style={styles.addOnRow}>
                <View style={styles.addOnIconContainer}>
                  <Image 
                    source={require('../../../assets/icons/flexible-dates.png')}
                    style={styles.addOnIcon}
                  />
                </View>
                <View style={styles.addOnContent}>
                  <View style={styles.addOnHeader}>
                    <Text style={styles.addOnTitle}>Flexible travel dates</Text>
                    <View style={styles.recommendedPill}>
                      <Text style={styles.recommended}>Recommended</Text>
                    </View>
                  </View>
                  <Text style={styles.addOnDescription}>
                    This product gives you the freedom to make one date change to your flight without paying any airline penalty fees. Valid up to 24 hours prior to departure of the original ticket.{' '}
                    <Text style={styles.learnMore}>Learn more</Text>
                  </Text>
                  <View style={styles.addOnFooter}>
                    <Text style={styles.addOnPrice}>+ ₦17,764.00</Text>
                    <Switch
                      value={flexibleDatesEnabled}
                      onValueChange={setFlexibleDatesEnabled}
                      trackColor={{ false: colors.border, true: colors.primary }}
                      thumbColor={colors.white}
                    />
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.addOn}>
              <View style={styles.addOnRow}>
                <View style={styles.addOnIconContainer}>
                  <Image 
                    source={require('../../../assets/icons/baggage.png')}
                    style={styles.addOnIcon}
                  />
                </View>
                <View style={styles.addOnContent}>
                  <Text style={styles.addOnTitle}>Extra baggage</Text>
                  <Text style={styles.addOnDescription}>
                    This product gives you the freedom to make one date change to your flight without paying any airline penalty fees. Valid up to 24 hours prior to departure of the original ticket.{' '}
                    <Text style={styles.learnMore}>Learn more</Text>
                  </Text>
                  <View style={styles.addOnFooter}>
                    <Text style={styles.addOnPrice}>+ ₦17,764.00</Text>
                    <Switch
                      value={extraBaggageEnabled}
                      onValueChange={setExtraBaggageEnabled}
                      trackColor={{ false: colors.border, true: colors.primary }}
                      thumbColor={colors.white}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
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
  card: {
    backgroundColor: colors.white,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontFamily: typography.semiBold,
    color: colors.text,
    marginBottom: 16,
  },
  flightInfo: {
    gap: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 8,
  },
  infoIcon: {
    width: 20,
    height: 20,
    borderRadius: 8,
    backgroundColor: colors.background,
  },
  infoContent: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textLight,
  },
  infoValue: {
    fontSize: 14,
    fontFamily: typography.medium,
    color: colors.text,
  },
  addOn: {
    marginBottom: 16,
  },
  addOnRow: {
    flexDirection: 'row',
    gap: 12,
  },
  addOnIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addOnIcon: {
    width: 20,
    height: 20,
  },
  addOnContent: {
    flex: 1,
  },
  addOnHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  addOnTitle: {
    fontSize: 14,
    fontFamily: typography.semiBold,
    color: colors.text,
  },
  recommendedPill: {
    backgroundColor: '#E8FFF5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
  },
  recommended: {
    fontSize: 12,
    fontFamily: typography.bold,
    color: '#2E8B4F',
  },
  addOnDescription: {
    fontSize: 12,
    fontFamily: typography.regular,
    color: colors.text,
    lineHeight: 20,
    marginBottom: 12,
  },
  learnMore: {
    color: colors.primary,
  },
  addOnFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addOnPrice: {
    fontSize: 16,
    fontFamily: typography.semiBold,
    color: colors.text,
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