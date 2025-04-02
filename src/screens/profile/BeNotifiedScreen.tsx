import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { ScreenLayout } from '../../components/layout/ScreenLayout';
import { colors, typography } from '../../styles/theme';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';
import { ScreenHeader } from '../../components/common/ScreenHeader';
import { Feather } from '@expo/vector-icons';

type TabType = 'primary' | 'customization';

interface AlertPreference {
  id: string;
  title: string;
  description: string;
  email: boolean;
  text: boolean;
}

export const BeNotifiedScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState<TabType>('primary');
  const [form, setForm] = useState({
    contactName: 'WILLIAMS PETER',
    primaryEmail: 'williamspeter@gmail.com',
    primaryPhone: '08098725372',
    textPhone: '',
  });

  const [alertPreferences, setAlertPreferences] = useState<AlertPreference[]>([
    {
      id: '1',
      title: 'Day-of-travel delays & cancellations',
      description: 'Flight delayed? Flight cancelled? Sign up for day-of-travel alerts and be the first to know any changes to the status of your flight.',
      email: true,
      text: false,
    },
    {
      id: '2',
      title: 'Departure Reminders',
      description: "We know how busy you are. Sign up for departure reminder alerts and we'll send you a reminder 4 hours prior to your flight.",
      email: true,
      text: true,
    },
    {
      id: '3',
      title: 'Gate Changes',
      description: "Avoid walking to the wrong gate. Sign up for gate change alerts and we'll help you get there.",
      email: false,
      text: false,
    },
  ]);

  const toggleAlert = (id: string, type: 'email' | 'text') => {
    setAlertPreferences(prefs => 
      prefs.map(pref => 
        pref.id === id ? { ...pref, [type]: !pref[type] } : pref
      )
    );
  };

  return (
    <ScreenLayout>
      <ScreenHeader title="Be Notified" />

      <View style={styles.container}>
        <View style={styles.tabContainer}>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'primary' && styles.activeTab]}
            onPress={() => setActiveTab('primary')}
          >
            <Text style={[styles.tabText, activeTab === 'primary' && styles.activeTabText]}>
              Primary
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'customization' && styles.activeTab]}
            onPress={() => setActiveTab('customization')}
          >
            <Text style={[styles.tabText, activeTab === 'customization' && styles.activeTabText]}>
              Customization
            </Text>
          </TouchableOpacity>
        </View>

        {activeTab === 'primary' ? (
          <View style={styles.content}>
            <Text style={styles.sectionTitle}>Primary Contact</Text>
            <Text style={styles.sectionDescription}>Here's your information</Text>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Contact Name</Text>
              <View style={styles.readOnlyInput}>
                <Text style={styles.readOnlyText}>{form.contactName}</Text>
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Primary Email</Text>
              <View style={styles.readOnlyInput}>
                <Text style={styles.readOnlyText}>{form.primaryEmail}</Text>
              </View>
            </View>

            <TouchableOpacity>
              <Text style={styles.addEmailLink}>Add another email</Text>
            </TouchableOpacity>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Primary Phone Number</Text>
              <View style={styles.readOnlyInput}>
                <Text style={styles.readOnlyText}>{form.primaryPhone}</Text>
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Phone (for text messages)</Text>
              <Input
                placeholder="Enter"
                value={form.textPhone}
                onChangeText={(text) => setForm({ ...form, textPhone: text })}
              />
            </View>

            <Text style={styles.disclaimer}>*Message and data rates may apply.</Text>
          </View>
        ) : (
          <View style={styles.content}>
            <Text style={styles.sectionTitle}>Customize Your Alerts</Text>
            {alertPreferences.map(pref => (
              <View key={pref.id} style={styles.alertItem}>
                <Text style={styles.alertTitle}>{pref.title}</Text>
                <Text style={styles.alertDescription}>{pref.description}</Text>
                <View style={styles.alertOptions}>
                  <TouchableOpacity 
                    style={styles.optionButton}
                    onPress={() => toggleAlert(pref.id, 'email')}
                  >
                    <View style={[styles.checkbox, pref.email && styles.checkboxSelected]}>
                      {pref.email && <Feather name="check" size={20} color={colors.white} />}
                    </View>
                    <Text style={styles.optionText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.optionButton}
                    onPress={() => toggleAlert(pref.id, 'text')}
                  >
                    <View style={[styles.checkbox, pref.text && styles.checkboxSelected]}>
                      {pref.text && <Feather name="check" size={20} color={colors.white} />}
                    </View>
                    <Text style={styles.optionText}>Text</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        )}

        <View style={styles.footer}>
          <Button
            title="Discard"
            onPress={() => navigation.goBack()}
            style={styles.discardButton}
            textStyle={styles.discardButtonText}
          />
          <Button
            title="Save changes"
            onPress={() => navigation.goBack()}
            style={styles.saveButton}
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
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 100,
    padding: 4,
    margin: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 100,
  },
  activeTab: {
    backgroundColor: colors.background,
  },
  tabText: {
    fontSize: 16,
    fontFamily: typography.regular,
    color: colors.textLight,
    textAlign: 'center',
  },
  activeTabText: {
    color: colors.text,
  },
  content: {
    flex: 1,
    padding: 16,
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
  readOnlyInput: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 16,
  },
  readOnlyText: {
    fontSize: 16,
    fontFamily: typography.regular,
    color: colors.text,
  },
  addEmailLink: {
    fontSize: 16,
    fontFamily: typography.regular,
    color: colors.primary,
    textDecorationLine: 'underline',
    marginBottom: 24,
  },
  disclaimer: {
    fontSize: 16,
    fontFamily: typography.regular,
    color: colors.textLight,
    marginTop: 8,
  },
  alertItem: {
    marginBottom: 32,
  },
  alertTitle: {
    fontSize: 16,
    fontFamily: typography.medium,
    color: colors.text,
    marginBottom: 8,
  },
  alertDescription: {
    fontSize: 16,
    fontFamily: typography.regular,
    color: colors.textLight,
    marginBottom: 16,
    lineHeight: 24,
  },
  alertOptions: {
    flexDirection: 'row',
    gap: 24,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  optionText: {
    fontSize: 16,
    fontFamily: typography.regular,
    color: colors.text,
  },
  footer: {
    flexDirection: 'row',
    gap: 16,
    padding: 16,
    backgroundColor: colors.background,
  },
  discardButton: {
    flex: 1,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.border,
  },
  discardButtonText: {
    color: colors.text,
    fontFamily: typography.regular,
    fontSize: 16,
  },
  saveButton: {
    flex: 1,
  },
}); 