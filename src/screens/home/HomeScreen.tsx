import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { colors, typography } from '../../styles/theme';
import { Feather } from '@expo/vector-icons';
import { SearchBar } from '../../components/common/SearchBar';
import { ActionButton } from '../../components/common/ActionButton';
import { SectionHeader } from '../../components/common/SectionHeader';
import { FlightCard } from '../../components/common/FlightCard';
import { OfferCard } from '../../components/common/OfferCard';

const { width } = Dimensions.get('window');

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeText}>Welcome back</Text>
          <Text style={styles.userName}>John Doe</Text>
        </View>
        <TouchableOpacity style={styles.profileButton}>
          <Text style={styles.profileInitials}>JD</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <SearchBar style={styles.searchBar} />

        <View style={styles.quickActions}>
          <SectionHeader title="Quick Actions" />
          <View style={styles.actionButtons}>
            <ActionButton 
              title="Book Flight" 
              icon="calendar"
              style={styles.actionButton}
            />
            <ActionButton 
              title="Check In" 
              icon="check-circle"
              style={styles.actionButton}
            />
            <ActionButton 
              title="Flight Status" 
              icon="clock"
              style={styles.actionButton}
            />
          </View>
        </View>

        <View style={styles.upcomingFlights}>
          <SectionHeader 
            title="Upcoming Flights" 
            showSeeAll 
            onSeeAllPress={() => {}}
          />
          <FlightCard 
            fromCode="ABV"
            toCode="LOS"
            date="April 15, 2024 • 10:30 AM"
            onPress={() => {}}
          />
        </View>

        <View style={styles.specialOffers}>
          <SectionHeader 
            title="Special Offers" 
            showSeeAll 
            onSeeAllPress={() => {}}
          />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <OfferCard
              title="Summer Sale"
              description="Get 20% off on international flights"
              onPress={() => {}}
            />
            <OfferCard
              title="Weekend Deal"
              description="Domestic flights starting at $99"
              onPress={() => {}}
              style={styles.secondaryOffer}
            />
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: colors.white,
  },
  welcomeText: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: '#666',
  },
  userName: {
    fontSize: 20,
    fontFamily: typography.bold,
    color: colors.black,
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInitials: {
    color: colors.white,
    fontSize: 16,
    fontFamily: typography.medium,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  searchBar: {
    marginBottom: 24,
  },
  quickActions: {
    marginBottom: 24,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flex: 1,
    marginHorizontal: 4,
  },
  upcomingFlights: {
    marginBottom: 24,
  },
  specialOffers: {
    marginBottom: 24,
  },
  secondaryOffer: {
    backgroundColor: '#818CF8',
  },
}); 