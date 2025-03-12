import React from 'react';
import { StyleSheet, View, StatusBar, Platform } from 'react-native';
import { colors } from '../../styles/theme';

interface ScreenLayoutProps {
  children: React.ReactNode;
  statusBarStyle?: 'light-content' | 'dark-content';
  backgroundColor?: string;
}

export const ScreenLayout = ({ 
  children, 
  statusBarStyle = 'dark-content',
  backgroundColor = colors.white 
}: ScreenLayoutProps) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={statusBarStyle}
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
}); 