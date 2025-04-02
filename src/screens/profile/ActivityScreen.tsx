import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { ScreenLayout } from '../../components/layout/ScreenLayout';
import { colors, typography } from '../../styles/theme';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ActivityFilterModal } from '../../components/profile/ActivityFilterModal';
import { ScreenHeader } from '../../components/common/ScreenHeader';

export const ActivityScreen = () => {
  const navigation = useNavigation();
  const [selectedDateRange, setSelectedDateRange] = useState({
    start: new Date(2025, 2, 1), // March 1, 2025
    end: new Date(2026, 1, 28), // February 28, 2026
  });
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);

  const handleApplyFilters = (filters: any) => {
    console.log('Applied filters:', filters);
    // TODO: Implement filter logic
  };

  return (
    <ScreenLayout>
      <ScreenHeader title="Activity" />

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Search and Filter Header */}
        <View style={styles.filterContainer}>
          <TouchableOpacity 
            style={styles.searchButton}
            onPress={() => {/* TODO: Implement search */}}
          >
            <Feather name="search" size={20} color={colors.text} />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.sortButton}
            onPress={() => {/* TODO: Implement sort */}}
          >
            <Text style={styles.sortButtonText}>Sort by: Recent</Text>
            <Feather name="chevron-down" size={20} color={colors.text} />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.filterButton}
            onPress={() => setIsFilterModalVisible(true)}
          >
            <Text style={styles.filterButtonText}>Filter</Text>
            <Feather name="sliders" size={20} color={colors.text} />
          </TouchableOpacity>
        </View>

        {/* Notice Card */}
        <View style={styles.noticeCard}>
          <View style={styles.noticeHeader}>
            <Feather name="info" size={20} color={colors.warning} />
            <Text style={styles.noticeText}>
              Transactions may take up to 2 weeks to post.
            </Text>
          </View>
          <TouchableOpacity 
            style={styles.requestLink}
            onPress={() => {/* TODO: Handle missing flights request */}}
          >
            <Text style={styles.requestLinkText}>Request missing flights</Text>
            <Feather name="external-link" size={16} color={colors.primary} />
          </TouchableOpacity>
        </View>

        {/* Qualifying Year Section */}
        <View style={styles.qualifyingYearCard}>
          <Text style={styles.qualifyingYearTitle}>
            Current qualifying year (2025 - 2026)
          </Text>
          <Text style={styles.qualifyingYearDates}>
            {selectedDateRange.start.toLocaleDateString('en-US', { 
              month: 'long', 
              day: '2-digit', 
              year: 'numeric'
            })} - {selectedDateRange.end.toLocaleDateString('en-US', {
              month: 'long',
              day: '2-digit',
              year: 'numeric'
            })}
          </Text>
          <TouchableOpacity 
            style={styles.changeDatesButton}
            onPress={() => {/* TODO: Implement date range picker */}}
          >
            <Text style={styles.changeDatesText}>Change dates</Text>
            <Feather name="chevron-right" size={20} color={colors.primary} />
          </TouchableOpacity>
        </View>

        {/* No Activity Section */}
        <View style={styles.noActivityCard}>
          <View style={[styles.noActivityIcon, styles.iconBackground]}>
            <Feather name="alert-triangle" size={24} color={colors.textLight} />
          </View>
          <Text style={styles.noActivityTitle}>No Recent Activity</Text>
          <Text style={styles.noActivityText}>
            You don't have any recent activity in your account for the selected date range.
          </Text>
          <TouchableOpacity 
            style={styles.editSearchButton}
            onPress={() => {/* TODO: Handle edit search */}}
          >
            <Text style={styles.editSearchText}>Edit search filter and date range</Text>
            <Feather name="chevron-right" size={20} color={colors.primary} />
          </TouchableOpacity>
        </View>
      </ScrollView>

      <ActivityFilterModal
        visible={isFilterModalVisible}
        onClose={() => setIsFilterModalVisible(false)}
        onApplyFilters={handleApplyFilters}
      />
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: colors.background,
  },
  backButton: {
    marginRight: 16,
    padding: 4,
    position: 'absolute',
    left: 20,
    zIndex: 1,
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: typography.semiBold,
    color: colors.text,
  },
  filterContainer: {
    flexDirection: 'row',
    padding: 16,
    gap: 8,
    backgroundColor: colors.white,
  },
  searchButton: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
  },
  sortButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
  },
  sortButtonText: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.text,
  },
  filterButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
  },
  filterButtonText: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.text,
  },
  noticeCard: {
    margin: 16,
    padding: 16,
    backgroundColor: colors.warningBg,
    borderRadius: 12,
    elevation: 2,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  noticeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  noticeText: {
    flex: 1,
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.text,
  },
  requestLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  requestLinkText: {
    fontSize: 14,
    fontFamily: typography.medium,
    color: colors.primary,
  },
  qualifyingYearCard: {
    margin: 16,
    padding: 16,
    backgroundColor: colors.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    elevation: 2,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  qualifyingYearTitle: {
    fontSize: 16,
    fontFamily: typography.semiBold,
    color: colors.text,
    marginBottom: 4,
  },
  qualifyingYearDates: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textLight,
    marginBottom: 12,
  },
  changeDatesButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  changeDatesText: {
    fontSize: 14,
    fontFamily: typography.medium,
    color: colors.primary,
    marginRight: 4,
  },
  noActivityCard: {
    margin: 16,
    padding: 24,
    backgroundColor: colors.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    elevation: 2,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  noActivityIcon: {
    marginBottom: 16,
    padding: 16,
  },
  iconBackground: {
    backgroundColor: colors.backgroundLight,
    borderRadius: 40,
  },
  noActivityTitle: {
    fontSize: 16,
    fontFamily: typography.semiBold,
    color: colors.text,
    marginBottom: 8,
  },
  noActivityText: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textLight,
    textAlign: 'center',
    marginBottom: 16,
    maxWidth: '80%',
  },
  editSearchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  editSearchText: {
    fontSize: 14,
    fontFamily: typography.medium,
    color: colors.primary,
    marginRight: 4,
  },
});