import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ScreenLayout } from '../../components/layout/ScreenLayout';
import { colors, typography } from '../../styles/theme';
import { Feather } from '@expo/vector-icons';
import { Button } from '../../components/common/Button';
import { useNavigation } from '@react-navigation/native';
import { PassengerInfoCard } from '../../components/check-in/PassengerInfoCard';

export const FlightRulesScreen = () => {
  const navigation = useNavigation();

  return (
    <ScreenLayout>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Feather name="chevron-left" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Flight Rules & Regulations</Text>
      </View>

      <ScrollView style={styles.container}>
        <View style={styles.rulesContainer}>
          <View style={styles.ruleItem}>
            <Text style={styles.ruleTitle}>Check-in Deadline:</Text>
            <Text style={styles.ruleText}>
              Check-in closes 30 minutes prior to scheduled departure time for domestic flights and 60 minutes for international flights.
            </Text>
          </View>

          <View style={styles.ruleItem}>
            <Text style={styles.ruleTitle}>Travel Documents:</Text>
            <Text style={styles.ruleText}>
              Passengers must present valid government-issued photo identification (e.g., passport, driver's license) and any required visas.
            </Text>
          </View>

          <View style={styles.ruleItem}>
            <Text style={styles.ruleTitle}>Baggage Allowance:</Text>
            <Text style={styles.ruleText}>
              Each passenger is allowed [insert number] pieces of checked baggage, with a maximum weight of [insert weight] kg/lbs and dimensions of [insert dimensions] cm/in.
            </Text>
          </View>

          <View style={styles.ruleItem}>
            <Text style={styles.ruleTitle}>Prohibited Items:</Text>
            <Text style={styles.ruleText}>
              Certain items, such as firearms, explosives, and hazardous materials, are prohibited in carry-on and checked baggage.
            </Text>
          </View>

          <View style={styles.ruleItem}>
            <Text style={styles.ruleTitle}>Special Requests and Assistance:</Text>
            <Text style={styles.ruleText}>
              Passengers with special requests, such as meal preferences or wheelchair assistance, must notify the airline at least [insert time] hours prior to departure.
            </Text>
          </View>

          <View style={styles.disclaimer}>
            <Feather name="info" size={20} color={colors.textLight} />
            <Text style={styles.disclaimerText}>
              Please note that these rules are a summary of our policies. For more detailed information, View our{' '}
              <Text style={styles.link}>Terms and Conditions</Text>
            </Text>
          </View>
        </View>

        <PassengerInfoCard 
          fullName="Rayden Gandalf"
          pnr="RLXPHD"
          flightNumber="VK-214"
          route="Lagos (MMA2) - Abuja"
          seat="12D"
          departureDateTime="Thu Feb 20th, 2025 @ 10:25 AM"
        />
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.buttonRow}>
          <Button 
            title="Back"
            onPress={() => navigation.goBack()}
            style={[styles.secondaryButton, { flex: 0.3 }]}
            textStyle={styles.secondaryButtonText}
          />
          <Button 
            title="Boarding Pass"
            onPress={() => navigation.navigate('BoardingPass')}
            style={[styles.button, { flex: 0.65 }]}
          />
        </View>
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: colors.background,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    flex: 1,
    fontSize: 16,
    fontFamily: typography.semiBold,
    color: colors.text,
    textAlign: 'center',
    marginRight: 28,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  rulesContainer: {
    padding: 20,
    backgroundColor: colors.white,
    borderRadius: 16,
    margin: 16,
  },
  ruleItem: {
    marginBottom: 20,
  },
  ruleTitle: {
    fontSize: 16,
    fontFamily: typography.semiBold,
    color: colors.text,
    marginBottom: 4,
  },
  ruleText: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textLight,
    lineHeight: 20,
  },
  disclaimer: {
    flexDirection: 'row',
    backgroundColor: colors.background,
    padding: 16,
    borderRadius: 12,
    marginTop: 8,
  },
  disclaimerText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textLight,
  },
  link: {
    color: colors.primary,
    textDecorationLine: 'underline',
  },
  footer: {
    padding: 16,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  button: {
    borderRadius: 60,
    height: 56,
    textAlign: 'center',
    marginBottom: 20,
  },
  secondaryButton: {
    borderRadius: 60,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.border,
    height: 56,
    marginBottom: 20,
  },
  secondaryButtonText: {
    color: colors.text
  }
}); 