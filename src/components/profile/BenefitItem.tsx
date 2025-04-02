import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colors, typography } from '../../styles/theme';
import { Feather } from '@expo/vector-icons';

interface BenefitItemProps {
  title: string;
  locked?: boolean;
}

export const BenefitItem = ({ title, locked = true }: BenefitItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Feather name="smile" size={24} color={colors.text} />
        {locked && (
          <View style={styles.lockBadge}>
            <Feather name="lock" size={12} color={colors.error} />
          </View>
        )}
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '48%',
    marginBottom: 24,
    alignItems: 'center',
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#E7F9FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  lockBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FFEDED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    fontFamily: typography.medium,
    color: colors.text,
    textAlign: 'center',
  },
}); 