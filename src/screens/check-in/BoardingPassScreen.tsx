import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { ScreenLayout } from '../../components/layout/ScreenLayout';
import { colors, typography } from '../../styles/theme';
import { Feather } from '@expo/vector-icons';
import { Button } from '../../components/common/Button';
import QRCode from 'react-native-qrcode-svg';

export const BoardingPassScreen = () => {
  const boardingPassData = {
    passengerName: 'Rayden Gandalf',
    flightNumber: 'BG 2453',
    date: 'Thu Feb 20',
    from: {
      city: 'Lagos (LOS)',
      time: '10:15 AM',
    },
    to: {
      city: 'Abuja ABV',
      time: '11:15 AM',
    },
    gate: '9',
    boarding: '09:45',
    seat: '12D',
  };

  return (
    <ScreenLayout>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image 
            source={require('../../../assets/images/logo.png')} 
            style={styles.logo}
          />
          <View style={styles.qrContainer}>
            <QRCode
              value={JSON.stringify(boardingPassData)}
              size={70}
              color={colors.text}
              backgroundColor={colors.white}
            />
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.passengerInfo}>
            <Text style={styles.name}>{boardingPassData.passengerName}</Text>
            <Text style={styles.flightInfo}>
              {boardingPassData.flightNumber}
              <Text style={styles.date}>    {boardingPassData.date}</Text>
            </Text>
          </View>

          <View style={styles.flightRoute}>
            <View style={styles.route}>
              <Text style={styles.city}>{boardingPassData.from.city}</Text>
              <Text style={styles.time}>
                {boardingPassData.from.time},{'\n'}{boardingPassData.date}
              </Text>
            </View>
            <View style={styles.flightIcon}>
              <Feather name="arrow-right" size={20} color={colors.primary} />
            </View>
            <View style={styles.route}>
              <Text style={styles.city}>{boardingPassData.to.city}</Text>
              <Text style={styles.time}>
                {boardingPassData.to.time},{'\n'}{boardingPassData.date}
              </Text>
            </View>
          </View>

          <View style={styles.details}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Gate:</Text>
              <Text style={styles.detailValue}>{boardingPassData.gate}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Boarding:</Text>
              <Text style={styles.detailValue}>{boardingPassData.boarding}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Seat:</Text>
              <Text style={styles.detailValue}>{boardingPassData.seat}</Text>
            </View>
          </View>
        </View>

        <View style={styles.reminders}>
          <View style={styles.reminderHeader}>
            <Feather name="info" size={20} color={colors.warning} />
            <Text style={styles.reminderTitle}>Important Reminders</Text>
          </View>

          <View style={styles.reminderList}>
            <Text style={styles.reminderText}>
              Online Check-in opens 23 hours before your flight and closes 3 hours before your flight departure time.
            </Text>
            <Text style={styles.reminderText}>
              Please report to the boarding gate 40 minutes before your scheduled departure time. The boarding gate closes 10 minutes before your flight departure time.
            </Text>
            <Text style={styles.reminderText}>
              Each passenger must present their government-issued photo ID at the boarding gate.
            </Text>
            <Text style={styles.reminderText}>
              Kindly note that due to limited space, you may need to check your cabin luggage at no additional cost. Your luggage will be ready for retrieval at the arrival hall upon landing.
            </Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button 
          title="Download my boarding pass"
          onPress={() => {}}
          style={styles.button}
          leftIcon={<Feather name="download" size={20} color={colors.white} />}
        />
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginTop: 60,
  },
  logo: {
    height: 40,
    width: 120,
    resizeMode: 'contain',
  },
  qrContainer: {
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 8,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 16,
    margin: 16,
    padding: 20,
  },
  passengerInfo: {
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontFamily: typography.semiBold,
    color: colors.text,
    marginBottom: 4,
  },
  flightInfo: {
    fontSize: 16,
    fontFamily: typography.medium,
    color: colors.textLight,
  },
  date: {
    fontSize: 16,
    fontFamily: typography.regular,
    color: colors.textLight,
  },
  flightRoute: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.border,
    marginBottom: 20,
  },
  route: {
    flex: 1,
  },
  city: {
    fontSize: 16,
    fontFamily: typography.semiBold,
    color: colors.text,
    marginBottom: 4,
  },
  time: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textLight,
    lineHeight: 20,
  },
  flightIcon: {
    width: 32,
    height: 32,
    backgroundColor: colors.background,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 12,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailItem: {
    alignItems: 'center',
    flex: 1,
  },
  detailLabel: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textLight,
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 16,
    fontFamily: typography.semiBold,
    color: colors.text,
  },
  reminders: {
    backgroundColor: colors.white,
    borderRadius: 16,
    margin: 16,
    marginTop: 0,
    padding: 20,
  },
  reminderHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  reminderTitle: {
    fontSize: 16,
    fontFamily: typography.semiBold,
    color: colors.text,
    marginLeft: 8,
  },
  reminderList: {
    gap: 12,
  },
  reminderText: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.text,
    lineHeight: 20,
  },
  footer: {
    padding: 16,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  button: {
    borderRadius: 60,
    marginBottom: 20,
  },
}); 