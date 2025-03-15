import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { colors, typography } from '../../styles/theme';

interface Flight {
  origin: {
    code: string;
    city: string;
    time: string;
  };
  destination: {
    code: string;
    city: string;
    time: string;
  };
}

interface FlightListProps {
  flights: Flight[];
}

export const FlightList = ({ flights }: FlightListProps) => {
  return (
    <View>
      {flights.map((flight, index) => (
        <View key={index} style={styles.flightCard}>
          <View style={styles.route}>
            <View style={styles.locationInfo}>
              <Text style={styles.code}>{flight.origin.code}</Text>
              <Text style={styles.time}>{flight.origin.time}</Text>
            </View>

            <View style={styles.flightPath}>
              <View style={styles.line} />
              <Image 
                source={require('../../../assets/icons/plane-path.png')}
                style={styles.planeIcon}
              />
              <View style={styles.line} />
            </View>

            <View style={styles.locationInfo}>
              <Text style={styles.code}>{flight.destination.code}</Text>
              <Text style={styles.time}>{flight.destination.time}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  flightCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
  },
  route: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  locationInfo: {
    alignItems: 'center',
  },
  code: {
    fontSize: 16,
    fontFamily: typography.semiBold,
    color: colors.text,
    marginBottom: 4,
  },
  time: {
    fontSize: 14,
    fontFamily: typography.medium,
    color: colors.textLight,
  },
  flightPath: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
  },
  planeIcon: {
    width: 24,
    height: 24,
    marginHorizontal: 8,
  },
}); 