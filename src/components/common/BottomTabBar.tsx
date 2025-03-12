import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors, typography } from '../../styles/theme';

export const BottomTabBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tab}>
        <Feather name="home" size={24} color={colors.primary} />
        <Text style={[styles.tabText, styles.activeTabText]}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Feather name="briefcase" size={24} color={colors.textLight} />
        <Text style={styles.tabText}>My Trips</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Feather name="check-circle" size={24} color={colors.textLight} />
        <Text style={styles.tabText}>Check-In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Feather name="user" size={24} color={colors.textLight} />
        <Text style={styles.tabText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingBottom: 20,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    fontSize: 12,
    fontFamily: typography.medium,
    color: colors.textLight,
    marginTop: 4,
  },
  activeTabText: {
    color: colors.primary,
  },
}); 