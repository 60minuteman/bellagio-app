import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { ScreenLayout } from '../../components/layout/ScreenLayout';
import { colors, typography } from '../../styles/theme';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScreenHeader } from '../../components/common/ScreenHeader';
import { LogoutModal } from '../../components/modals/LogoutModal';

export const ProfileScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleMenuPress = (route: keyof RootStackParamList) => {
    navigation.navigate(route);
  };

  const menuItems = {
    forYou: [
      { icon: 'award', label: 'Your Benefits', route: 'Benefits' },
      { icon: 'activity', label: 'Activity', route: 'Activity' },
      { icon: 'credit-card', label: 'Travel Credit', route: 'TravelCredit' },
      { icon: 'gift', label: 'Rewards', route: 'Rewards' },
    ],
    settings: [
      { icon: 'user', label: 'My Information', route: 'MyInformation' },
      { icon: 'credit-card', label: 'Payment Methods', route: 'PaymentMethods' },
      { icon: 'bookmark', label: 'Reservation Preferences', route: 'ReservationPreferences' },
      { icon: 'mail', label: 'Communication Preferences', route: 'CommunicationPreferences' },
      { icon: 'bell', label: 'Be Notified', route: 'BeNotified' },
    ],
  };

  const handleLogout = () => {
    // TODO: Implement logout logic
    setShowLogoutModal(false);
    // Navigate to Welcome screen or clear auth state
    navigation.navigate('Welcome');
  };

  return (
    <ScreenLayout>
      <ScreenHeader title="Your Account" />

      <ScrollView style={styles.container}>
        <View style={styles.loyaltyCard}>
          <View>
            <Text style={styles.userName}>Williams Peter</Text>
            <View style={styles.tierInfo}>
              <Text style={styles.tierLabel}>Bronze Tier</Text>
              <View style={styles.idContainer}>
                <Feather name="copy" size={16} color={colors.white} />
                <Text style={styles.userId}>ID: #BA00231</Text>
              </View>
            </View>
          </View>

          <View style={styles.pointsContainer}>
            <Text style={styles.pointsValue}>0</Text>
            <View style={styles.pointsInfo}>
              <Text style={styles.pointsLabel}>Loyalty Points</Text>
              <Feather name="info" size={16} color={colors.white} />
            </View>
            <Text style={styles.pointsTarget}>
              40,000 more Loyalty Points to reach Silver®
            </Text>
            <TouchableOpacity 
              style={styles.pointsArrow}
              onPress={() => navigation.navigate('TierLevels')}
            >
              <Feather name="chevron-right" size={24} color={colors.white} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.balanceSection}>
          <View style={styles.balanceItem}>
            <Text style={styles.balanceLabel}>Gift cards</Text>
            <View style={styles.balanceRow}>
              <Text style={styles.balanceValue}>0</Text>
              <TouchableOpacity style={styles.balanceArrow}>
                <Feather name="chevron-right" size={24} color={colors.primary} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.balanceItem}>
            <Text style={styles.balanceLabel}>Wallet Balance</Text>
            <View style={styles.balanceRow}>
              <Text style={styles.balanceValue}>₦0.00</Text>
              <TouchableOpacity style={styles.addButton}>
                <Feather name="plus" size={24} color={colors.primary} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.menuSection}>
          <Text style={styles.menuTitle}>For You</Text>
          {menuItems.forYou.map((item, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.menuItem}
              onPress={() => handleMenuPress(item.route as keyof RootStackParamList)}
            >
              <View style={styles.menuIcon}>
                <Feather name={item.icon as any} size={20} color={colors.text} />
              </View>
              <Text style={styles.menuLabel}>{item.label}</Text>
              <Feather name="chevron-right" size={20} color={colors.textLight} />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.menuSection}>
          <Text style={styles.menuTitle}>Settings & Profile</Text>
          {menuItems.settings.map((item, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.menuItem}
              onPress={() => handleMenuPress(item.route as keyof RootStackParamList)}
            >
              <View style={styles.menuIcon}>
                <Feather name={item.icon as any} size={20} color={colors.text} />
              </View>
              <Text style={styles.menuLabel}>{item.label}</Text>
              <Feather name="chevron-right" size={20} color={colors.textLight} />
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity 
          style={styles.logoutButton}
          onPress={() => setShowLogoutModal(true)}
        >
          <Feather name="log-out" size={20} color={colors.error} />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>

      <LogoutModal
        visible={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onLogout={handleLogout}
      />
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: typography.semiBold,
    color: colors.text,
    padding: 16,
    paddingTop: 60,
  },
  loyaltyCard: {
    backgroundColor: colors.primary,
    borderRadius: 16,
    padding: 20,
    margin: 16,
    marginTop: 0,
  },
  userName: {
    fontSize: 20,
    fontFamily: typography.semiBold,
    color: colors.white,
    marginBottom: 4,
  },
  tierInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  tierLabel: {
    fontSize: 14,
    fontFamily: typography.medium,
    color: colors.white,
    opacity: 0.8,
  },
  idContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  userId: {
    fontSize: 14,
    fontFamily: typography.medium,
    color: colors.white,
    opacity: 0.8,
  },
  pointsContainer: {
    marginTop: 24,
  },
  pointsValue: {
    fontSize: 40,
    fontFamily: typography.semiBold,
    color: colors.white,
  },
  pointsInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 8,
  },
  pointsLabel: {
    fontSize: 16,
    fontFamily: typography.medium,
    color: colors.white,
  },
  pointsTarget: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.white,
    opacity: 0.8,
  },
  pointsArrow: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  balanceSection: {
    margin: 16,
    marginTop: 0,
    gap: 16,
  },
  balanceItem: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 16,
  },
  balanceLabel: {
    fontSize: 16,
    fontFamily: typography.medium,
    color: colors.text,
    marginBottom: 8,
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  balanceValue: {
    fontSize: 24,
    fontFamily: typography.semiBold,
    color: colors.text,
  },
  balanceArrow: {
    padding: 4,
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuSection: {
    margin: 16,
    marginTop: 0,
  },
  menuTitle: {
    fontSize: 14,
    fontFamily: typography.medium,
    color: colors.textLight,
    marginBottom: 8,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  menuLabel: {
    flex: 1,
    fontSize: 16,
    fontFamily: typography.medium,
    color: colors.text,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 16,
    marginBottom: 100,
  },
  logoutText: {
    fontSize: 16,
    fontFamily: typography.medium,
    color: colors.error,
  },
}); 