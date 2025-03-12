import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { colors, typography } from '../../styles/theme';
import { Button } from './Button';

interface OfferCardProps {
  title: string;
  description: string;
  onPress?: () => void;
  style?: ViewStyle;
}

export const OfferCard = ({ 
  title, 
  description, 
  onPress,
  style 
}: OfferCardProps) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        title="Book Now"
        onPress={onPress || (() => {})}
        style={styles.button}
        textStyle={styles.buttonText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 280,
    padding: 16,
    backgroundColor: colors.primary,
    borderRadius: 12,
    marginRight: 12,
  },
  title: {
    fontSize: 18,
    fontFamily: typography.semiBold,
    color: colors.white,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.white,
  },
  button: {
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginTop: 16,
  },
  buttonText: {
    color: colors.primary,
    fontSize: 14,
    fontFamily: typography.medium,
  },
}); 