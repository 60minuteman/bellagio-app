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

export const OnboardingScreen4 = () => {
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

    const timer = setTimeout(() => {
      navigation.navigate('SignUp');
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {
    navigation.navigate('SignUp');
  };

  const handleSkip = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
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
            source={require('../../../assets/images/25kcard.png')}
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
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Explore our{'\n'}Gift card Program</Text>
          <Text style={styles.subtitle}>
            Travel Gift Cards for Friends,{'\n'}Family, and Loved Ones
          </Text>
          <View style={styles.dotsContainer}>
            <View style={[styles.dot, styles.inactiveDot]} />
            <View style={[styles.dot, styles.inactiveDot]} />
            <View style={[styles.dot, styles.activeDot]} />
          </View>
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
    top: 60,
    right: 24,
    zIndex: 1,
  },
  skipButton: {
    backgroundColor: 'transparent',
  },
  skipButtonText: {
    color: colors.white,
    fontSize: 16,
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
    top: '60%',
    left: '50%',
  },
  cardImage: {
    width: 339,
    height: 530,
  },
  curveContainer: {
    marginTop: -60,
  },
  bottomSection: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 24,
  },
  contentContainer: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
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
    marginBottom: 24,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
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