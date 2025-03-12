import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { colors, typography } from '../../styles/theme';

interface DateSelectorProps {
  tripType: 'one-way' | 'round-trip';
  departureDate: string;
  arrivalDate?: string;
  onDepartureDatePress: () => void;
  onArrivalDatePress: () => void;
}

export const DateSelector = ({ 
  tripType, 
  departureDate, 
  arrivalDate, 
  onDepartureDatePress, 
  onArrivalDatePress 
}: DateSelectorProps) => {
  return (
    <View style={[
      styles.container,
      tripType === 'one-way' && styles.singleDateContainer
    ]}>
      <TouchableOpacity 
        style={[
          styles.dateField, 
          tripType === 'round-trip' && styles.departureDateField
        ]}
        onPress={onDepartureDatePress}
      >
        <Text style={styles.dateLabel}>Departure</Text>
        <Text style={styles.dateValue}>{departureDate}</Text>
      </TouchableOpacity>
      
      {tripType === 'round-trip' && (
        <TouchableOpacity 
          style={styles.dateField}
          onPress={onArrivalDatePress}
        >
          <Text style={styles.dateLabel}>Arrival</Text>
          <Text style={styles.dateValue}>{arrivalDate}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  singleDateContainer: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  dateField: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    padding: 12,
  },
  departureDateField: {
    marginRight: 12,
  },
  dateLabel: {
    fontSize: 12,
    fontFamily: typography.regular,
    color: colors.textLight,
  },
  dateValue: {
    fontSize: 14,
    fontFamily: typography.medium,
    color: colors.text,
    marginTop: 4,
  },
}); 