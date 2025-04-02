import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { ScreenLayout } from '../../components/layout/ScreenLayout';
import { colors, typography } from '../../styles/theme';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/common/Button';
import { ScreenHeader } from '../../components/common/ScreenHeader';
import { Feather } from '@expo/vector-icons';

type TabType = 'news' | 'interests';

interface NewsItem {
  id: string;
  title: string;
  description: string;
  selected: boolean;
}

interface TravelInterest {
  id: string;
  label: string;
  selected: boolean;
}

export const CommunicationPreferencesScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState<TabType>('news');
  const [newsItems, setNewsItems] = useState<NewsItem[]>([
    {
      id: '1',
      title: 'Bellagio Account Summary',
      description: 'Your monthly mileage statement with the latest Bellagio news and exclusive bonus mile offers. Plus, periodic program updates and airline announcements.',
      selected: true,
    },
    {
      id: '2',
      title: 'Bellagio Travel Picks',
      description: 'Special offers on vacation package deals and hotels in the best destinations around the world.',
      selected: false,
    },
    {
      id: '3',
      title: 'Bellagio Account Summary',
      description: 'Your monthly mileage statement with the latest Bellagio news and exclusive bonus mile offers. Plus, periodic program updates and airline announcements.',
      selected: true,
    },
    {
      id: '4',
      title: 'Bellagio Travel Picks',
      description: 'Special offers on vacation package deals and hotels in the best destinations around the world.',
      selected: false,
    },
  ]);

  const [interests] = useState({
    activities: [
      { id: '1', label: 'Adventure Vacations', selected: false },
      { id: '2', label: 'Beach Vacations', selected: false },
      { id: '3', label: 'Family Vacations', selected: false },
      { id: '4', label: 'Golf Vacations', selected: false },
      { id: '5', label: 'Romance Vacations', selected: false },
      { id: '6', label: 'Ski Vacations', selected: false },
      { id: '7', label: 'Small/mid Vacations', selected: false },
      { id: '8', label: 'Spa Vacations', selected: false },
    ],
    destinations: [
      { id: '1', label: 'Asia', selected: false },
      { id: '2', label: 'Carribean/Mexico', selected: false },
      { id: '3', label: 'Central/South America', selected: false },
      { id: '4', label: 'Europe', selected: false },
      { id: '5', label: 'United States/Canada', selected: false },
    ],
    products: [
      { id: '1', label: 'Activities', selected: false },
      { id: '2', label: 'Cruises', selected: false },
      { id: '3', label: 'Hotels', selected: false },
      { id: '4', label: 'Last-minute Deals', selected: false },
      { id: '5', label: 'Airport Rides', selected: false },
    ],
  });

  const toggleNewsItem = (id: string) => {
    setNewsItems(items => 
      items.map(item => 
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  return (
    <ScreenLayout>
      <ScreenHeader title="Communication Preferences" />

      <View style={styles.container}>
        <View style={styles.tabContainer}>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'news' && styles.activeTab]}
            onPress={() => setActiveTab('news')}
          >
            <Text style={[styles.tabText, activeTab === 'news' && styles.activeTabText]}>News & Specials</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'interests' && styles.activeTab]}
            onPress={() => setActiveTab('interests')}
          >
            <Text style={[styles.tabText, activeTab === 'interests' && styles.activeTabText]}>Travel Interests</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          {activeTab === 'news' ? (
            <View>
              <Text style={styles.description}>
                In addition to any email subscriptions, you'll receive transactional emails like flight alerts, check-in reminders and account updates.
              </Text>

              {newsItems.map(item => (
                <TouchableOpacity 
                  key={item.id}
                  style={styles.newsItem}
                  onPress={() => toggleNewsItem(item.id)}
                >
                  <View style={[styles.checkbox, item.selected && styles.checkboxSelected]}>
                    {item.selected && <Feather name="check" size={20} color={colors.white} />}
                  </View>
                  <View style={styles.newsContent}>
                    <Text style={styles.newsTitle}>{item.title}</Text>
                    <Text style={styles.newsDescription}>{item.description}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          ) : (
            <View>
              <Text style={styles.description}>
                Tell us about your interests so we can send specials and deals just for you!
              </Text>

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Interest and Activities</Text>
                {interests.activities.map(interest => (
                  <TouchableOpacity key={interest.id} style={styles.interestItem}>
                    <View style={styles.checkbox}>
                      {interest.selected && <Feather name="check" size={20} color={colors.white} />}
                    </View>
                    <Text style={styles.interestLabel}>{interest.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Destinations</Text>
                {interests.destinations.map(interest => (
                  <TouchableOpacity key={interest.id} style={styles.interestItem}>
                    <View style={styles.checkbox}>
                      {interest.selected && <Feather name="check" size={20} color={colors.white} />}
                    </View>
                    <Text style={styles.interestLabel}>{interest.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Products</Text>
                {interests.products.map(interest => (
                  <TouchableOpacity key={interest.id} style={styles.interestItem}>
                    <View style={styles.checkbox}>
                      {interest.selected && <Feather name="check" size={20} color={colors.white} />}
                    </View>
                    <Text style={styles.interestLabel}>{interest.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}
        </ScrollView>

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
    paddingHorizontal: 16,
  },
  description: {
    fontSize: 16,
    fontFamily: typography.regular,
    color: colors.textLight,
    marginBottom: 24,
    lineHeight: 24,
  },
  newsItem: {
    flexDirection: 'row',
    marginBottom: 24,
    gap: 16,
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
  newsContent: {
    flex: 1,
  },
  newsTitle: {
    fontSize: 16,
    fontFamily: typography.medium,
    color: colors.text,
    marginBottom: 8,
  },
  newsDescription: {
    fontSize: 16,
    fontFamily: typography.regular,
    color: colors.textLight,
    lineHeight: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: typography.regular,
    color: colors.textLight,
    marginBottom: 16,
  },
  interestItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 16,
  },
  interestLabel: {
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