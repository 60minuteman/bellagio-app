import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { ScreenLayout } from '../../components/layout/ScreenLayout';
import { colors, typography } from '../../styles/theme';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../components/common/Input';
import { Select } from '../../components/common/Select';
import { ScreenHeader } from '../../components/common/ScreenHeader';
import { Feather } from '@expo/vector-icons';

interface TravelCompanion {
  id: string;
  name: string;
}

export const ReservationPreferencesScreen = () => {
  const navigation = useNavigation();
  const [companions, setCompanions] = useState<TravelCompanion[]>([
    { id: '1', name: 'Jane Doe' }
  ]);
  const [seatingPreference, setSeatingPreference] = useState('');

  return (
    <ScreenLayout>
      <ScreenHeader title="Reservation Preferences" />

      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Add Travel Companions</Text>
          <Text style={styles.sectionDescription}>
            Add companion contact info and we'll save it. (Be sure to enter the name that matches the ID they show at the airport.
          </Text>

          {companions.map((companion) => (
            <View key={companion.id} style={styles.companionCard}>
              <View style={styles.companionInfo}>
                <View style={styles.avatarContainer}>
                  <Feather name="user-check" size={24} color={colors.text} />
                </View>
                <Text style={styles.companionName}>{companion.name}</Text>
              </View>
              <View style={styles.companionActions}>
                <TouchableOpacity style={styles.actionButton}>
                  <Text style={styles.actionButtonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                  <Text style={[styles.actionButtonText, styles.deleteText]}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}

          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>Add another companion</Text>
            <Feather name="plus" size={20} color={colors.primary} />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Booking Preferences</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Hometown city or airport</Text>
            <Input
              placeholder="Search"
              rightIcon={<Feather name="search" size={20} color={colors.textLight} />}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Seating Preference</Text>
            <Select
              placeholder="No preference"
              value={seatingPreference}
              onValueChange={setSeatingPreference}
              items={[
                { label: 'No preference', value: 'none' },
                { label: 'Window', value: 'window' },
                { label: 'Aisle', value: 'aisle' },
                { label: 'Middle', value: 'middle' },
              ]}
            />
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
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: typography.semiBold,
    color: colors.text,
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 16,
    fontFamily: typography.regular,
    color: colors.textLight,
    marginBottom: 24,
    lineHeight: 24,
  },
  companionCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  companionInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  companionName: {
    fontSize: 16,
    fontFamily: typography.medium,
    color: colors.text,
  },
  companionActions: {
    flexDirection: 'row',
    gap: 16,
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
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 100,
    paddingVertical: 16,
    backgroundColor: colors.white,
  },
  addButtonText: {
    fontSize: 16,
    fontFamily: typography.regular,
    color: colors.primary,
  },
  inputGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontFamily: typography.regular,
    color: colors.text,
    marginBottom: 8,
  },
}); 