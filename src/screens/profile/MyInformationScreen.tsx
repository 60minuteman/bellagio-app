import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { ScreenLayout } from '../../components/layout/ScreenLayout';
import { colors, typography } from '../../styles/theme';
import { InfoCard } from '../../components/profile/InfoCard';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { ScreenHeader } from '../../components/common/ScreenHeader';

export const MyInformationScreen = () => {
  const navigation = useNavigation();

  const infoCards = [
    {
      title: 'Personal Details',
      icon: 'user',
      route: 'PersonalDetails',
    },
    {
      title: 'Address',
      icon: 'map-pin',
      route: 'Address',
    },
    {
      title: 'Your Account',
      icon: 'settings',
      route: 'YourAccount',
    },
    {
      title: 'Secure Traveler',
      icon: 'shield',
      route: 'SecureTraveler',
    },
    {
      title: 'Passport & Resident Card',
      icon: 'credit-card',
      route: 'PassportAndResident',
    },
    {
      title: 'Emergency Contact',
      icon: 'phone',
      route: 'EmergencyContact',
    },
  ];

  return (
    <ScreenLayout>
      <ScreenHeader title="My Information" />

      <View style={styles.container}>
        {/* Progress Section */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: '22%' }]} />
          </View>
          <Text style={styles.progressText}>
            <Text style={styles.progressPercentage}>22%</Text> Complete
          </Text>
        </View>

        {/* Info Cards Grid */}
        <View style={styles.cardsContainer}>
          <View style={styles.cardsGrid}>
            {infoCards.map((card, index) => (
              <InfoCard
                key={index}
                title={card.title}
                icon={card.icon}
                onPress={() => navigation.navigate(card.route as never)}
              />
            ))}
          </View>
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
  progressContainer: {
    marginBottom: 24,
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    marginBottom: 8,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#34D399', // Green color for progress
    borderRadius: 4,
  },
  progressText: {
    fontSize: 16,
    fontFamily: typography.regular,
    color: colors.textLight,
  },
  progressPercentage: {
    color: colors.text,
    fontFamily: typography.medium,
  },
  cardsContainer: {
    flex: 1,
  },
  cardsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
}); 