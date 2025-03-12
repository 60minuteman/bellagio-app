import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors, typography } from '../../styles/theme';

interface LocationFieldProps {
  type: 'departure' | 'arrival';
  code: string;
  city: string;
  onPress: () => void;
}

export const LocationField = ({ 
  type, 
  code, 
  city, 
  onPress 
}: LocationFieldProps) => {
  return (
    <TouchableOpacity 
      style={[
        styles.container,
        Platform.OS === 'android' && styles.containerAndroid
      ]} 
      onPress={onPress}
    >
      <View style={styles.locationInfo}>
        <View style={styles.leftSection}>
          <Feather 
            name={type === 'departure' ? "plane-takeoff" : "plane-landing"} 
            size={Platform.OS === 'ios' ? 10 : 12}
            color={colors.textLight} 
          />
          <Text style={styles.code}>{code}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.rightSection}>
          <Text style={styles.label}>{type === 'departure' ? 'From' : 'To'}</Text>
          <Text style={styles.city}>{city}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: Platform.OS === 'ios' ? 1 : 0.5,
    borderColor: colors.border,
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    backgroundColor: colors.white,
  },
  containerAndroid: {
    elevation: 1,
  },
  locationInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  leftSection: {
    alignItems: 'center',
    width: Platform.OS === 'ios' ? 45 : 48,
  },
  code: {
    fontSize: 16,
    fontFamily: typography.semiBold,
    color: colors.text,
    marginTop: Platform.OS === 'ios' ? 2 : 3,
  },
  divider: {
    width: Platform.OS === 'ios' ? 1 : 0.5,
    height: 32,
    backgroundColor: colors.border,
    marginHorizontal: 12,
  },
  rightSection: {
    flex: 1,
  },
  label: {
    fontSize: Platform.OS === 'ios' ? 13 : 14,
    fontFamily: typography.regular,
    color: colors.textLight,
    marginBottom: Platform.OS === 'ios' ? 2 : 1,
    includeFontPadding: false,
  },
  city: {
    fontSize: 15,
    fontFamily: typography.medium,
    color: colors.text,
    includeFontPadding: false,
  },
}); 