import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, typography } from '../../styles/theme';

interface SectionHeaderProps {
  title: string;
  showSeeAll?: boolean;
  onSeeAllPress?: () => void;
}

export const SectionHeader = ({ 
  title, 
  showSeeAll = false,
  onSeeAllPress 
}: SectionHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {showSeeAll && (
        <TouchableOpacity onPress={onSeeAllPress}>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontFamily: typography.semiBold,
    color: colors.black,
  },
  seeAll: {
    color: colors.primary,
    fontSize: 14,
    fontFamily: typography.medium,
  },
}); 