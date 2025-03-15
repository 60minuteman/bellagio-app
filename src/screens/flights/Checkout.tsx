import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { ScreenLayout } from '../../components/layout/ScreenLayout';
import { FlightHeader } from '../../components/flights/FlightHeader';
import { BookingProgress } from '../../components/flights/BookingProgress';
import { CountdownBanner } from '../../components/flights/CountdownBanner';
import { Button } from '../../components/common/Button';
import { colors, typography } from '../../styles/theme';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

type PaymentMethod = 'paystack' | 'flutterwave' | 'crypto' | 'giftcard';

export const Checkout = () => {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('flutterwave');
  const navigation = useNavigation();

  const handlePayment = () => {
    navigation.navigate('BookingSuccess');
  };

  return (
    <ScreenLayout headerBackground={colors.background}>
      <FlightHeader title="Summary & Checkout" />
      <CountdownBanner initialMinutes={29} initialSeconds={54} />
      <BookingProgress currentStep={3} />
      
      <View style={styles.container}>
        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Payment Summary & Method</Text>
            
            <View style={styles.summary}>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Flight fare (1 Adult):</Text>
                <Text style={styles.summaryValue}>₦132,382.00</Text>
              </View>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Taxes:</Text>
                <Text style={styles.summaryValue}>₦3,000.00</Text>
              </View>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Total:</Text>
                <Text style={styles.summaryValue}>₦267,764.00</Text>
              </View>
              
              <View style={styles.totalContainer}>
                <Text style={styles.totalLabel}>Total payable:</Text>
                <Text style={styles.totalAmount}>₦267,764.00</Text>
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Choose your preferred payment method</Text>
            
            <TouchableOpacity 
              style={[styles.methodOption, selectedMethod === 'paystack' && styles.methodSelected]}
              onPress={() => setSelectedMethod('paystack')}
            >
              <View style={styles.radio}>
                {selectedMethod === 'paystack' && <View style={styles.radioSelected} />}
              </View>
              <View style={styles.methodContent}>
                <Text style={styles.methodTitle}>Paystack</Text>
                <Text style={styles.methodDescription}>
                  Make payment via Paystack with your bank card, USSD or pay with Transfer (Instant)
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.methodOption, selectedMethod === 'flutterwave' && styles.methodSelected]}
              onPress={() => setSelectedMethod('flutterwave')}
            >
              <View style={styles.radio}>
                {selectedMethod === 'flutterwave' && <View style={styles.radioSelected} />}
              </View>
              <View style={styles.methodContent}>
                <Text style={styles.methodTitle}>Flutterwave</Text>
                <Text style={styles.methodDescription}>
                  Make payment via Flutterwave with your bank card, USSD or pay with Transfer (Instant)
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.methodOption, selectedMethod === 'crypto' && styles.methodSelected]}
              onPress={() => setSelectedMethod('crypto')}
            >
              <View style={styles.radio}>
                {selectedMethod === 'crypto' && <View style={styles.radioSelected} />}
              </View>
              <View style={styles.methodContent}>
                <Text style={styles.methodTitle}>Pay with Crypto</Text>
                <Text style={styles.methodDescription}>
                  Make payment via Crypto with USDT or USDC. Simply scan the QR code, enter the amount, and confirm the transaction
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.methodOption, selectedMethod === 'giftcard' && styles.methodSelected]}
              onPress={() => setSelectedMethod('giftcard')}
            >
              <View style={styles.radio}>
                {selectedMethod === 'giftcard' && <View style={styles.radioSelected} />}
              </View>
              <View style={styles.methodContent}>
                <Text style={styles.methodTitle}>Gift Cards</Text>
                <Text style={styles.methodDescription}>
                  Make payment via Paystack with your bank card, USSD or pay with Transfer (Instant)
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <Button 
            title={`Pay ₦267,764.00`}
            onPress={handlePayment}
            style={styles.payButton}
          />
        </View>
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    padding: 20,
  },
  card: {
    backgroundColor: colors.white,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontFamily: typography.semiBold,
    color: colors.text,
    marginBottom: 16,
  },
  summary: {
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: 16,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  summaryLabel: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textLight,
  },
  summaryValue: {
    fontSize: 14,
    fontFamily: typography.medium,
    color: colors.text,
  },
  totalContainer: {
    marginTop: 8,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    alignItems: 'center',
  },
  totalLabel: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textLight,
    marginBottom: 4,
  },
  totalAmount: {
    fontSize: 24,
    fontFamily: typography.bold,
    color: colors.primary,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: typography.medium,
    color: colors.text,
    marginBottom: 16,
  },
  methodOption: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
  },
  methodSelected: {
    borderColor: colors.primary,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.border,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioSelected: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
  methodContent: {
    flex: 1,
  },
  methodTitle: {
    fontSize: 16,
    fontFamily: typography.semiBold,
    color: colors.text,
    marginBottom: 4,
  },
  methodDescription: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textLight,
    lineHeight: 20,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: colors.background,
  },
  payButton: {
    borderRadius: 30,
  },
}); 