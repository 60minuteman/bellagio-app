import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import { colors, typography } from '../../styles/theme';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface PNREntryProps {
  lastName: string;
  setLastName: (value: string) => void;
  pnr: string;
  setPnr: (value: string) => void;
  onSubmit: () => void;
}

export const PNREntry = ({ lastName, setLastName, pnr, setPnr, onSubmit }: PNREntryProps) => {
  const navigation = useNavigation();

  const handleSubmit = () => {
    // Call the original onSubmit if needed
    onSubmit();
    // Navigate to search results
    navigation.navigate('SearchResults');
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <MaterialIcons name="info-outline" size={20} color={colors.warning} />
        <Text style={styles.infoText}>
          PNR can be found in your e-ticket slip
        </Text>
      </View>

      <View style={styles.form}>
        <Input
          label="Passenger Last Name"
          placeholder="Enter"
          value={lastName}
          onChangeText={setLastName}
          containerStyle={styles.input}
        />

        <Input
          label="PNR"
          placeholder="Enter"
          value={pnr}
          onChangeText={setPnr}
          containerStyle={styles.input}
        />

        <Button
          title="Check me In"
          onPress={handleSubmit}
          style={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF9EB',
    padding: 12,
    borderRadius: 8,
    marginBottom: 24,
  },
  infoText: {
    marginLeft: 8,
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.text,
  },
  form: {
    gap: 16,
  },
  input: {
    width: '100%',
  },
  button: {
    marginTop: 8,
    borderRadius: 30,
  },
}); 