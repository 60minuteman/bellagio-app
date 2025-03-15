import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { colors, typography } from '../../styles/theme';
import { Feather } from '@expo/vector-icons';

interface DatePrice {
  date: string;
  price: string;
}

export const DatePriceSelector = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [scrollViewRef, setScrollViewRef] = useState<ScrollView | null>(null);

  const dates: DatePrice[] = [
    { date: 'Mon Feb 17', price: '₦88,571.00' },
    { date: 'Mon Feb 17', price: '₦88,571.00' },
    { date: 'Mon Feb 17', price: '₦88,571.00' },
  ];

  const scrollToIndex = (direction: 'left' | 'right') => {
    if (!scrollViewRef) return;

    const offset = direction === 'left' ? -132 : 132; // Card width (120) + margin (12)
    scrollViewRef.scrollTo({
      x: offset,
      animated: true
    });
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <TouchableOpacity 
          style={[styles.arrowButton, styles.leftArrow]}
          onPress={() => scrollToIndex('left')}
        >
          <Feather name="chevron-left" size={24} color={colors.text} />
        </TouchableOpacity>

        <ScrollView 
          ref={ref => setScrollViewRef(ref)}
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {dates.map((item, index) => (
            <TouchableOpacity 
              key={index} 
              style={[
                styles.dateCard,
                index === selectedIndex && styles.selectedCard
              ]}
              onPress={() => setSelectedIndex(index)}
            >
              <Text style={[
                styles.dateText,
                index === selectedIndex && styles.selectedText
              ]}>{item.date}</Text>
              <Text style={[
                styles.priceText,
                index === selectedIndex && styles.selectedText
              ]}>{item.price}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <TouchableOpacity 
          style={[styles.arrowButton, styles.rightArrow]}
          onPress={() => scrollToIndex('right')}
        >
          <Feather name="chevron-right" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    borderWidth: 1,
    borderColor: '#E9EDF2',
    borderRadius: 16,
    margin: 20,
    overflow: 'visible',
  },
  container: {
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollContent: {
    paddingHorizontal: 8,
  },
  dateCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 6,
    alignItems: 'center',
    minWidth: 120,
  },
  selectedCard: {
    backgroundColor: colors.primary,
  },
  dateText: {
    fontSize: 14,
    fontFamily: typography.medium,
    color: colors.text,
    marginBottom: 4,
  },
  priceText: {
    fontSize: 16,
    fontFamily: typography.bold,
    color: colors.text,
  },
  selectedText: {
    color: colors.white,
  },
  arrowButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },
  leftArrow: {
    left: -20,
  },
  rightArrow: {
    right: -20,
  },
}); 