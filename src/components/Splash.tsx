import { StyleSheet, Image, View, Dimensions, Animated } from 'react-native';
import { colors } from '../styles/theme';
import { useEffect, useRef } from 'react';

const { width, height } = Dimensions.get('window');

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
      <Image
        source={require('../../assets/background/Splash-bg.png')}
        style={styles.backgroundImage}
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  backgroundImage: {
    position: 'absolute',
    width,
    height,
  },
  logo: {
    width: width * 0.7,
    height: height * 0.15,
  },
}); 