import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { colors, typography } from '../../styles/theme';

type SeatStatus = 'available' | 'reserved' | 'selected' | 'unavailable' | 'executive';

interface SeatProps {
  id: string;
  status: SeatStatus;
  onSelect: (seatId: string) => void;
  selected?: boolean;
}

const Seat = ({ id, status, onSelect, selected }: SeatProps) => {
  const getBackgroundColor = () => {
    if (selected) return colors.primary;
    switch (status) {
      case 'available':
        return '#E8F5E9';
      case 'reserved':
        return '#F5F5F5';
      case 'unavailable':
        return '#F5F5F5';
      case 'executive':
        return '#FFF3E0';
      default:
        return colors.white;
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.seat,
        { backgroundColor: getBackgroundColor() },
        status === 'unavailable' && styles.unavailable
      ]}
      onPress={() => status === 'available' && onSelect(id)}
      disabled={status !== 'available'}
    >
      <Text style={[
        styles.seatText,
        selected && styles.selectedSeatText
      ]}>{id}</Text>
    </TouchableOpacity>
  );
};

interface SeatGridProps {
  onSeatSelect: (seatId: string) => void;
  selectedSeat?: string;
}

export const SeatGrid = ({ onSeatSelect, selectedSeat }: SeatGridProps) => {
  const rows = ['A', 'B', 'C', 'D'];
  const columns = Array.from({ length: 17 }, (_, i) => i + 1);

  const getSeatStatus = (seatId: string): SeatStatus => {
    if (seatId === '4A' || seatId === '4B' || seatId === '4C' || seatId === '4D') return 'reserved';
    if (seatId === '9C' || seatId === '9D') return 'unavailable';
    if (seatId.startsWith('16') || seatId.startsWith('17')) return 'executive';
    return 'available';
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {rows.map(letter => (
          <Text key={letter} style={styles.headerText}>{letter}</Text>
        ))}
      </View>

      {columns.map(number => (
        <View key={number} style={styles.row}>
          {rows.map(letter => {
            const seatId = `${number}${letter}`;
            return (
              <Seat
                key={seatId}
                id={seatId}
                status={getSeatStatus(seatId)}
                onSelect={onSeatSelect}
                selected={selectedSeat === seatId}
              />
            );
          })}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 14,
    fontFamily: typography.medium,
    color: colors.text,
    width: 40,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 8,
  },
  seat: {
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
  },
  seatText: {
    fontSize: 12,
    fontFamily: typography.medium,
    color: colors.text,
  },
  selectedSeatText: {
    color: colors.white,
  },
  unavailable: {
    opacity: 0.5,
  },
}); 