import React from 'react';
import { StyleSheet, Text, View, ScrollView, Animated, StatusBar, Platform } from 'react-native';
import { colors, typography } from '../../styles/theme';
import { HomeHeader } from '../../components/common/HomeHeader';
import { LocationHeader } from '../../components/common/LocationHeader';
import { FlightSearchForm } from '../../components/common/FlightSearchForm';
import { SpecialFlightCard } from '../../components/common/SpecialFlightCard';
import { ScreenLayout } from '../../components/layout/ScreenLayout';

export const HomeScreen = () => {
  const scrollY = new Animated.Value(0);

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false }
  );

  return (
    <ScreenLayout 
      statusBarStyle="light-content"
      backgroundColor={colors.background}
    >
      <HomeHeader location="Abuja, Nigeria" scrollY={scrollY} />
      
      <Animated.ScrollView 
        style={styles.scrollView} 
        showsVerticalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.headerContainer}>
          <LocationHeader userName="Jane" />
        </View>
        
        <View style={styles.content}>
          <View style={styles.searchFormContainer}>
            <FlightSearchForm />
          </View>

          <View style={styles.specialFlights}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Special Flights</Text>
              <Text style={styles.seeAll}>See All</Text>
            </View>
            
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <SpecialFlightCard
                title="Handpicked Destinations"
                description="Discover exciting cities and hidden gems at special rates."
              />
              <SpecialFlightCard
                title="Handpicked Destinations"
                description="Discover exciting cities and hidden gems at special rates."
                style={styles.secondCard}
              />
            </ScrollView>
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
      android: 24 // Add padding for Android navigation bar
    }),
  },
  headerContainer: {
    width: '100%',
    overflow: 'hidden',
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    marginTop: -60,
  },
  searchFormContainer: {
    marginHorizontal: 20,
    marginTop: 25,
  },
  specialFlights: {
    marginTop: 24,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: typography.semiBold,
    color: colors.text,
  },
  seeAll: {
    fontSize: 14,
    fontFamily: typography.medium,
    color: colors.primary,
  },
  secondCard: {
    marginLeft: 16,
  },
});