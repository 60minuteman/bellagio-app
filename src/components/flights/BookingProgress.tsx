import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../styles/theme';
import { Image } from 'react-native';

interface BookingProgressProps {
  currentStep: number;
}

export const BookingProgress = ({ currentStep }: BookingProgressProps) => {
  return (
    <View style={styles.container}>
      <View style={[styles.step, { backgroundColor: currentStep >= 1 ? colors.primary : colors.background }]}>
        <Image 
          source={require('../../../assets/icons/plane.png')}
          style={[styles.icon, { tintColor: currentStep >= 1 ? colors.white : colors.border }]}
        />
      </View>
      <View style={[styles.line, { width: 30, backgroundColor: currentStep >= 1 ? colors.primary : colors.border }]} />
      <View style={[styles.step, { backgroundColor: currentStep >= 2 ? colors.primary : colors.background }]}>
        <Image 
          source={require('../../../assets/icons/user.png')}
          style={[styles.icon, { tintColor: currentStep >= 2 ? colors.white : colors.border }]}
        />
      </View>
      <View style={[styles.line, { width: 30, backgroundColor: currentStep >= 2 ? colors.primary : colors.border }]} />
      <View style={[styles.step, { backgroundColor: currentStep >= 3 ? colors.primary : colors.background }]}>
        <Image 
          source={require('../../../assets/icons/card.png')}
          style={[styles.icon, { tintColor: currentStep >= 3 ? colors.white : colors.border }]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },
  step: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  icon: {
    width: 24,
    height: 24,
  },
  line: {
    height: 2,
    marginHorizontal: 8,
  },
});