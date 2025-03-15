import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../styles/theme';

interface CountdownBannerProps {
  initialMinutes?: number;
  initialSeconds?: number;
  onTimeUp?: () => void;
}

export const CountdownBanner = ({ 
  initialMinutes = 30, 
  initialSeconds = 0,
  onTimeUp 
}: CountdownBannerProps) => {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60 + initialSeconds);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp?.();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Confirm booking before{' '}
        <Text style={styles.time}>
          {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: '100%',
    padding: 8,
  },
  text: {
    color: colors.white,
    fontSize: 12,
    fontFamily: typography.medium,
    textAlign: 'center',
  },
  time: {
    fontFamily: typography.bold,
  },
}); 