import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, Pressable } from 'react-native';
import { colors, typography } from '../../styles/theme';
import { Feather } from '@expo/vector-icons';

type Props = {
  visible: boolean;
  onClose: () => void;
  onApplyFilters: (filters: any) => void;
};

export const ActivityFilterModal = ({ visible, onClose, onApplyFilters }: Props) => {
  const [selectedDateOption, setSelectedDateOption] = useState<string>('current');
  const [customDateRange, setCustomDateRange] = useState({
    start: '',
    end: '',
  });
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const dateOptions = [
    {
      id: 'current',
      title: 'Current qualifying year',
      subtitle: 'March 01, 2024 - February 28, 2026',
    },
    {
      id: 'previous',
      title: 'Previous qualifying year',
      subtitle: 'March 01, 2024 - February 28, 2025',
    },
    {
      id: '30days',
      title: 'Last 30 days',
    },
    {
      id: '90days',
      title: 'Last 90 days',
    },
    {
      id: 'custom',
      title: 'Custom date range',
    },
  ];

  const categories = [
    { id: 'cars', title: 'Cars and hotels' },
    { id: 'flights', title: 'Flights' },
    { id: 'other', title: 'Other' },
  ];

  const handleCategoryToggle = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleClearFilters = () => {
    setSelectedDateOption('current');
    setCustomDateRange({ start: '', end: '' });
    setSelectedCategories([]);
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <Pressable style={styles.dismissArea} onPress={onClose} />
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Filter</Text>
            <TouchableOpacity onPress={onClose}>
              <Feather name="x" size={24} color={colors.text} />
            </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Date</Text>
            {dateOptions.map(option => (
              <TouchableOpacity
                key={option.id}
                style={styles.dateOption}
                onPress={() => setSelectedDateOption(option.id)}
              >
                <View style={styles.radioContainer}>
                  <View style={[
                    styles.radioOuter,
                    selectedDateOption === option.id && styles.radioOuterSelected
                  ]}>
                    {selectedDateOption === option.id && (
                      <View style={styles.radioInner} />
                    )}
                  </View>
                  <View>
                    <Text style={styles.dateOptionTitle}>{option.title}</Text>
                    {option.subtitle && (
                      <Text style={styles.dateOptionSubtitle}>{option.subtitle}</Text>
                    )}
                  </View>
                </View>
              </TouchableOpacity>
            ))}

            {selectedDateOption === 'custom' && (
              <View style={styles.customDateContainer}>
                <View style={styles.infoContainer}>
                  <Feather name="info" size={20} color={colors.warning} />
                  <Text style={styles.infoText}>
                    You can view activity 2 years back
                  </Text>
                </View>
                <View style={styles.dateInputContainer}>
                  <TouchableOpacity 
                    style={styles.dateInput}
                    onPress={() => {/* TODO: Implement date picker */}}
                  >
                    <Text style={styles.dateInputText}>
                      {customDateRange.start || 'mm/dd/yyyy'}
                    </Text>
                    <Feather name="calendar" size={20} color={colors.text} />
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.dateInput}
                    onPress={() => {/* TODO: Implement date picker */}}
                  >
                    <Text style={styles.dateInputText}>
                      {customDateRange.end || 'mm/dd/yyyy'}
                    </Text>
                    <Feather name="calendar" size={20} color={colors.text} />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Category</Text>
            {categories.map(category => (
              <TouchableOpacity
                key={category.id}
                style={styles.categoryOption}
                onPress={() => handleCategoryToggle(category.id)}
              >
                <Text style={styles.categoryTitle}>{category.title}</Text>
                <View style={[
                  styles.checkbox,
                  selectedCategories.includes(category.id) && styles.checkboxSelected
                ]}>
                  {selectedCategories.includes(category.id) && (
                    <Feather name="check" size={16} color={colors.white} />
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.footer}>
            <TouchableOpacity 
              style={styles.clearButton} 
              onPress={handleClearFilters}
            >
              <Text style={styles.clearButtonText}>Clear filters</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.applyButton}
              onPress={() => {
                onApplyFilters({
                  dateOption: selectedDateOption,
                  customDateRange,
                  categories: selectedCategories,
                });
                onClose();
              }}
            >
              <Text style={styles.applyButtonText}>View results</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dismissArea: {
    flex: 1,
  },
  modalContent: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 24,
    maxHeight: '90%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  modalTitle: {
    fontSize: 24,
    fontFamily: typography.semiBold,
    color: colors.text,
  },
  section: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: typography.semiBold,
    color: colors.text,
    marginBottom: 16,
  },
  dateOption: {
    marginBottom: 16,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.border,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioOuterSelected: {
    borderColor: colors.primary,
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
  dateOptionTitle: {
    fontSize: 16,
    fontFamily: typography.regular,
    color: colors.text,
  },
  dateOptionSubtitle: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textLight,
    marginTop: 4,
  },
  customDateContainer: {
    marginTop: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.warningBg,
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  infoText: {
    marginLeft: 8,
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.text,
    flex: 1,
  },
  dateInputContainer: {
    gap: 12,
  },
  dateInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
  },
  dateInputText: {
    fontSize: 16,
    fontFamily: typography.regular,
    color: colors.textLight,
  },
  categoryOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  categoryTitle: {
    fontSize: 16,
    fontFamily: typography.regular,
    color: colors.text,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  footer: {
    flexDirection: 'row',
    padding: 24,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    gap: 12,
  },
  clearButton: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
  },
  clearButtonText: {
    fontSize: 16,
    fontFamily: typography.medium,
    color: colors.text,
  },
  applyButton: {
    flex: 2,
    padding: 16,
    borderRadius: 8,
    backgroundColor: colors.primary,
    alignItems: 'center',
  },
  applyButtonText: {
    fontSize: 16,
    fontFamily: typography.medium,
    color: colors.white,
  },
}); 