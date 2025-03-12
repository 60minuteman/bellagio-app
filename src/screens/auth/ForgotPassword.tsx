import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';
import { colors, typography } from '../../styles/theme';

const { width } = Dimensions.get('window');

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    // TODO: Implement password reset logic
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === 'ios' ? -10 : 0}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Forgot your Password?</Text>
        <Text style={styles.subtitle}>Enter your email to reset your password.</Text>
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <View style={styles.form}>
            <Input
              label="Email"
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              containerStyle={styles.inputContainer}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Button
              title="Send Reset Link"
              onPress={handleResetPassword}
              style={styles.button}
            />

            <View style={styles.signInContainer}>
              <Text style={styles.signInText}>
                Back to{' '}
                <Text style={styles.signInLink}>Log in</Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  headerContainer: {
    alignItems: 'center',
    paddingTop: 80,
    paddingHorizontal: 24,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 32,
    fontFamily: typography.bold,
    color: colors.text,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: typography.regular,
    color: colors.textSecondary,
    marginBottom: 32,
    textAlign: 'center',
  },
  form: {
    gap: 16,
  },
  inputContainer: {
    width: width - 48,
  },
  button: {
    marginTop: 24,
  },
  signInContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  signInText: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.text,
  },
  signInLink: {
    color: colors.primary,
    fontFamily: typography.bold,
  }
});
