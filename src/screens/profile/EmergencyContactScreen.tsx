import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { ScreenLayout } from '../../components/layout/ScreenLayout';
import { colors, typography } from '../../styles/theme';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';
import { ScreenHeader } from '../../components/common/ScreenHeader';

export const EmergencyContactScreen = () => {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    primaryPhone: '',
  });

  return (
    <ScreenLayout>
      <ScreenHeader title="Emergency Contact" />

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: '49%' }]} />
          </View>
          <Text style={styles.progressText}>
            <Text style={styles.progressPercentage}>49%</Text> Complete
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Emergency Contact</Text>
          <Text style={styles.sectionDescription}>
            The person you provide as your emergency contact must not be traveling with you.
          </Text>

          <View style={styles.row}>
            <View style={styles.column}>
              <Input
                label="First name"
                placeholder="Enter"
                value={form.firstName}
                onChangeText={(text) => setForm({ ...form, firstName: text })}
                required
              />
            </View>
            <View style={styles.column}>
              <Input
                label="Last name"
                placeholder="Enter"
                value={form.lastName}
                onChangeText={(text) => setForm({ ...form, lastName: text })}
                required
              />
            </View>
          </View>

          <Input
            label="Primary phone"
            placeholder="Enter"
            value={form.primaryPhone}
            onChangeText={(text) => setForm({ ...form, primaryPhone: text })}
            keyboardType="phone-pad"
            required
          />
        </View>

        <Button 
          title="Save changes & continue"
          onPress={() => {}}
          style={styles.button}
        />
      </ScrollView>
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
  row: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  column: {
    flex: 1,
  },
  button: {
    marginTop: 8,
    marginBottom: 32,
  },
}); 