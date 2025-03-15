import { StyleSheet, Text, TouchableOpacity, ViewStyle, TextStyle } from 'react-native';
import { colors } from '../../styles/theme';
import { typography } from '../../styles/theme';

interface ButtonProps {
  onPress: () => void;
  title: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  variant?: 'solid' | 'outline';
  borderColor?: string;
}

export const Button = ({ 
  onPress, 
  title, 
  style, 
  textStyle, 
  variant = 'solid',
  borderColor = colors.primary 
}: ButtonProps) => {
  const buttonStyles = [
    styles.button,
    variant === 'outline' && {
      ...styles.outlineButton,
      borderColor: borderColor
    },
    style
  ];

  const textStyles = [
    styles.text,
    variant === 'outline' && {
      color: borderColor
    },
    textStyle
  ];

  return (
    <TouchableOpacity 
      style={buttonStyles}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    shadowOpacity: 0,
    elevation: 0,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontFamily: typography.semiBold,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
}); 