import { StyleSheet, Text, View, Image, Dimensions, Animated } from 'react-native';
import { colors, typography } from '../../styles/theme';
import { Button } from '../../components/common/Button';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import Svg, { Path } from 'react-native-svg';
import { useEffect, useRef } from 'react';

const { width, height } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;

export const OnboardingScreen2 = () => {
  const navigation = useNavigation<NavigationProp>();
  const cardAnimation = useRef(new Animated.Value(height)).current;
  const bounceAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Initial slide up animation
    Animated.spring(cardAnimation, {
      toValue: -265,
      useNativeDriver: true,
      tension: 5,
      friction: 8
    }).start();

    // Continuous bounce animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnimation, {
          toValue: -10,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnimation, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        })
      ])
    ).start();
  }, []);

  const handleNext = () => {
    navigation.navigate('OnboardingScreen3');
  };

  const handleSkip = () => {
    // Handle skip navigation
  };

  return (
    <View style={styles.container}>
      <View style={styles.skipContainer}>
        <Button
          title="Skip"
          onPress={handleSkip}
          style={styles.skipButton}
          textStyle={styles.skipButtonText}
        />
      </View>
      <View style={styles.topSection}>
        <Image
          source={require('../../../assets/background/bg.png')}
          style={styles.backgroundImage}
          resizeMode="cover"
        />
        <Animated.View style={[styles.cardContainer, {
          transform: [
            {translateX: -154},
            {translateY: Animated.add(cardAnimation, bounceAnimation)}
          ]
        }]}>
          <Image
            source={require('../../../assets/images/card.png')}
            style={styles.cardImage}
            resizeMode="contain"
          />
        </Animated.View>
      </View>
      <View style={styles.curveContainer}>
        <Svg height={60} width={width}>
          <Path
            d={`M0 0 
               C ${width/4} 60, ${3*width/4} 60, ${width} 0
               L ${width} 60 
               L 0 60 
               Z`}
            fill={colors.white}
          />
        </Svg>
      </View>
      <View style={styles.bottomSection}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Book your Flights{'\n'}with Ease</Text>
          <Text style={styles.subtitle}>
            Search, Book, and Fly with Our{'\n'}User-Friendly Platform
          </Text>
        </View>
        <View style={styles.dotsContainer}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={[styles.dot, styles.inactiveDot]} />
          <View style={[styles.dot, styles.inactiveDot]} />
        </View>
        <View style={styles.buttonContainer}>
          <Button 
            title="Next"
            onPress={handleNext}
            style={styles.button}
            textStyle={styles.buttonText}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  skipContainer: {
    position: 'absolute',
    top: 74,
    right: 24,
    zIndex: 1,
  },
  skipButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  skipButtonText: {
    color: colors.white,
    fontSize: 14,
    fontFamily: typography.regular,
  },
  topSection: {
    height: height * 0.55,
    overflow: 'hidden',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  cardContainer: {
    position: 'absolute',
    top: '85%',
    left: '37%',
  },
  cardImage: {
    width: 408,
    height: 630,
  },
  curveContainer: {
    marginTop: -60,
  },
  bottomSection: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  textContainer: {
    marginTop: 20,
  },
  title: {
    fontSize: 32,
    fontFamily: typography.semiBold,
    color: '#2B3340',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: typography.regular,
    color: '#2B3340',
    textAlign: 'center',
    opacity: 0.8,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: colors.primary,
    width: 24,
  },
  inactiveDot: {
    backgroundColor: colors.primary,
    opacity: 0.4,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    left: 24,
    right: 24,
  },
  button: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
  },
});