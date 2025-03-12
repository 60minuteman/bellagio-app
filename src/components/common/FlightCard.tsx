import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors, typography } from '../../styles/theme';
import { Button } from './Button';

interface FlightCardProps {
  fromCode: string;
  toCode: string;
  date: string;
  onPress?: () => void;
}

export const FlightCard = ({ 
  fromCode, 
  toCode, 
  date,
  onPress 
}: FlightCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.flightInfo}>
        <View style={styles.routeContainer}>
          <Text style={styles.cityCode}>{fromCode}</Text>
          <View style={styles.routeIcon}>
            <Feather name="arrow-right" size={20} color={colors.primary} />
          </View>
          <Text style={styles.cityCode}>{toCode}</Text>
        </View>
        <Text style={styles.flightDate}>{date}</Text>
      </View>
      <Button 
        title="View"
        onPress={onPress}
        style={styles.viewButton}
        textStyle={styles.viewButtonText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: colors.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  flightInfo: {
    flex: 1,
  },
  routeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  cityCode: {
    fontSize: 18,
    fontFamily: typography.semiBold,
    color: colors.black,
  },
  routeIcon: {
    marginHorizontal: 12,
  },
  flightDate: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: '#666',
  },
  viewButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: colors.primary,
    borderRadius: 16,
    minWidth: 80,
  },
  viewButtonText: {
    color: colors.white,
    fontSize: 14,
    fontFamily: typography.medium,
  },
}); 