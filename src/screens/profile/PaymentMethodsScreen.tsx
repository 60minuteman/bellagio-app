import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { ScreenLayout } from '../../components/layout/ScreenLayout';
import { colors, typography } from '../../styles/theme';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/common/Button';
import { ScreenHeader } from '../../components/common/ScreenHeader';
import { Feather } from '@expo/vector-icons';

export const PaymentMethodsScreen = () => {
  const navigation = useNavigation();

  return (
    <ScreenLayout>
      <ScreenHeader title="Payment Methods" />

      <View style={styles.container}>
        <Text style={styles.description}>
          Add your cards for faster and easier booking. Bellagio keeps your information safe.
        </Text>

        <View style={styles.cardContainer}>
          <View style={styles.cardBadge}>
            <Text style={styles.badgeText}>Primary card</Text>
          </View>

          <View style={styles.cardContent}>
            <View style={styles.cardLogo}>
              {/* Replace with actual Mastercard logo */}
              <View style={[styles.logoCircle, styles.logoCircleRed]} />
              <View style={[styles.logoCircle, styles.logoCircleOrange]} />
            </View>
            
            <Text style={styles.cardNumber}>Mastercard ...9322</Text>
            <Text style={styles.expiryDate}>Expires 10/26</Text>

            <View style={styles.cardActions}>
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionButtonText}>Edit details</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Text style={[styles.actionButtonText, styles.deleteText]}>Delete card</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.addCardContainer}>
          <TouchableOpacity style={styles.addCardButton}>
            <Text style={styles.addCardText}>Add a new card</Text>
            <Feather name="plus" size={20} color={colors.primary} />
          </TouchableOpacity>
        </View>
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  description: {
    fontSize: 16,
    fontFamily: typography.regular,
    color: colors.textLight,
    marginBottom: 24,
    lineHeight: 24,
  },
  cardContainer: {
    backgroundColor: colors.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 16,
    overflow: 'hidden',
  },
  cardBadge: {
    position: 'absolute',
    right: 16,
    top: 16,
    backgroundColor: colors.background,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 100,
    zIndex: 1,
  },
  badgeText: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.text,
  },
  cardContent: {
    padding: 24,
    alignItems: 'center',
  },
  cardLogo: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  logoCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  logoCircleRed: {
    backgroundColor: '#FF0000',
    marginRight: -10,
  },
  logoCircleOrange: {
    backgroundColor: '#FF9500',
  },
  cardNumber: {
    fontSize: 16,
    fontFamily: typography.medium,
    color: colors.text,
    marginBottom: 8,
  },
  expiryDate: {
    fontSize: 16,
    fontFamily: typography.regular,
    color: colors.textLight,
    marginBottom: 24,
  },
  cardActions: {
    flexDirection: 'row',
    gap: 24,
  },
  actionButton: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 100,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  actionButtonText: {
    fontSize: 16,
    fontFamily: typography.regular,
    color: colors.primary,
  },
  deleteText: {
    color: colors.error,
  },
  addCardContainer: {
    backgroundColor: colors.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
  },
  addCardButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    height: 150,
  },
  addCardText: {
    fontSize: 16,
    fontFamily: typography.regular,
    color: colors.primary,
  },
}); 