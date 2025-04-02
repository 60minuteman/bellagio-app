import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { ScreenLayout } from '../../components/layout/ScreenLayout';
import { colors, typography } from '../../styles/theme';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';
import { Select } from '../../components/common/Select';
import { ScreenHeader } from '../../components/common/ScreenHeader';

const titleOptions = [
  { label: 'Mr.', value: 'mr' },
  { label: 'Mrs.', value: 'mrs' },
  { label: 'Ms.', value: 'ms' },
  { label: 'Dr.', value: 'dr' },
];

const genderOptions = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Other', value: 'other' },
  { label: 'Prefer not to say', value: 'prefer_not_to_say' },
];

const suffixOptions = [
  { label: 'Jr.', value: 'jr' },
  { label: 'Sr.', value: 'sr' },
  { label: 'II', value: 'ii' },
  { label: 'III', value: 'iii' },
  { label: 'IV', value: 'iv' },
];

export const PersonalDetailsScreen = () => {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    title: '',
    dateOfBirth: '',
    gender: '',
    preferredFirstName: '',
    suffix: '',
    primaryEmail: '',
    primaryPhone: '',
    phone2: '',
  });

  return (
    <ScreenLayout>
      <ScreenHeader title="Personal Details" />

      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Progress Bar */}
          <View style={styles.progressContainer}>
            <View style={styles.progressBarContainer}>
              <View style={[styles.progressBar, { width: '22%' }]} />
            </View>
            <Text style={styles.progressText}>
              <Text style={styles.progressPercentage}>22%</Text> Complete
            </Text>
          </View>

          {/* Name Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Your Name</Text>
            <Text style={styles.sectionDescription}>
              Your name, gender and date of birth should match the ID you show at the airport as required by{' '}
              <Text style={styles.link}>TSA Secure Flight</Text>
            </Text>

            <Input
              label="First name"
              placeholder="Enter"
              value={form.firstName}
              onChangeText={(text) => setForm({ ...form, firstName: text })}
              required
            />

            <Input
              label="Last name"
              placeholder="Enter"
              value={form.lastName}
              onChangeText={(text) => setForm({ ...form, lastName: text })}
              required
            />

            <View style={styles.row}>
              <View style={styles.column}>
                <Input
                  label="Middle name"
                  placeholder="Enter"
                  value={form.middleName}
                  onChangeText={(text) => setForm({ ...form, middleName: text })}
                  required
                />
              </View>
              <View style={styles.column}>
                <Select
                  label="Title"
                  placeholder="Select"
                  value={form.title}
                  onValueChange={(value) => setForm({ ...form, title: value })}
                  items={titleOptions}
                  required
                />
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.column}>
                <Select
                  label="Date of Birth"
                  placeholder="Select"
                  value={form.dateOfBirth}
                  onValueChange={(value) => setForm({ ...form, dateOfBirth: value })}
                  items={[]} // TODO: Add date picker
                  required
                />
              </View>
              <View style={styles.column}>
                <Select
                  label="Gender"
                  placeholder="Select"
                  value={form.gender}
                  onValueChange={(value) => setForm({ ...form, gender: value })}
                  items={genderOptions}
                  required
                />
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.column}>
                <Input
                  label="Preferred first name"
                  placeholder="Select"
                  value={form.preferredFirstName}
                  onChangeText={(text) => setForm({ ...form, preferredFirstName: text })}
                />
              </View>
              <View style={styles.column}>
                <Select
                  label="Suffix"
                  placeholder="Select"
                  value={form.suffix}
                  onValueChange={(value) => setForm({ ...form, suffix: value })}
                  items={suffixOptions}
                />
              </View>
            </View>
          </View>

          {/* Email & Phone Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Email & Phone</Text>
            <Text style={styles.sectionDescription}>
              Please enter a valid email to receive account updates and information
            </Text>

            <Input
              label="Primary email"
              placeholder="name@email.com"
              value={form.primaryEmail}
              onChangeText={(text) => setForm({ ...form, primaryEmail: text })}
              keyboardType="email-address"
              required
            />

            <Input
              label="Primary phone"
              placeholder="Enter"
              value={form.primaryPhone}
              onChangeText={(text) => setForm({ ...form, primaryPhone: text })}
              keyboardType="phone-pad"
              required
            />

            <Input
              label="Phone 2"
              placeholder="Enter"
              value={form.phone2}
              onChangeText={(text) => setForm({ ...form, phone2: text })}
              keyboardType="phone-pad"
            />
          </View>
        </ScrollView>

        <Button 
          title="Save changes & continue"
          onPress={() => {}}
          style={styles.button}
        />
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
    backgroundColor: '#34D399',
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
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
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
  link: {
    color: colors.primary,
    textDecorationLine: 'underline',
  },
  row: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  column: {
    flex: 1,
  },
  button: {
    marginBottom: 16,
  },
}); 