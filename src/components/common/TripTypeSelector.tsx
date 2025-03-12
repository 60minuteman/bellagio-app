import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { colors, typography } from '../../styles/theme';

interface TripTypeSelectorProps {
  selectedType: 'one-way' | 'round-trip';
  onSelect: (type: 'one-way' | 'round-trip') => void;
}

export const TripTypeSelector = ({ selectedType, onSelect }: TripTypeSelectorProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[
          styles.option,
          selectedType === 'one-way' && styles.selectedOption
        ]}
        onPress={() => onSelect('one-way')}
      >
        <Text 
          style={[
            styles.optionText,
            selectedType === 'one-way' && styles.selectedText
          ]}
        >
          One way
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[
          styles.option,
          selectedType === 'round-trip' && styles.selectedOption
        ]}
        onPress={() => onSelect('round-trip')}
      >
        <Text 
          style={[
            styles.optionText,
            selectedType === 'round-trip' && styles.selectedText
          ]}
        >
          Round trip
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: colors.background,
    borderRadius: 16,
    padding: 4,
  },
  option: {
    flex: 1,
    borderRadius: 12,
    paddingVertical: 8,
  },
  selectedOption: {
    backgroundColor: '#EEFBFF',
  },
  optionText: {
    fontSize: 16,
    fontFamily: typography.medium,
    color: colors.textLight,
    textAlign: 'center',
  },
  selectedText: {
    color: colors.primary,
    fontFamily: typography.bold,
  },
}); 