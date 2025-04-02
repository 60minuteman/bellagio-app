import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ScreenLayout } from '../../components/layout/ScreenLayout';
import { colors, typography } from '../../styles/theme';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { BronzeTier } from '../../components/profile/tiers/BronzeTier';
import { SilverTier } from '../../components/profile/tiers/SilverTier';
import { GoldTier } from '../../components/profile/tiers/GoldTier';
import { PlatinumTier } from '../../components/profile/tiers/PlatinumTier';
import { DiamondTier } from '../../components/profile/tiers/DiamondTier';
import { ScreenHeader } from '../../components/common/ScreenHeader';

const membershipTiers = [
  { id: 'bronze', label: 'Bronze Member®', current: true },
  { id: 'silver', label: 'Silver Member®' },
  { id: 'gold', label: 'Gold Member®' },
  { id: 'platinum', label: 'Platinum Member®' },
  { id: 'diamond', label: 'Diamond Member®' },
];

export const BenefitsScreen = () => {
  const navigation = useNavigation();
  const [selectedTier, setSelectedTier] = useState('bronze');

  const renderTierContent = () => {
    switch (selectedTier) {
      case 'bronze':
        return <BronzeTier />;
      case 'silver':
        return <SilverTier />;
      case 'gold':
        return <GoldTier />;
      case 'platinum':
        return <PlatinumTier />;
      case 'diamond':
        return <DiamondTier />;
      default:
        return <BronzeTier />;
    }
  };

  return (
    <ScreenLayout>
      <ScreenHeader title="Your Benefits" />

      <ScrollView style={styles.container}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.tierTabs}
          contentContainerStyle={styles.tierTabsContent}
        >
          {membershipTiers.map((tier) => (
            <TouchableOpacity
              key={tier.id}
              style={[
                styles.tierTab,
                selectedTier === tier.id && styles.tierTabActive,
              ]}
              onPress={() => setSelectedTier(tier.id)}
            >
              <Text
                style={[
                  styles.tierTabText,
                  selectedTier === tier.id && styles.tierTabTextActive,
                ]}
              >
                {tier.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {renderTierContent()}
      </ScrollView>
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
  tierTabs: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  tierTabsContent: {
    paddingHorizontal: 16,
  },
  tierTab: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginRight: 16,
  },
  tierTabActive: {
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  tierTabText: {
    fontSize: 14,
    fontFamily: typography.medium,
    color: colors.textLight,
  },
  tierTabTextActive: {
    color: colors.primary,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontFamily: typography.semiBold,
    color: colors.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: typography.regular,
    color: colors.textLight,
    marginBottom: 24,
  },
  benefitsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  rewardsSection: {
    marginTop: 8,
  },
  rewardsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  rewardsTitle: {
    fontSize: 16,
    fontFamily: typography.semiBold,
    color: colors.text,
  },
  rewardsLink: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rewardsLinkText: {
    fontSize: 14,
    fontFamily: typography.medium,
    color: colors.primary,
    marginRight: 4,
  },
  rewardsSubtitle: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textLight,
    marginBottom: 24,
  },
  pointsHighlight: {
    color: colors.text,
    fontFamily: typography.medium,
  },
}); 