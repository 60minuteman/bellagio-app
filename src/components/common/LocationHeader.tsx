import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';
import { colors, typography } from '../../styles/theme';

interface LocationHeaderProps {
  userName: string;
}

export const LocationHeader = ({ userName }: LocationHeaderProps) => {
  return (
    <ImageBackground 
      source={require('../../../assets/images/destination-bg.jpg')} 
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.welcomeText}>
          Where would you like{'\n'}to travel to, {userName}?
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
  },
  content: {
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontFamily: typography.semiBold,
    color: colors.white,
  },
}); 