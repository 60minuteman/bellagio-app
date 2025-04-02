import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { ScreenLayout } from '../../components/layout/ScreenLayout';
import { colors, typography } from '../../styles/theme';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/common/Button';
import { ScreenHeader } from '../../components/common/ScreenHeader';

export const PassportResidentScreen = () => {
  const navigation = useNavigation();

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

          <Text style={styles.sectionTitle}>Passport & Resident Card</Text>

          <View style={styles.cardContainer}>
            <TouchableOpacity style={styles.addCard}>
              <Text style={styles.addCardText}>Add passport</Text>
              <Feather name="plus" size={20} color={colors.primary} />
            </TouchableOpacity>
          </View>

          <View style={styles.cardContainer}>
            <TouchableOpacity style={styles.addCard}>
              <Text style={styles.addCardText}>Add US resident card</Text>
              <Feather name="plus" size={20} color={colors.primary} />
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={styles.buttonContainer}>
          <Button 
            title="Skip"
            onPress={() => {}}
            style={styles.skipButton}
            textStyle={styles.skipButtonText}
          />
          <Button 
            title="Save changes & continue"
            onPress={() => {}}
            style={styles.button}
          />
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
  cardContainer: {
    backgroundColor: colors.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 16,
    padding: 16,
  },
  addCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    height: 150,
  },
  addCardText: {
    fontSize: 16,
    fontFamily: typography.regular,
    color: colors.primary,
  },
  buttonContainer: {
    paddingVertical: 16,
  },
  skipButton: {
    backgroundColor: 'transparent',
    marginBottom: 16,
  },
  skipButtonText: {
    color: colors.primary,
  },
  button: {
    marginBottom: 16,
  },
}); 