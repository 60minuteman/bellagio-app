import React from 'react';
import { StyleSheet, Text, View, Animated, Dimensions } from 'react-native';
import { colors, typography } from '../../styles/theme';

interface HeaderProps {
  scrollY: Animated.Value;
}

export const Header = ({ scrollY }: HeaderProps) => {
  const headerBackground = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: ['transparent', '#003B73'],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View style={[styles.container, { backgroundColor: headerBackground }]}>
      <Text style={styles.title}>Check-In 💼</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: Dimensions.get('window').width,
    height: 100,
    paddingTop: 60,
    paddingHorizontal: 80,
    zIndex: 100,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(239, 239, 239, 0.05)',
  },
  title: {
    fontSize: 16,
    fontFamily: typography.semiBold,
    color: colors.white,
    textAlign: 'center',
  },
}); 