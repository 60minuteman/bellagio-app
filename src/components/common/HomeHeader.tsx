import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors, typography } from '../../styles/theme';

interface HomeHeaderProps {
  location: string;
  scrollY: Animated.Value;
}

export const HomeHeader = ({ location, scrollY }: HomeHeaderProps) => {
  const headerBackground = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: ['transparent', colors.headerBg],
    extrapolate: 'clamp'
  });

  return (
    <Animated.View style={[styles.container, { backgroundColor: headerBackground }]}>
      <View style={styles.locationContainer}>
        <Feather name="map-pin" size={24} color={colors.white} />
        <View style={styles.textContainer}>
          <Text style={styles.label}>Location</Text>
          <Text style={styles.locationText}>{location}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.menuButton}>
        <Feather name="menu" size={24} color={colors.white} />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.15)',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  textContainer: {
    marginLeft: 8,
  },
  label: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.white,
    opacity: 0.8,
  },
  locationText: {
    fontSize: 20,
    fontFamily: typography.semiBold,
    color: colors.white,
    marginTop: 2,
  },
  menuButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 