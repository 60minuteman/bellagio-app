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

export const SecureTravelerScreen = () => {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    redressNumber: '',
    redressCountry: '',
    knownTravelerNumber: '',
    knownTravelerCountry: '',
  });

  return (
    <ScreenLayout>
      <ScreenHeader title="Personal Details" />

      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.progressContainer}>
            <View style={styles.progressBarContainer}>
              <View style={[styles.progressBar, { width: '49%' }]} />
            </View>
            <Text style={styles.progressText}>
              <Text style={styles.progressPercentage}>49%</Text> Complete
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Secure Traveler</Text>
            <Text style={styles.sectionDescription}>
              If you have a 'redress number' and' or 'known traveler number' enter your information and we'll pass it through when you book.
            </Text>

            <View style={styles.inputGroup}>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Redress number</Text>
                <TouchableOpacity>
                  <Feather name="info" size={20} color={colors.textLight} />
                </TouchableOpacity>
              </View>
              <Input
                placeholder="Enter here"
                value={form.redressNumber}
                onChangeText={(text) => setForm({ ...form, redressNumber: text })}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Issuing country<Text style={styles.required}> *</Text></Text>
              <Select
                placeholder="Select"
                value={form.redressCountry}
                onValueChange={(value) => setForm({ ...form, redressCountry: value })}
                items={[]}
                label=""
              />
              <TouchableOpacity>
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.inputGroup}>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Known traveler number</Text>
                <TouchableOpacity>
                  <Feather name="info" size={20} color={colors.textLight} />
                </TouchableOpacity>
              </View>
              <Input
                placeholder="Enter here"
                value={form.knownTravelerNumber}
                onChangeText={(text) => setForm({ ...form, knownTravelerNumber: text })}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Issuing country<Text style={styles.required}> *</Text></Text>
              <Select
                placeholder="Select"
                value={form.knownTravelerCountry}
                onValueChange={(value) => setForm({ ...form, knownTravelerCountry: value })}
                items={[]}
                label=""
              />
              <TouchableOpacity>
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
            </View>
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
  inputGroup: {
    marginBottom: 24,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontFamily: typography.regular,
    color: colors.text,
  },
  required: {
    color: colors.error,
  },
  deleteText: {
    fontSize: 16,
    fontFamily: typography.regular,
    color: colors.error,
    marginTop: 8,
  },
  button: {
    marginTop: 16,
    marginBottom: 16,
  },
}); 