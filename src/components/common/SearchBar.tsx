import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors, typography } from '../../styles/theme';

interface SearchBarProps {
  onPress?: () => void;
  placeholder?: string;
  style?: ViewStyle;
}

export const SearchBar = ({ 
  onPress, 
  placeholder = "Search flights...",
  style 
}: SearchBarProps) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Feather name="search" size={20} color="#9CA3AF" />
      <Text style={styles.text}>{placeholder}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    backgroundColor: colors.white,
    borderRadius: 24,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 2,
  },
  text: {
    marginLeft: 8,
    color: '#9CA3AF',
    fontSize: 14,
    fontFamily: typography.regular,
  },
}); 