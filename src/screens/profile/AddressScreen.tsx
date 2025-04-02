import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { ScreenLayout } from '../../components/layout/ScreenLayout';
import { colors, typography } from '../../styles/theme';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';
import { Select } from '../../components/common/Select';
import { ScreenHeader } from '../../components/common/ScreenHeader';

export const AddressScreen = () => {
  const navigation = useNavigation();
  const [addressType, setAddressType] = useState('home');
  const [form, setForm] = useState({
    country: '',
    address1: '',
    address2: '',
    city: '',
    postalCode: '',
    businessName: '',
  });

  const handleSubmit = () => {
    // Validate required fields
    if (!form.country || !form.address1 || !form.city || !form.postalCode) {
      // Show error message
      return;
    }

    // TODO: Submit form data
    navigation.goBack();
  };

  return (
    <ScreenLayout>
      <ScreenHeader title="Personal Details" />

      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.progressContainer}>
            <View style={styles.progressBarContainer}>
              <View style={[styles.progressBar, { width: '22%' }]} />
            </View>
            <Text style={styles.progressText}>
              <Text style={styles.progressPercentage}>22%</Text> Complete
            </Text>
          </View>

          <Text style={styles.sectionTitle}>Address</Text>

          <View style={styles.addressTypeContainer}>
            <TouchableOpacity 
              style={[styles.addressTypeButton, addressType === 'home' && styles.addressTypeActive]}
              onPress={() => setAddressType('home')}
            >
              <Text style={[styles.addressTypeText, addressType === 'home' && styles.addressTypeTextActive]}>
                Home
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.addressTypeButton, addressType === 'business' && styles.addressTypeActive]}
              onPress={() => setAddressType('business')}
            >
              <Text style={[styles.addressTypeText, addressType === 'business' && styles.addressTypeTextActive]}>
                Business
              </Text>
            </TouchableOpacity>
          </View>

          {addressType === 'business' && (
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Business name<Text style={styles.required}> *</Text></Text>
              <Input
                placeholder="Enter business name"
                value={form.businessName}
                onChangeText={(text) => setForm({ ...form, businessName: text })}
              />
            </View>
          )}

          <View style={styles.inputGroup}>
            
            <Select
              label="Country"
              placeholder="Select country"
              value={form.country}
              onValueChange={(value) => setForm({ ...form, country: value })}
              items={[
                { label: 'United States', value: 'US' },
                { label: 'Canada', value: 'CA' },
                { label: 'Mexico', value: 'MX' }
              ]}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Address 1<Text style={styles.required}> *</Text></Text>
            <Input
              placeholder="Enter street address"
              value={form.address1}
              onChangeText={(text) => setForm({ ...form, address1: text })}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Address 2</Text>
            <Input
              placeholder="Apt, Suite, Building (optional)"
              value={form.address2}
              onChangeText={(text) => setForm({ ...form, address2: text })}
            />
          </View>

          <View style={styles.row}>
            <View style={[styles.inputGroup, styles.column]}>
              <Text style={styles.label}>City<Text style={styles.required}> *</Text></Text>
              <Input
                placeholder="Enter city"
                value={form.city}
                onChangeText={(text) => setForm({ ...form, city: text })}
              />
            </View>

            <View style={[styles.inputGroup, styles.column]}>
              <Text style={styles.label}>Postal code<Text style={styles.required}> *</Text></Text>
              <Input
                placeholder="Enter postal code"
                value={form.postalCode}
                onChangeText={(text) => setForm({ ...form, postalCode: text })}
                keyboardType="numeric"
                maxLength={5}
              />
            </View>
          </View>
        </ScrollView>

        <Button 
          title="Save changes & continue"
          onPress={handleSubmit}
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
  sectionTitle: {
    fontSize: 24,
    fontFamily: typography.semiBold,
    color: colors.text,
    marginBottom: 24,
  },
  addressTypeContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 100,
    padding: 4,
    marginBottom: 24,
  },
  addressTypeButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 100,
  },
  addressTypeActive: {
    backgroundColor: colors.background,
  },
  addressTypeText: {
    fontSize: 16,
    fontFamily: typography.regular,
    color: colors.textLight,
    textAlign: 'center',
  },
  addressTypeTextActive: {
    color: colors.text,
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
  required: {
    color: colors.error,
  },
  row: {
    flexDirection: 'row',
    gap: 16,
  },
  column: {
    flex: 1,
  },
  button: {
    marginBottom: 16,
  },
});