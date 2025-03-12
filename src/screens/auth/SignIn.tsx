import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';
import { colors, typography } from '../../styles/theme';
import { SocialButton } from '../../components/common/SocialButton';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSignUp = () => {
    // TODO: Implement sign up logic
  };

  const handleGoogleSignUp = () => {
    // TODO: Implement Google sign up
  };

  const handleAppleSignUp = () => {
    // TODO: Implement Apple sign up
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === 'ios' ? -10 : 0}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.subtitle}>Enter your username and password to 
        access your account.</Text>
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <View style={styles.socialButtonsContainer}>
            <SocialButton
              type="google"
              onPress={handleGoogleSignUp}
              style={styles.socialButton}
            />
            <SocialButton
              type="apple" 
              onPress={handleAppleSignUp}
              style={styles.socialButton}
            />
          </View>

          <View style={styles.orContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>or</Text>
            <View style={styles.line} />
          </View>
          
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

            <Input
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              containerStyle={styles.inputContainer}
              secureTextEntry
            />
            
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>

            <Button
              title="Sign Up"
              onPress={handleSignUp}
              style={styles.button}
            />

            <View style={styles.signInContainer}>
              <Text style={styles.signInText}>
              Don't have an account?{' '}
                <Text style={styles.signInLink}>Sign Up</Text>
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
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  socialButton: {
    flex: 0.48,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.text,
    opacity: 0.2,
  },
  orText: {
    marginHorizontal: 16,
    color: colors.text,
    fontFamily: typography.regular,
  },
  forgotPassword: {
    color: colors.primary,
    textAlign: 'right',
    fontFamily: typography.bold,
    marginTop: -8,
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
