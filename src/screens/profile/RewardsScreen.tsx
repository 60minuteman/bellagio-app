import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { ScreenLayout } from '../../components/layout/ScreenLayout';
import { colors, typography } from '../../styles/theme';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ScreenHeader } from '../../components/common/ScreenHeader';

export const RewardsScreen = () => {
  const navigation = useNavigation();

  return (
    <ScreenLayout>
      <ScreenHeader title="Your Account" />

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.title}>Rewards</Text>
          <Text style={styles.subtitle}>
            Get rewarded more often with new Loyalty Point Rewards. Earn more rewards and customize your Bellagio experience.
          </Text>

          {/* Rewards Carousel */}
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.rewardsCarousel}
            contentContainerStyle={styles.carouselContent}
          >
            <View style={styles.rewardCard}>
              <View style={styles.rewardLockIcon}>
                <Feather name="lock" size={20} color="#FF3B30" />
              </View>
              <Text style={styles.rewardPoints}>15,000</Text>
              <Text style={styles.rewardLabel}>Loyalty Point{'\n'}Reward level</Text>
            </View>

            <View style={[styles.rewardCard, styles.rewardCardInactive]}>
              <View style={styles.rewardLockIcon}>
                <Feather name="lock" size={20} color="#FF3B30" />
              </View>
              <Text style={[styles.rewardPoints, styles.rewardPointsInactive]}>60,000</Text>
              <Text style={[styles.rewardLabel, styles.rewardLabelInactive]}>Loyalty Point{'\n'}Reward level</Text>
            </View>
          </ScrollView>

          {/* Benefits List */}
          <View style={styles.benefitItem}>
            <View style={styles.benefitIconContainer}>
              <Feather name="smile" size={24} color={colors.text} />
              <View style={styles.lockIconContainer}>
                <Feather name="lock" size={12} color="#FF3B30" />
              </View>
            </View>
            <View style={styles.benefitContent}>
              <Text style={styles.benefitTitle}>Group 5 boarding</Text>
              <Text style={styles.benefitSubtitle}>(for the membership year)</Text>
            </View>
          </View>

          <View style={styles.benefitItem}>
            <View style={styles.benefitIconContainer}>
              <Feather name="smile" size={24} color={colors.text} />
              <View style={styles.lockIconContainer}>
                <Feather name="lock" size={12} color="#FF3B30" />
              </View>
            </View>
            <View style={styles.benefitContent}>
              <Text style={styles.benefitTitle}>Loyallty Point Reward level</Text>
              <Text style={styles.benefitSubtitle}>(for the membership year)</Text>
            </View>
          </View>

          {/* Points Status */}
          <Text style={styles.pointsStatus}>
            You are <Text style={styles.pointsHighlight}>40,000</Text> Loyalty Points ay from receiving these rewards and benefits
          </Text>

          {/* No Rewards Card */}
          <View style={styles.noRewardsCard}>
            <View style={styles.noRewardsIcon}>
              <Feather name="alert-triangle" size={24} color={colors.textLight} />
            </View>
            <Text style={styles.noRewardsTitle}>No Rewards yet</Text>
            <Text style={styles.noRewardsText}>
              You'll earn rewards when you fly our Friendly skies, purchase our gift cards and earn Loyalty Points
            </Text>
            <TouchableOpacity style={styles.learnMoreButton}>
              <Text style={styles.learnMoreText}>Learn about Loyalty Point Rewards</Text>
              <Feather name="external-link" size={20} color={colors.primary} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: colors.background,
  },
  backButton: {
    marginRight: 16,
    padding: 4,
    position: 'absolute',
    left: 20,
    zIndex: 1,
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: typography.semiBold,
    color: colors.text,
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
    lineHeight: 24,
  },
  rewardsCarousel: {
    marginHorizontal: -16,
    marginBottom: 24,
  },
  carouselContent: {
    paddingHorizontal: 16,
  },
  rewardCard: {
    width: 200,
    padding: 24,
    backgroundColor: colors.primary,
    borderRadius: 12,
    marginRight: 12,
  },
  rewardCardInactive: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
  },
  rewardLockIcon: {
    marginBottom: 16,
  },
  rewardPoints: {
    fontSize: 32,
    fontFamily: typography.semiBold,
    color: colors.white,
    marginBottom: 8,
  },
  rewardPointsInactive: {
    color: colors.text,
  },
  rewardLabel: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.white,
    lineHeight: 20,
  },
  rewardLabelInactive: {
    color: colors.textLight,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  benefitIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  lockIconContainer: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#FFE5E5',
    borderRadius: 12,
    padding: 4,
  },
  benefitContent: {
    flex: 1,
  },
  benefitTitle: {
    fontSize: 16,
    fontFamily: typography.regular,
    color: colors.text,
    marginBottom: 4,
  },
  benefitSubtitle: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textLight,
  },
  pointsStatus: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textLight,
    marginBottom: 24,
  },
  pointsHighlight: {
    color: colors.text,
    fontFamily: typography.medium,
  },
  noRewardsCard: {
    padding: 24,
    backgroundColor: colors.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
  },
  noRewardsIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  noRewardsTitle: {
    fontSize: 16,
    fontFamily: typography.semiBold,
    color: colors.text,
    marginBottom: 8,
  },
  noRewardsText: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textLight,
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 20,
  },
  learnMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  learnMoreText: {
    fontSize: 14,
    fontFamily: typography.medium,
    color: colors.primary,
  },
}); 