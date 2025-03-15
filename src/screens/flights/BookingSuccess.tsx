import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { ScreenLayout } from '../../components/layout/ScreenLayout';
import { Button } from '../../components/common/Button';
import { colors, typography } from '../../styles/theme';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export const BookingSuccess = () => {
  const navigation = useNavigation();

  return (
    <ScreenLayout>
      <View style={styles.container}>
        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.spacer} />
          
          <View style={styles.card}>
            <View style={styles.successIcon}>
              <MaterialIcons name="check" size={32} color={colors.white} />
            </View>
            <Text style={styles.title}>🎉 Flight Booked Successfully!</Text>
            <Text style={styles.subtitle}>
              Your journey is set! A confirmation email with your ticket details has been sent to your inbox.
            </Text>

            <View style={styles.flightDetails}>
              <View style={styles.route}>
                <View style={styles.location}>
                  <Text style={styles.city}>Lagos (LOS)</Text>
                  <Text style={styles.time}>10:15 AM,</Text>
                  <Text style={styles.date}>Thu Feb 20</Text>
                </View>

                <View style={styles.planeIcon}>
                  <MaterialIcons name="flight" size={20} color={colors.primary} />
                </View>

                <View style={styles.location}>
                  <Text style={styles.city}>Abuja (ABV)</Text>
                  <Text style={styles.time}>11:15 AM,</Text>
                  <Text style={styles.date}>Thu Feb 20</Text>
                </View>
              </View>

              <View style={styles.divider} />

              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Flight Number:</Text>
                <Text style={styles.infoValue}>BG 2453</Text>
              </View>

              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>PNR Number:</Text>
                <Text style={styles.infoValue}>YRNSKW</Text>
              </View>

              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Flight Fare:</Text>
                <Text style={styles.infoValue}>₦135,382.00</Text>
              </View>

              <View style={styles.buttonContainer}>
                <Button 
                  title="Download my ticket"
                  onPress={() => {}}
                  variant="outline"
                  style={styles.downloadButton}
                  textStyle={styles.downloadButtonText}
                />
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Make Your Trip Smoother! 🚗 🏨</Text>
            <Text style={styles.sectionSubtitle}>
              Need a ride from the airport or a place to stay?
            </Text>

            <TouchableOpacity style={styles.option}>
              <View style={styles.optionIcon}>
                <MaterialIcons name="local-taxi" size={24} color={colors.text} />
              </View>
              <View style={styles.optionContent}>
                <Text style={styles.optionTitle}>Book a ride</Text>
                <Text style={styles.optionDescription}>
                  Fast lifts to your destination hassle-free.
                </Text>
              </View>
              <MaterialIcons name="chevron-right" size={24} color={colors.textLight} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.option}>
              <View style={styles.optionIcon}>
                <MaterialIcons name="hotel" size={24} color={colors.text} />
              </View>
              <View style={styles.optionContent}>
                <Text style={styles.optionTitle}>Find a hotel</Text>
                <Text style={styles.optionDescription}>
                  Comfortable stays at your destination.
                </Text>
              </View>
              <MaterialIcons name="chevron-right" size={24} color={colors.textLight} />
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <Button 
            title="Back to home"
            onPress={() => navigation.navigate('MainApp')}
            variant="outline"
            borderColor="#E9EDF2"
            textStyle={styles.homeButtonText}
          />
        </View>
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContent: {
    padding: 20,
  },
  spacer: {
    height: 60,
  },
  card: {
    backgroundColor: colors.white,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  successIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#34D399',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontFamily: typography.semiBold,
    color: colors.text,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textLight,
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 20,
  },
  flightDetails: {
    backgroundColor: '#E7F9FF',
    borderRadius: 12,
    padding: 16,
  },
  route: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  location: {
    alignItems: 'center',
  },
  city: {
    fontSize: 16,
    fontFamily: typography.semiBold,
    color: colors.text,
    marginBottom: 4,
  },
  time: {
    fontSize: 14,
    fontFamily: typography.medium,
    color: colors.textLight,
  },
  date: {
    fontSize: 14,
    fontFamily: typography.medium,
    color: colors.textLight,
  },
  planeIcon: {
    padding: 8,
    backgroundColor: colors.white,
    borderRadius: 20,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  infoLabel: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textLight,
  },
  infoValue: {
    fontSize: 14,
    fontFamily: typography.medium,
    color: colors.text,
  },
  buttonContainer: {
    marginTop: 16,
    gap: 12,
  },
  downloadButton: {
    borderColor: colors.primary,
  },
  downloadButtonText: {
    color: colors.primary,
  },
  homeButtonText: {
    color: colors.text,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: typography.semiBold,
    color: colors.text,
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textLight,
    marginBottom: 24,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: colors.background,
    borderRadius: 12,
    marginBottom: 12,
  },
  optionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  optionContent: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontFamily: typography.semiBold,
    color: colors.text,
    marginBottom: 4,
  },
  optionDescription: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textLight,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  }
});