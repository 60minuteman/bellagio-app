import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Input } from '../common/Input';
import { Select } from '../common/Select';
import { colors, typography } from '../../styles/theme';

export const PassengerForm = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    title: '',
    dateOfBirth: '',
    country: '',
    nextOfKin: {
      firstName: '',
      lastName: '',
      phone: '',
      gender: '',
      email: '',
    },
  });

  // Define the options for select inputs
  const genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ];

  const titleOptions = [
    { label: 'Mr', value: 'mr' },
    { label: 'Mrs', value: 'mrs' },
    { label: 'Miss', value: 'miss' },
  ];

  const countryOptions = [
    { label: 'Nigeria', value: 'nigeria' },
    { label: 'Ghana', value: 'ghana' },
  ];

  return (
    <View style={styles.formContainer}>
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Passenger - 1 Adult</Text>
          <Text style={styles.sectionSubtitle}>
            Fields marked with asterisks are compulsory and should be filled.
          </Text>

          <View style={styles.inputContainer}>
            <Input
              label="First name"
              placeholder="Enter first name"
              value={form.firstName}
              onChangeText={(text) => setForm({ ...form, firstName: text })}
              required
            />
          </View>

          <View style={styles.inputContainer}>
            <Input
              label="Last name"
              placeholder="Enter last name"
              value={form.lastName}
              onChangeText={(text) => setForm({ ...form, lastName: text })}
              required
            />
          </View>

          <View style={styles.inputContainer}>
            <Input
              label="Email Address"
              placeholder="Enter email address"
              value={form.email}
              onChangeText={(text) => setForm({ ...form, email: text })}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.row}>
            <View style={styles.halfWidth}>
              <Select
                label="Gender"
                placeholder="Select"
                value={form.gender}
                onValueChange={(value) => setForm({ ...form, gender: value })}
                items={genderOptions}
                required
              />
            </View>
            <View style={styles.halfWidth}>
              <Select
                label="Title"
                placeholder="Select"
                value={form.title}
                onValueChange={(value) => setForm({ ...form, title: value })}
                items={titleOptions}
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Input
              label="Date of Birth"
              placeholder="DD/MM/YYYY"
              value={form.dateOfBirth}
              onChangeText={(text) => setForm({ ...form, dateOfBirth: text })}
              required
            />
          </View>

          <View style={styles.inputContainer}>
            <Select
              label="Country"
              placeholder="Select"
              value={form.country}
              onValueChange={(value) => setForm({ ...form, country: value })}
              items={countryOptions}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Next of Kin Information</Text>
          <Text style={styles.sectionSubtitle}>
            Enter the contact details of your next of kin.
          </Text>

          <View style={styles.inputContainer}>
            <Input
              label="First name"
              placeholder="Enter first name"
              value={form.nextOfKin.firstName}
              onChangeText={(text) => setForm({
                ...form,
                nextOfKin: { ...form.nextOfKin, firstName: text }
              })}
            />
          </View>

          <View style={styles.inputContainer}>
            <Input
              label="Last name"
              placeholder="Enter last name"
              value={form.nextOfKin.lastName}
              onChangeText={(text) => setForm({
                ...form,
                nextOfKin: { ...form.nextOfKin, lastName: text }
              })}
            />
          </View>

          <View style={styles.inputContainer}>
            <Input
              label="Phone Number"
              placeholder="Enter phone number"
              value={form.nextOfKin.phone}
              onChangeText={(text) => setForm({
                ...form,
                nextOfKin: { ...form.nextOfKin, phone: text }
              })}
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.inputContainer}>
            <Select
              label="Gender"
              placeholder="Select"
              value={form.nextOfKin.gender}
              onValueChange={(value) => setForm({
                ...form,
                nextOfKin: { ...form.nextOfKin, gender: value }
              })}
              items={genderOptions}
              required
            />
          </View>

          <View style={styles.inputContainer}>
            <Input
              label="Email Address"
              placeholder="Enter email address"
              value={form.nextOfKin.email}
              onChangeText={(text) => setForm({
                ...form,
                nextOfKin: { ...form.nextOfKin, email: text }
              })}
              keyboardType="email-address"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: '#E9EDF2',
    borderRadius: 12,
    padding: 16,
    width: '100%',
  },
  container: {
    gap: 32,
    width: '100%',
  },
  section: {
    gap: 16,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    width: '100%',
  },
  halfWidth: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: typography.semiBold,
    color: colors.text,
  },
  sectionSubtitle: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textLight,
    marginTop: 4,
  },
  inputContainer: {
    width: '100%',
  },
}); 