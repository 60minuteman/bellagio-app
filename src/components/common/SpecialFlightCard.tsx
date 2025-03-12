import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { colors, typography } from '../../styles/theme';

interface SpecialFlightCardProps {
  title: string;
  description: string;
  style?: object;
}

export const SpecialFlightCard = ({ title, description, style }: SpecialFlightCardProps) => {
  return (
    <TouchableOpacity style={[styles.container, style]}>
      <ImageBackground
        source={require('../../../assets/images/destination-bg.jpg')}
        style={styles.background}
        imageStyle={styles.backgroundImage}
      >
        <View style={styles.content}>
          <Text style={styles.title}>🌴 {title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 180,
    borderRadius: 24,
    overflow: 'hidden',
  },
  background: {
    flex: 1,
  },
  backgroundImage: {
    borderRadius: 24,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  title: {
    fontSize: 20,
    fontFamily: typography.semiBold,
    color: colors.white,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.white,
    opacity: 0.9,
    lineHeight: 20,
  },
}); 