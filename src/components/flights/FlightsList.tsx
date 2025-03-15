import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { colors, typography } from '../../styles/theme';
import { FlightView } from './FlightView';

interface FlightInfo {
  id: string;
  flightNumber: string;
  departure: {
    code: string;
    city: string;
    time: string;
  };
  arrival: {
    code: string;
    city: string;
    time: string;
  };
  duration: string;
  type: string;
}

export const FlightsList = () => {
  const [selectedFlight, setSelectedFlight] = useState<FlightInfo | null>(null);
  
  const flights: FlightInfo[] = [
    {
      id: '1',
      flightNumber: 'BG 2453',
      departure: {
        code: 'LOS',
        city: 'Lagos',
        time: '10:15 AM',
      },
      arrival: {
        code: 'ABV',
        city: 'Abuja',
        time: '11:15 AM',
      },
      duration: '60 minutes',
      type: 'Non stop',
    },

    {
      id: '2',
      flightNumber: 'BG 2453',
      departure: {
        code: 'LOS',
        city: 'Lagos',
        time: '10:15 AM',
      },
      arrival: {
        code: 'ABV',
        city: 'Abuja',
        time: '11:15 AM',
      },
      duration: '60 minutes',
      type: 'Non stop',
    },
    // Add more flights as needed
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.flightsCount}>3 flights available</Text>
        <TouchableOpacity style={styles.filtersButton}>
          <Text style={styles.filtersText}>Filters</Text>
        </TouchableOpacity>
      </View>

      <FlightView 
        visible={!!selectedFlight}
        onClose={() => setSelectedFlight(null)}
        flight={selectedFlight || undefined}
      />
      
      <ScrollView showsVerticalScrollIndicator={false}>
        {flights.map((flight) => (
          <TouchableOpacity 
            key={flight.id} 
            style={styles.flightCard}
            onPress={() => setSelectedFlight(flight)}
          >
            <View style={styles.routeInfo}>
              <View style={styles.locationInfo}>
                <Text style={styles.locationCode}>({flight.departure.code})</Text>
                <Text style={styles.locationCity}>{flight.departure.city}</Text>
                <Text style={styles.time}>{flight.departure.time}</Text>
              </View>

              <View style={styles.flightPath}>
                <View style={styles.flightDetails}>
                  <Text style={styles.flightNumber}>{flight.flightNumber}</Text>
                  <Text style={styles.flightType}>{flight.type}</Text>
                </View>
                <Image 
                  source={require('../../../assets/icons/plane-path.png')}
                  style={styles.pathIcon}
                />
              </View>

              <View style={styles.locationInfo}>
                <Text style={styles.locationCode}>({flight.arrival.code})</Text>
                <Text style={styles.locationCity}>{flight.arrival.city}</Text>
                <Text style={styles.time}>{flight.arrival.time}</Text>
              </View>
            </View>

            <View style={styles.footer}>
              <TouchableOpacity style={styles.infoButton}>
                <Text style={styles.infoButtonText}>Flight info</Text>
              </TouchableOpacity>
              <View style={styles.duration}>
                <Text style={styles.durationText}>{flight.duration}</Text>
              </View>
              <TouchableOpacity style={styles.infoButton}>
                <Text style={styles.infoButtonText}>Flight status</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  flightsCount: {
    fontSize: 16,
    fontFamily: typography.medium,
    color: colors.text,
  },
  filtersButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filtersText: {
    fontSize: 14,
    fontFamily: typography.medium,
    color: colors.text,
  },
  flightCard: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  routeInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  locationInfo: {
    alignItems: 'flex-start',
  },
  locationCode: {
    fontSize: 14,
    fontFamily: typography.medium,
    color: colors.text,
  },
  locationCity: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textLight,
    marginTop: 2,
  },
  time: {
    fontSize: 16,
    fontFamily: typography.bold,
    color: colors.text,
    marginTop: 4,
  },
  flightPath: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 16,
  },
  flightDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 8,
  },
  flightNumber: {
    fontSize: 14,
    fontFamily: typography.medium,
    color: colors.textLight,
  },
  pathIcon: {
    width: 100,
    height: 24,
    resizeMode: 'contain',
  },
  flightType: {
    fontSize: 14,
    fontFamily: typography.medium,
    color: colors.textLight,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoButton: {
    backgroundColor: colors.background,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  infoButtonText: {
    fontSize: 14,
    fontFamily: typography.medium,
    color: colors.text,
  },
  duration: {
    backgroundColor: colors.background,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  durationText: {
    fontSize: 14,
    fontFamily: typography.medium,
    color: colors.primary,
  },
}); 