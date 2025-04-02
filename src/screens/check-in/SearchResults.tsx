import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { ScreenLayout } from '../../components/layout/ScreenLayout';
import { colors, typography } from '../../styles/theme';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FlightList } from '../../components/flights/FlightList';
import { SeatSelect } from './SeatSelect';

interface FlightInfoProps {
  label: string;
  value: string;
  icon: React.ReactNode;
}

const FlightInfoItem = ({ label, value, icon }: FlightInfoProps) => (
  <View style={styles.infoItem}>
    <View style={styles.iconContainer}>
      {icon}
    </View>
    <View>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  </View>
);

export const SearchResults = () => {
  const navigation = useNavigation();

  const flight = {
    id: '1',
    origin: {
      code: 'LOS',
      city: 'Lagos',
      time: '10:15 AM'
    },
    destination: {
      code: 'ABV',
      city: 'Abuja',
      time: '11:15 AM'
    },
    duration: '1h',
    class: 'Economy', // Required field
    airline: 'Value Jet',
    price: '₦135,382.00',
    flightNumber: 'BG 2453',
    departureDate: 'Thu Feb 20 2025',
    arrivalDate: 'Thu Feb 20 2025',
    status: 'On Time'
  };

  const handleContinue = () => {
    navigation.navigate('SeatSelect');
  };

  return (
    <ScreenLayout>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Feather name="chevron-left" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Search Result</Text>
      </View>

      <View style={styles.contentContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Flight Information</Text>
            <FlightList 
              flights={[flight]}
              onFlightPress={() => {}}
              showPrice={false}
            />

            <View style={styles.detailsCard}>
              <FlightInfoItem
                label="Departure:"
                value="Thu Feb 20 2025, 10:15 AM"
                icon={<MaterialIcons name="flight-takeoff" size={20} color={colors.text} />}
              />
              <FlightInfoItem
                label="Arrival:"
                value="Thu Feb 20 2025, 11:15 AM"
                icon={<MaterialIcons name="flight-land" size={20} color={colors.text} />}
              />
              <FlightInfoItem
                label="Flight Number:"
                value="BG 2453"
                icon={<MaterialIcons name="flight" size={20} color={colors.text} />}
              />
              <FlightInfoItem
                label="Seat Number:"
                value="17A"
                icon={<MaterialIcons name="event-seat" size={20} color={colors.text} />}
              />
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Passenger Information</Text>
            <View style={styles.passengerCard}>
              <View style={styles.infoRow}>
                <View style={styles.infoCol}>
                  <Text style={styles.label}>Full Name:</Text>
                  <Text style={styles.value}>Rayden Gandalf</Text>
                </View>
              </View>

              <View style={styles.infoGrid}>
                <View style={styles.infoCol}>
                  <Text style={styles.label}>PNR:</Text>
                  <Text style={styles.value}>RLXPHD</Text>
                </View>
                <View style={styles.infoCol}>
                  <Text style={styles.label}>Flight:</Text>
                  <Text style={styles.value}>VK-214</Text>
                </View>
              </View>

              <View style={styles.infoGrid}>
                <View style={styles.infoCol}>
                  <Text style={styles.label}>Flight Route:</Text>
                  <Text style={styles.value}>Lagos (MMA2) - Abuja</Text>
                </View>
                <View style={styles.infoCol}>
                  <Text style={styles.label}>Seat:</Text>
                  <Text style={styles.value}>12D</Text>
                </View>
              </View>

              <View style={styles.infoRow}>
                <View style={styles.infoCol}>
                  <Text style={styles.label}>Departure Date & Time:</Text>
                  <Text style={styles.value}>Thu Feb 20th, 2025 @ 10:25 AM</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.bottomPadding} />
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.goBack()}>
            <Text style={styles.secondaryButtonText}>Go Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.primaryButton} onPress={handleContinue}>
            <Text style={styles.primaryButtonText}>Continue</Text>
          </TouchableOpacity>
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
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
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
    marginRight: 28, // Compensate for back button
  },
  contentContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: typography.semiBold,
    color: colors.text,
    marginBottom: 16,
  },
  flightCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 20,
    gap: 20,
    borderWidth: 1,
    borderColor: '#E9EDF2',
  },
  flightRoute: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E9EDF2',
  },
  location: {
    alignItems: 'center',
  },
  city: {
    fontSize: 16,
    fontFamily: typography.semiBold,
    color: colors.text,
    marginBottom: 4,
  },
  time: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textLight,
  },
  flightIcon: {
    width: 32,
    height: 32,
    backgroundColor: colors.background,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: colors.background,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoLabel: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textLight,
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 14,
    fontFamily: typography.medium,
    color: colors.text,
  },
  passengerCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 20,
    gap: 20,
    borderWidth: 1,
    borderColor: '#E9EDF2',
  },
  infoRow: {
    width: '100%',
  },
  infoGrid: {
    flexDirection: 'row',
    gap: 20,
  },
  infoCol: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textLight,
    marginBottom: 4,
  },
  value: {
    fontSize: 14,
    fontFamily: typography.medium,
    color: colors.text,
  },
  bottomPadding: {
    height: 100, // Add padding at bottom of scroll to prevent content being hidden by footer
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    gap: 12,
    padding: 20,
    paddingBottom: 40,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: '#E9EDF2',
  },
  secondaryButton: {
    flex: 1,
    height: 56,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: '#E9EDF2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButtonText: {
    fontSize: 16,
    fontFamily: typography.medium,
    color: colors.text,
  },
  primaryButton: {
    flex: 1,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    fontSize: 16,
    fontFamily: typography.medium,
    color: colors.white,
  },
  detailsCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 20,
    gap: 20,
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#E9EDF2',
  },
}); 