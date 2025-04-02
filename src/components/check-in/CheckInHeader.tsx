import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated, ImageBackground, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors, typography } from '../../styles/theme';

interface CheckInHeaderProps {
  scrollY: Animated.Value;
}

export const CheckInHeader = ({ scrollY }: CheckInHeaderProps) => {
  const headerBackground = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: ['transparent', colors.headerBg],
    extrapolate: 'clamp'
  });

  return (
    <ImageBackground 
      source={require('../../../assets/images/destination-bg.jpg')}
      style={styles.container}
    >
      <Animated.View style={[styles.overlay, { backgroundColor: headerBackground }]} />
      <View style={styles.content}>
        <Text style={styles.label}>Check-In</Text>
        <Text style={styles.welcomeText}>
          Provide your flight details{'\n'}to get started
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    paddingTop: 180,
    paddingBottom: 50,
    backgroundColor: '#003B73',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.white,
    opacity: 0.8,
    marginBottom: 4,
  },
  welcomeText: {
    fontSize: 24,
    fontFamily: typography.semiBold,
    color: colors.white,
  },
});