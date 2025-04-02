import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { colors, typography } from '../../styles/theme';
import { Feather } from '@expo/vector-icons';

type Props = {
  title: string;
  icon: string;
  onPress: () => void;
};

export const InfoCard = ({ title, icon, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Feather name={icon} size={24} color={colors.text} />
        </View>
        <Feather name="chevron-right" size={20} color={colors.text} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '48%', // To create 2 columns with gap
    padding: 16,
    backgroundColor: colors.white,
    borderRadius: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontFamily: typography.regular,
    color: colors.text,
  },
}); 