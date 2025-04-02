import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors, typography } from '../../styles/theme';
import { useNavigation } from '@react-navigation/native';

interface ScreenHeaderProps {
  title: string;
}

export const ScreenHeader = ({ title }: ScreenHeaderProps) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.goBack()}
      >
        <Feather name="chevron-left" size={24} color={colors.text} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: colors.background,
  },
  backButton: {
    padding: 4,
    marginRight: 32,
  },
  headerTitle: {
    flex: 1,
    fontSize: 20,
    fontFamily: typography.semiBold,
    color: colors.text,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',   
  },
}); 