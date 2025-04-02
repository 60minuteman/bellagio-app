import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { ScreenLayout } from '../../components/layout/ScreenLayout';
import { colors, typography } from '../../styles/theme';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LoyaltyInfoModal } from '../../components/profile/LoyaltyInfoModal';
import { ScreenHeader } from '../../components/common/ScreenHeader';

const tiers = [
  { number: '04', points: '200,000', name: 'Diamond® Tier' },
  { number: '03', points: '150,000', name: 'Plantinum® Tier' },
  { number: '02', points: '100,000', name: 'Gold® Tier' },
  { number: '01', points: '50,000', name: 'Silver® Tier' },
  { number: '', points: '0', name: 'Bronze® Tier', current: true },
];

export const TierLevelsScreen = () => {
  const navigation = useNavigation();
  const [showInfoModal, setShowInfoModal] = useState(false);

  return (
    <ScreenLayout>
      <ScreenHeader title="Tier Levels" />

      <ScrollView style={styles.container}>
        <View style={styles.pointsCard}>
          <Text style={styles.pointsValue}>0</Text>
          <View style={styles.pointsRow}>
            <Text style={styles.pointsLabel}>Loyalty Points</Text>
            <TouchableOpacity onPress={() => setShowInfoModal(true)}>
              <Feather name="info" size={20} color={colors.text} />
            </TouchableOpacity>
          </View>
          <Text style={styles.pointsTarget}>
            40,000 more Loyalty Points to reach Silver®
          </Text>
          <View style={styles.resetBanner}>
            <Text style={styles.resetText}>Loyalty points reset April 1st</Text>
          </View>
        </View>

        <View style={styles.tiersContainer}>
          {tiers.map((tier, index) => (
            <View key={index} style={styles.tierRow}>
              <View style={[styles.tierNumber, tier.current && styles.currentTier]}>
                {tier.current ? (
                  <Feather name="plane" size={20} color={colors.primary} />
                ) : (
                  <Text style={styles.tierNumberText}>{tier.number}</Text>
                )}
              </View>
              <View style={styles.tierLine} />
              <View style={styles.tierInfo}>
                <Text style={styles.tierPoints}>{tier.points}</Text>
                <Text style={styles.tierName}>{tier.name}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <LoyaltyInfoModal 
        visible={showInfoModal}
        onClose={() => setShowInfoModal(false)}
      />
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
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  pointsCard: {
    backgroundColor: colors.white,
    margin: 16,
    padding: 20,
    borderRadius: 16,
  },
  pointsValue: {
    fontSize: 40,
    fontFamily: typography.semiBold,
    color: colors.text,
  },
  pointsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  pointsLabel: {
    fontSize: 16,
    fontFamily: typography.medium,
    color: colors.text,
  },
  pointsTarget: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textLight,
  },
  resetBanner: {
    backgroundColor: '#FEF9C3',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 100,
    marginTop: 16,
    alignSelf: 'flex-start',
  },
  resetText: {
    fontSize: 14,
    fontFamily: typography.medium,
    color: '#854D0E',
  },
  tiersContainer: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  tierRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 40,
  },
  tierNumber: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  currentTier: {
    backgroundColor: colors.primary + '20',
  },
  tierNumberText: {
    fontSize: 16,
    fontFamily: typography.semiBold,
    color: colors.text,
  },
  tierLine: {
    width: 1,
    height: 40,
    backgroundColor: colors.border,
    marginLeft: 20,
    marginTop: 40,
    position: 'absolute',
  },
  tierInfo: {
    marginLeft: 32,
  },
  tierPoints: {
    fontSize: 20,
    fontFamily: typography.semiBold,
    color: colors.text,
    marginBottom: 4,
  },
  tierName: {
    fontSize: 16,
    fontFamily: typography.medium,
    color: colors.textLight,
  },
}); 