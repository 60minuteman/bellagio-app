import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, Image } from 'react-native';
import { colors, typography } from '../../styles/theme';
import { Feather } from '@expo/vector-icons';
import { Button } from '../common/Button';
import { useNavigation } from '@react-navigation/native';

interface FlightViewProps {
  visible: boolean;
  onClose: () => void;
  flight?: {
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
    class: string;
  };
}

export const FlightView = ({ visible, onClose, flight }: FlightViewProps) => {
  const navigation = useNavigation();

  if (!flight) return null;

  const handleContinue = () => {
    onClose();
    navigation.navigate('PassengerInfo');
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Image 
              source={require('../../../assets/icons/logo-small.png')} 
              style={styles.logo}
            />
            <Text style={styles.title}>Flight View</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Feather name="x" size={24} color={colors.text} />
            </TouchableOpacity>
          </View>

          <View style={styles.flightInfo}>
            <View style={styles.routeContainer}>
              <View style={styles.locationContainer}>
                <Text style={styles.cityCode}>{flight.departure.code}</Text>
                <Text style={styles.time}>{flight.departure.time}</Text>
              </View>

              <View style={styles.flightPath}>
                <View style={styles.dotLine} />
                <Image 
                  source={require('../../../assets/icons/plane-path.png')}
                  style={styles.planeIcon}
                />
                <View style={styles.dotLine} />
              </View>

              <View style={styles.locationContainer}>
                <Text style={styles.cityCode}>{flight.arrival.code}</Text>
                <Text style={styles.time}>{flight.arrival.time}</Text>
              </View>
            </View>

            <View style={styles.infoTags}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>{flight.duration}</Text>
              </View>
              <View style={[styles.tag, styles.classTag]}>
                <Text style={styles.tagText}>{flight.class}</Text>
              </View>
            </View>
          </View>

          <View style={styles.policyContainer}>
            <PolicyItem 
              icon="ticket" 
              text="Refundable but Non-Transferrable & Non-Endorsable. Refund policy applies."
              type="success"
            />
            <PolicyItem 
              icon="briefcase" 
              text="20kg Checked-in Baggage allowance, extra might incure additional costs"
              type="success"
            />
            <PolicyItem 
              icon="check-circle" 
              text="Valid only on Bellagio Air."
              type="success"
            />
            <PolicyItem 
              icon="check-circle" 
              text="Fare is guaranteed if auto-priced and ticketed in the system on the same day"
              type="success"
            />
            <PolicyItem 
              icon="check-circle" 
              text="All travellers are required to present a government-issued form of identification before acceptance on flight."
              type="success"
            />
            <PolicyItem 
              icon="x-circle" 
              text="Name change not permitted under any circumstance."
              type="error"
            />
          </View>

          <View style={styles.priceContainer}>
            <View style={styles.priceRow}>
              <Text style={styles.passengerText}>Adult 1</Text>
              <Text style={styles.priceText}>₦132,382.00</Text>
            </View>
          </View>

          <Button 
            title="Continue"
            onPress={handleContinue}
            style={styles.continueButton}
          />
        </View>
      </View>
    </Modal>
  );
};

interface PolicyItemProps {
  icon: string;
  text: string;
  type: 'success' | 'error';
}

const PolicyItem = ({ icon, text, type }: PolicyItemProps) => (
  <View style={styles.policyItem}>
    <Feather 
      name={icon as any} 
      size={20} 
      color={type === 'success' ? '#38A45E' : '#FF3B30'} 
    />
    <Text style={styles.policyText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  content: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 34,
    maxHeight: '90%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  logo: {
    width: 32,
    height: 32,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: typography.semiBold,
    color: colors.text,
    marginLeft: -32, // Compensate for logo width to center title
  },
  closeButton: {
    padding: 4,
  },
  flightInfo: {
    backgroundColor: colors.background,
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
  },
  routeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  locationContainer: {
    alignItems: 'center',
  },
  cityCode: {
    fontSize: 24,
    fontFamily: typography.bold,
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
    paddingHorizontal: 8,
  },
  dotLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
  },
  planeIcon: {
    width: 34,
    height: 34,
    marginHorizontal: 8,
  },
  infoTags: {
    flexDirection: 'row',
    gap: 8,
  },
  tag: {
    backgroundColor: '#E5F6FF',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  classTag: {
    backgroundColor: '#E7F5EA',
  },
  tagText: {
    fontSize: 14,
    fontFamily: typography.medium,
    color: colors.text,
  },
  policyContainer: {
    gap: 16,
    marginBottom: 24,
  },
  policyItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  policyText: {
    flex: 1,
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.text,
    lineHeight: 20,
  },
  priceContainer: {
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  passengerText: {
    fontSize: 16,
    fontFamily: typography.medium,
    color: colors.text,
  },
  priceText: {
    fontSize: 18,
    fontFamily: typography.bold,
    color: colors.text,
  },
  continueButton: {
    borderRadius: 60,
  },
}); 