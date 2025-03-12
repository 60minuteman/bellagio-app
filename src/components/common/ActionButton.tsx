import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors, typography } from '../../styles/theme';

interface ActionButtonProps {
  title: string;
  icon: keyof typeof Feather.glyphMap;
  onPress?: () => void;
  style?: ViewStyle;
}

export const ActionButton = ({ 
  title, 
  icon, 
  onPress,
  style 
}: ActionButtonProps) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Feather name={icon} size={24} color={colors.primary} />
      </View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: `${colors.primary}10`,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  text: {
    color: colors.black,
    fontSize: 14,
    fontFamily: typography.medium,
  },
}); 