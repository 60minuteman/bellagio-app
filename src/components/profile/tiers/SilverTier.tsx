import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { colors, typography } from '../../../styles/theme';
import { BenefitItem } from '../BenefitItem';
import { Feather } from '@expo/vector-icons';

export const SilverTier = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Silver Member®.</Text>
      <Text style={styles.subtitle}>
        Unlock these benefits as a Silver Member®.
      </Text>

      <View style={styles.benefitsGrid}>
        {[...Array(5)].map((_, index) => (
          <BenefitItem
            key={index}
            title="Priority Check-in"
            locked={true}
          />
        ))}
      </View>

      <View style={styles.rewardsSection}>
        <View style={styles.rewardsHeader}>
          <Text style={styles.rewardsTitle}>Loyalty Point Rewards</Text>
          <TouchableOpacity style={styles.rewardsLink}>
            <Text style={styles.rewardsLinkText}>Go to rewards</Text>
            <Feather name="chevron-right" size={20} color={colors.primary} />
          </TouchableOpacity>
        </View>
        <Text style={styles.rewardsSubtitle}>
          You are <Text style={styles.pointsHighlight}>90,000</Text> Loyalty Points away from receiving these rewards and benefits
        </Text>

        <View style={styles.benefitsGrid}>
          {[...Array(5)].map((_, index) => (
            <BenefitItem
              key={index}
              title="Group 4 boarding"
              locked={true}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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