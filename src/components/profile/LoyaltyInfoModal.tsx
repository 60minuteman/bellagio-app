import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colors, typography } from '../../styles/theme';
import { Feather } from '@expo/vector-icons';
import { Button } from '../common/Button';
import { BottomSheet } from '../common/BottomSheet';

interface LoyaltyInfoModalProps {
  visible: boolean;
  onClose: () => void;
}

export const LoyaltyInfoModal = ({ visible, onClose }: LoyaltyInfoModalProps) => {
  return (
    <BottomSheet visible={visible} onClose={onClose}>
      <View style={styles.iconContainer}>
        <Feather name="info" size={24} color={colors.primary} />
      </View>
      <Text style={styles.title}>
        Earn and Redeem Loyalty Points for Your Travels
      </Text>
      <Text style={styles.description}>
        Loyalty points not only make your future trips more affordable but also enhance your travel experience, ensuring that every journey is more rewarding than the last.
      </Text>
      <Button 
        title="Great, thanks!"
        onPress={onClose}
        style={styles.button}
      />
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.primary + '20',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontFamily: typography.semiBold,
    color: colors.text,
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    fontFamily: typography.regular,
    color: colors.textLight,
    lineHeight: 24,
    marginBottom: 24,
  },
  button: {
    borderRadius: 60,
  },
}); 