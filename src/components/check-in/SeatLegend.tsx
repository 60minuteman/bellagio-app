import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colors, typography } from '../../styles/theme';

export const SeatLegend = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={[styles.indicator, { backgroundColor: '#E8F5E9' }]} />
        <Text style={styles.text}>Economy</Text>

        <View style={[styles.indicator, { backgroundColor: '#F5F5F5' }]} />
        <Text style={styles.text}>Business</Text>

        <View style={[styles.indicator, { backgroundColor: '#F5F5F5', opacity: 0.5 }]} />
        <Text style={styles.text}>Unavailable</Text>
      </View>
      <View style={styles.row}>
        <View style={[styles.indicator, { backgroundColor: '#FFF3E0' }]} />
        <Text style={styles.text}>Reserved</Text>

        <View style={[styles.indicator, { backgroundColor: colors.primary }]} />
        <Text style={styles.text}>Executive</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#E9EDF2',
    borderRadius: 16,
    marginBottom: 20,
    backgroundColor: colors.white,
    marginHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  indicator: {
    width: 16,
    height: 16,
    borderRadius: 4,
    marginRight: 8,
    marginLeft: 16,
  },
  text: {
    fontSize: 12,
    fontFamily: typography.regular,
    color: colors.textLight,
  },
}); 