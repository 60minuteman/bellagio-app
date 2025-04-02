import React, { useState } from 'react';
import { StyleSheet, Text, View, Animated, ScrollView, Platform, ImageBackground, Dimensions } from 'react-native';
import { ScreenLayout } from '../../components/layout/ScreenLayout';
import { colors, typography } from '../../styles/theme';
import { PNREntry } from '../../components/check-in/PNREntry';
import { MaterialIcons } from '@expo/vector-icons';
import { Header } from '../../components/check-in/Header';

export const CheckInScreen = () => {
  const [lastName, setLastName] = useState('');
  const [pnr, setPnr] = useState('');
  const scrollY = new Animated.Value(0);

  const handleCheckIn = () => {
    console.log('Checking in with:', { lastName, pnr });
  };

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false }
  );

  return (
    <ScreenLayout statusBarStyle="light-content" backgroundColor="#F8FAFC">
      <Header scrollY={scrollY} />
      
      <Animated.ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        contentContainerStyle={styles.scrollContent}
      >
        <ImageBackground 
          source={require('../../../assets/images/destination-bg.jpg')}
          style={styles.headerContainer}
          imageStyle={styles.headerImage}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.subtitle}>
              Provide your flight details{'\n'}to proceed
            </Text>
          </View>
        </ImageBackground>
        
        <View style={styles.content}>
          <View style={styles.formContainer}>
            <PNREntry
              lastName={lastName}
              setLastName={setLastName}
              pnr={pnr}
              setPnr={setPnr}
              onSubmit={handleCheckIn}
            />
          </View>

          <View style={styles.historySection}>
            <Text style={styles.historyTitle}>My History</Text>
            <View style={styles.emptyState}>
              <MaterialIcons name="error-outline" size={24} color={colors.textLight} />
              <Text style={styles.emptyStateText}>
                You've not had any online check-ins. They'll appear here when you do.
              </Text>
            </View>
          </View>
        </View>
      </Animated.ScrollView>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: Platform.select({
      ios: 20,
      android: 24
    }),
  },
  headerContainer: {
    width: '100%',
    overflow: 'hidden',
    backgroundColor: '#003B73',
    
  },
  headerImage: {
    width: '100%',
    resizeMode: 'cover',
  },
  titleContainer: {
    paddingHorizontal: 20,
    paddingTop: 160,
    paddingBottom: 50,
  },
  subtitle: {
    fontSize: 24,
    fontFamily: typography.semiBold,
    color: colors.white,
  },
  content: {
    flex: 1,
    marginTop: -40,
  },
  formContainer: {
    marginHorizontal: 20,
    marginTop: 0,
  },
  historySection: {
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 20,
  },
  historyTitle: {
    fontSize: 18,
    fontFamily: typography.semiBold,
    color: colors.text,
    marginBottom: 16,
  },
  emptyState: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  emptyStateText: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textLight,
    textAlign: 'center',
    marginTop: 12,
    lineHeight: 20,
  },
});