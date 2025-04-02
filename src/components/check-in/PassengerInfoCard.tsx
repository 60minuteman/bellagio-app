import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colors, typography } from '../../styles/theme';

interface PassengerInfoProps {
  fullName: string;
  pnr: string;
  flightNumber: string;
  route: string;
  seat: string;
  departureDateTime: string;
}

export const PassengerInfoCard = ({
  fullName,
  pnr,
  flightNumber,
  route,
  seat,
  departureDateTime,
}: PassengerInfoProps) => {
  return (
    <View style={styles.passengerInfo}>
      <Text style={styles.sectionTitle}>Passenger Information</Text>

      <View style={styles.fullWidthField}>
        <Text style={styles.label}>Full Name</Text>
        <Text style={styles.value}>{fullName}</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.halfField}>
          <Text style={styles.label}>PNR</Text>
          <Text style={styles.value}>{pnr}</Text>
        </View>

        <View style={styles.halfField}>
          <Text style={styles.label}>Flight</Text>
          <Text style={styles.value}>{flightNumber}</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.halfField}>
          <Text style={styles.label}>Flight Route</Text>
          <Text style={styles.value}>{route}</Text>
        </View>

        <View style={styles.halfField}>
          <Text style={styles.label}>Seat</Text>
          <Text style={styles.value}>{seat}</Text>
        </View>
      </View>

      <View style={styles.fullWidthField}>
        <Text style={styles.label}>Departure Date & Time</Text>
        <Text style={styles.value}>{departureDateTime}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  passengerInfo: {
    padding: 20,
    backgroundColor: colors.white,
    borderRadius: 16,
    margin: 16,
    marginTop: 0,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: typography.semiBold,
    color: colors.text,
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 20,
  },
  fullWidthField: {
    marginBottom: 20,
  },
  halfField: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textLight,
    marginBottom: 8,
  },
  value: {
    fontSize: 16,
    fontFamily: typography.medium,
    color: colors.text,
  },
});