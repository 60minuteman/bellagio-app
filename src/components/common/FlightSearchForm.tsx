import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors, typography } from '../../styles/theme';
import { Button } from './Button';
import { TripTypeSelector } from './TripTypeSelector';
import { DateSelector } from './DateSelector';
import { LocationField } from './LocationField';
import { useNavigation } from '@react-navigation/native';

export const FlightSearchForm = () => {
  const navigation = useNavigation();
  const [tripType, setTripType] = useState<'one-way' | 'round-trip'>('round-trip');

  const handleSwapLocations = () => {
    // swap logic goes here
  };

  const handleSearch = () => {
    navigation.navigate('SelectFlight');
  };

  return (
    <View style={styles.container}>
      <TripTypeSelector 
        selectedType={tripType}
        onSelect={setTripType}
      />

      <View style={styles.locationsContainer}>
        <LocationField 
          type="departure"
          code="ABV"
          city="Abuja, Nigeria"
          onPress={() => {}}
        />

        <TouchableOpacity 
          style={styles.swapButton} 
          onPress={handleSwapLocations}
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        >
          <View style={styles.swapButtonContainer}>
            <Feather name="arrow-up" size={16} color={colors.white} />
            <Feather name="arrow-down" size={16} color={colors.white} />
          </View>
        </TouchableOpacity>

        <LocationField 
          type="arrival"
          code="LOS"
          city="Lagos, Nigeria"
          onPress={() => {}}
        />
      </View>

      <DateSelector 
        tripType={tripType}
        departureDate="Sat 3rd April"
        arrivalDate="Sat 3rd April"
        onDepartureDatePress={() => {}}
        onArrivalDatePress={() => {}}
      />

      <TouchableOpacity style={styles.passengerField}>
        <Text style={styles.fieldLabel}>Passenger</Text>
        <Text style={styles.fieldValue}>1 Adult, 0 Infant</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.classField}>
        <Text style={styles.fieldLabel}>Class</Text>
        <Text style={styles.fieldValue}>Economy</Text>
      </TouchableOpacity>

      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.checkboxContainer}>
          <View style={styles.checkbox} />
          <Text style={styles.checkboxLabel}>Shop with Points</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.checkboxContainer}>
          <View style={[styles.checkbox, styles.checkedBox]} />
          <Text style={styles.checkboxLabel}>Flexible dates</Text>
        </TouchableOpacity>
      </View>

      <Button 
        title="Search for flights"
        onPress={handleSearch}
        style={styles.searchButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 24,
    padding: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  locationsContainer: {
    position: 'relative',
    marginBottom: 12,
    zIndex: 1,
  },
  swapButton: {
    position: 'absolute',
    right: Platform.OS === 'ios' ? 16 : 14,
    top: '46%',
    marginTop: -20,
    zIndex: 2,
    ...Platform.select({
      android: {
        elevation: 6,
      },
    }),
  },
  swapButtonContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  passengerField: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  classField: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
  },
  fieldLabel: {
    fontSize: 12,
    fontFamily: typography.regular,
    color: colors.textLight,
  },
  fieldValue: {
    fontSize: 14,
    fontFamily: typography.medium,
    color: colors.text,
    marginTop: 4,
  },
  optionsContainer: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: 4,
    marginRight: 8,
  },
  checkedBox: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  checkboxLabel: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.text,
  },
  searchButton: {
    borderRadius: 30,
  },
}); 