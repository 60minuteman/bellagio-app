import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ScreenLayout } from '../../components/layout/ScreenLayout';
import { colors, typography } from '../../styles/theme';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SeatGrid } from '../../components/check-in/SeatGrid';
import { SeatLegend } from '../../components/check-in/SeatLegend';
import { Button } from '../../components/common/Button';
import { AssignSeatModal, ConfirmSeatModal, UnassignConfirmModal } from '../../components/check-in/SeatModals';

export const SeatSelect = () => {
  const navigation = useNavigation();
  const [selectedSeat, setSelectedSeat] = useState<string>();
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showUnassignModal, setShowUnassignModal] = useState(false);
  const [currentSeat, setCurrentSeat] = useState<string>();

  const handleSeatSelect = (seatId: string) => {
    setCurrentSeat(seatId);
    if (selectedSeat === seatId) {
      setShowConfirmModal(true);
    } else {
      setShowAssignModal(true);
    }
  };

  const handleAssignSeat = () => {
    setSelectedSeat(currentSeat);
    setShowAssignModal(false);
  };

  const handleKeepSeat = () => {
    setShowConfirmModal(false);
    setShowUnassignModal(false);
  };

  const handleUnassignRequest = () => {
    setShowConfirmModal(false);
    setShowUnassignModal(true);
  };

  const handleConfirmUnassign = () => {
    setSelectedSeat(undefined);
    setShowUnassignModal(false);
  };

  const handleContinue = () => {
    navigation.navigate('FlightRules');
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
        <Text style={styles.headerTitle}>Seat Selection</Text>
      </View>

      <View style={styles.flightInfo}>
        <View style={styles.route}>
          <Text style={styles.city}>Lagos (LOS)</Text>
          <Text style={styles.time}>10:15 AM,{'\n'}Thu Feb 20</Text>
        </View>
        <View style={styles.flightIcon}>
          <Feather name="arrow-right" size={20} color={colors.primary} />
        </View>
        <View style={styles.route}>
          <Text style={styles.city}>Abuja (ABV)</Text>
          <Text style={styles.time}>11:15 AM,{'\n'}Thu Feb 20</Text>
        </View>
      </View>

      <View style={styles.airportInfo}>
        <Text style={styles.airport}>Murtala Mohammed Airport (MMA2)</Text>
        <Feather name="arrow-right" size={16} color={colors.textLight} />
        <Text style={styles.airport}>Nnamdi Azikiwe Int'l Airport</Text>
      </View>

      <Text style={styles.instruction}>Click on a seat to assign a passenger</Text>

      <ScrollView style={styles.container}>
        <View style={styles.passengerInfo}>
          <View style={styles.passengerIcon}>
            <Text style={styles.passengerInitial}>JT</Text>
          </View>
          <View style={styles.passengerDetails}>
            <Text style={styles.passengerName}>James Trafford</Text>
            <Text style={styles.passengerEmail}>jamestrafford@gmail.com</Text>
          </View>
        </View>

        <Text style={styles.flightNumber}>Flight BG2453</Text>
        
        <SeatLegend />
        <SeatGrid onSeatSelect={handleSeatSelect} selectedSeat={selectedSeat} />
      </ScrollView>

      <AssignSeatModal
        isVisible={showAssignModal}
        onClose={() => setShowAssignModal(false)}
        seatNumber={currentSeat || ''}
        passengerName="James Trafford"
        onAssign={handleAssignSeat}
      />

      <ConfirmSeatModal
        isVisible={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        seatNumber={currentSeat || ''}
        passengerName="James Trafford"
        onKeepSeat={handleKeepSeat}
        onUnassign={handleUnassignRequest}
      />

      <UnassignConfirmModal
        isVisible={showUnassignModal}
        onClose={() => setShowUnassignModal(false)}
        onConfirmUnassign={handleConfirmUnassign}
        onKeepSeat={handleKeepSeat}
      />

      <View style={styles.footer}>
        <Button 
          title="Continue" 
          onPress={handleContinue} 
          disabled={!selectedSeat}
          style={styles.button}
        />
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
    marginRight: 28,
  },
  flightInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  route: {
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
    textAlign: 'center',
  },
  flightIcon: {
    width: 32,
    height: 32,
    backgroundColor: colors.background,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  airportInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  airport: {
    flex: 1,
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textLight,
    textAlign: 'center',
  },
  instruction: {
    fontSize: 14,
    fontFamily: typography.medium,
    color: colors.textLight,
    textAlign: 'center',
    padding: 16,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  passengerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: colors.white,
    borderRadius: 12,
    margin: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  passengerIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  passengerInitial: {
    color: colors.white,
    fontSize: 16,
    fontFamily: typography.semiBold,
  },
  passengerDetails: {
    flex: 1,
  },
  passengerName: {
    fontSize: 16,
    fontFamily: typography.semiBold,
    color: colors.text,
    marginBottom: 4,
  },
  passengerEmail: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textLight,
  },
  flightNumber: {
    fontSize: 16,
    fontFamily: typography.semiBold,
    color: colors.text,
    textAlign: 'center',
    marginBottom: 16,
  },
  footer: {
    padding: 16,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  button: {
    borderRadius: 60,
    marginBottom: 20,
  }
}); 