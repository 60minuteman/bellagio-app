import { StyleSheet, Text, TextInput, View, ViewStyle, TextStyle, Dimensions, TouchableOpacity } from 'react-native';
import { colors, typography } from '../../styles/theme';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

// Calculate default width relative to screen size
const DEFAULT_WIDTH = Math.min(358, width - 32); // 32 is total horizontal padding

interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  containerStyle?: ViewStyle;
  inputStyle?: ViewStyle;
  labelStyle?: TextStyle;
  placeholderTextColor?: string;
  secureTextEntry?: boolean;
}

export const Input = ({
  label,
  placeholder,
  value,
  onChangeText,
  containerStyle,
  inputStyle,
  labelStyle,
  placeholderTextColor = '#9CA3AF',
  secureTextEntry = false,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(!secureTextEntry);

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <View style={[styles.inputContainer, inputStyle]}>
        <TextInput
          style={[styles.input, secureTextEntry && { paddingRight: 45 }]}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry && !showPassword}
        />
        {secureTextEntry && (
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons
              name={showPassword ? "eye-outline" : "eye-off-outline"}
              size={20}
              color={colors.textSecondary}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: DEFAULT_WIDTH,
  },
  label: {
    fontSize: 12,
    fontFamily: typography.medium,
    color: colors.black,
    marginBottom: 8,
  },
  inputContainer: {
    height: 40,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    backgroundColor: colors.white,
    justifyContent: 'center',
  },
  input: {
    paddingHorizontal: 12,
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.black,
  },
  eyeIcon: {
    position: 'absolute',
    right: 12,
    height: '100%',
    justifyContent: 'center',
  },
}); 