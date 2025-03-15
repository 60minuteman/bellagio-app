import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors, typography } from '../../styles/theme';

interface SelectProps {
  label: string;
  placeholder: string;
  value: string;
  onValueChange: (value: string) => void;
  items: Array<{ label: string; value: string }>;
  required?: boolean;
}

export const Select = ({ 
  label, 
  placeholder, 
  value, 
  onValueChange, 
  items,
  required 
}: SelectProps) => {
  const selectedItem = items.find(item => item.value === value);

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
        {required && <Text style={styles.required}>*</Text>}
      </View>
      <TouchableOpacity 
        style={styles.selectButton}
        onPress={() => {
          // For now, just select the first item if none selected
          if (!value && items.length > 0) {
            onValueChange(items[0].value);
          }
        }}
      >
        <Text style={[
          styles.value,
          !selectedItem && styles.placeholder
        ]}>
          {selectedItem ? selectedItem.label : placeholder}
        </Text>
        <Feather name="chevron-down" size={20} color={colors.textLight} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  labelContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.text,
  },
  required: {
    color: '#FF3B30',
    marginLeft: 4,
  },
  selectButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: colors.white,
  },
  value: {
    fontSize: 16,
    fontFamily: typography.regular,
    color: colors.text,
  },
  placeholder: {
    color: colors.textLight,
  },
}); 