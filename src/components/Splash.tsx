import { StyleSheet, Image, View, Dimensions, Animated, StatusBar, Platform } from 'react-native';
import { colors } from '../styles/theme';
import { useEffect, useRef } from 'react';

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

// Use screen dimensions to ensure full coverage including navigation bar
const { width, height } = screenDimensions;

export const Splash = () => {
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
      tension: 10,
      friction: 2,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Image
        source={require('../../assets/background/Splash-bg.png')}
        style={[
          styles.backgroundImage,
          Platform.OS === 'android' && {
            height: height + (screenDimensions.height - windowDimensions.height) // Add navigation bar height
          }
        ]}
        resizeMode="cover"
      />
      <Animated.Image
        source={require('../../assets/images/logo.png')}
        style={[
          styles.logo,
          {
            transform: [
              { scale: scaleAnim }
            ]
          }
        ]}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  backgroundImage: {
    position: 'absolute',
    width,
    height,
    top: 0,
    left: 0,
  },
  logo: {
    width: width * 0.7,
    height: height * 0.15,
  },
});