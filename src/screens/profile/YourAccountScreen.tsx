import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { ScreenLayout } from '../../components/layout/ScreenLayout';
import { colors, typography } from '../../styles/theme';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';
import { ScreenHeader } from '../../components/common/ScreenHeader';

export const YourAccountScreen = () => {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    email: 'williamspeter@gmail.com',
    password: '**********',
  });

  return (
    <ScreenLayout>
      <ScreenHeader title="Personal Details" />

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.progressContainer}>
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: '49%' }]} />
          </View>
          <Text style={styles.progressText}>
            <Text style={styles.progressPercentage}>49%</Text> Complete
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Account</Text>
          <Text style={styles.sectionDescription}>
            Make changes to your account and add security questions
          </Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Primary email<Text style={styles.required}> *</Text></Text>
            <View style={styles.inputContainer}>
              <Text style={styles.emailText}>{form.email}</Text>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <View style={styles.passwordHeader}>
              <Text style={styles.label}>Password<Text style={styles.required}> *</Text></Text>
              <TouchableOpacity onPress={() => {}}>
                <Text style={styles.changePasswordLink}>Change password</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.passwordText}>{form.password}</Text>
              <TouchableOpacity style={styles.eyeIcon}>
                <Feather name="eye" size={24} color={colors.text} />
              </TouchableOpacity>
            </View>
          </View>
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
    marginBottom: 16,
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: colors.background,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  emailText: {
    fontSize: 16,
    fontFamily: typography.regular,
    color: colors.text,
  },
  passwordHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  changePasswordLink: {
    fontSize: 16,
    fontFamily: typography.medium,
    color: colors.primary,
  },
  passwordText: {
    flex: 1,
    fontSize: 16,
    fontFamily: typography.regular,
    color: colors.text,
  },
  eyeIcon: {
    padding: 4,
  },
  button: {
    marginTop: 'auto',
    marginBottom: 32,
  },
}); 