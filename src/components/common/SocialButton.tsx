import { StyleSheet, Text, TouchableOpacity, ViewStyle, TextStyle, Image, ImageSourcePropType } from 'react-native';
import { colors, typography } from '../../styles/theme';

interface SocialButtonProps {
  onPress: () => void;
  type: 'google' | 'apple';
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const SocialButton = ({ 
  onPress, 
  type,
  style, 
  textStyle 
}: SocialButtonProps) => {
  const icon: ImageSourcePropType = type === 'google' 
    ? require('../../../assets/icons/google.png')
    : require('../../../assets/icons/apple.png');

  const buttonText = type === 'google' 
    ? 'Sign up with Google'
    : 'Continue with Apple';

  return (
    <TouchableOpacity 
      style={[styles.button, style]} 
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Image 
        source={icon}
        style={[
          styles.icon,
          type === 'apple' && styles.appleIcon
        ]}
        resizeMode="contain"
      />
      <Text style={[styles.text, textStyle]}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 30,
    width: '100%',
    borderWidth: 1,
    borderColor: '#E9EDF2',
    backgroundColor: colors.white,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  appleIcon: {
    height: 20, // Slightly taller for Apple icon
  },
  text: {
    color: colors.black,
    fontSize: 14,
    fontFamily: typography.medium,
  },
}); 