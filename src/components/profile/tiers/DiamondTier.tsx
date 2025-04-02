import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { colors, typography } from '../../../styles/theme';
import { BenefitItem } from '../BenefitItem';
import { Feather } from '@expo/vector-icons';

export const DiamondTier = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Diamond Member®.</Text>
      <Text style={styles.subtitle}>
        You are <Text style={styles.pointsHighlight}>40,000</Text> Loyalty Points ay from receiving these rewards and benefits
      </Text>

      <View style={styles.cardContainer}>
        <View style={styles.membershipCard}>
          {/* Card background pattern can be added as an absolute positioned image */}
          <View style={styles.cardPattern}>
            <Text style={styles.cardPatternText}>
              {'Diamond Card Diamond Card Diamond Card\nDiamond Card Diamond Card Diamond Card\nDiamond Card Diamond Card'}
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.viewCardButton}>
          <Text style={styles.viewCardText}>View back of card</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.benefitsGrid}>
        {[...Array(5)].map((_, index) => (
          <BenefitItem
            key={index}
            title="Complimentary Preferred Seats"
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
          You are <Text style={styles.pointsHighlight}>40,000</Text> Loyalty Points ay from receiving these rewards and benefits
        </Text>

        <View style={styles.benefitsGrid}>
          {[...Array(5)].map((_, index) => (
            <BenefitItem
              key={index}
              title="Group 6 boarding"
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
  cardContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  membershipCard: {
    width: '100%',
    height: 200,
    backgroundColor: '#E7F9FF',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
  },
  cardPattern: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: '40%',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    padding: 8,
  },
  cardPatternText: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 10,
    transform: [{ rotate: '-10deg' }],
  },
  viewCardButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  viewCardText: {
    fontSize: 14,
    fontFamily: typography.medium,
    color: colors.primary,
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