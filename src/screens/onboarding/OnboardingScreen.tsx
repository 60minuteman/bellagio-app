import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { colors, typography } from '../../styles/theme';
import { Button } from '../../components/common/Button';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

const { width, height } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;

export const OnboardingScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleGetStarted = () => {
    navigation.navigate('Onboarding');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/background/bg.png')}
        style={StyleSheet.absoluteFillObject}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to{'\n'}Bellagio Airlines</Text>
        <View style={styles.imageWrapper}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../../assets/images/girl.png')}
              style={styles.girlImage}
              resizeMode="contain"
            />
            <LinearGradient
              colors={['rgba(35, 136, 251, 0)', 'rgba(35, 136, 251, 0.8)', 'rgba(35, 136, 251, 1)']}
              style={[StyleSheet.absoluteFill, styles.gradient]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              locations={[0.4, 0.7, 1]}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button 
            title="Get Started →" 
            onPress={handleGetStarted}
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
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: height * 0.1,
  },
  title: {
    fontSize: 32,
    fontFamily: typography.bold,
    color: colors.white,
    textAlign: 'center',
    marginBottom: 20,
  },
  imageWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: -240,
  },
  imageContainer: {
    width: 464,
    height: 854,
    alignSelf: 'center',
  },
  girlImage: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    height: '100%',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    left: 24,
    right: 24,
  },
  button: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#2788FC',
    fontSize: 18,
  },
}); 