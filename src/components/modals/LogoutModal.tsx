import React from 'react';
import { StyleSheet, View, Text, Modal, TouchableOpacity } from 'react-native';
import { colors, typography } from '../../styles/theme';
import { Button } from '../common/Button';
import { Feather } from '@expo/vector-icons';

interface LogoutModalProps {
  visible: boolean;
  onClose: () => void;
  onLogout: () => void;
}

export const LogoutModal = ({ visible, onClose, onLogout }: LogoutModalProps) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <View style={styles.iconContainer}>
            <View style={styles.warningCircle}>
              <Feather name="alert-triangle" size={32} color={colors.warning} />
            </View>
          </View>

          <Text style={styles.title}>Are you sure you want to logout?</Text>

          <View style={styles.buttonContainer}>
            <Button
              title="No, I'm still here"
              onPress={onClose}
              style={styles.stayButton}
            />
            <Button
              title="Yes, log me out"
              onPress={onLogout}
              style={styles.logoutButton}
              textStyle={styles.logoutButtonText}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  modalContainer: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 24,
    width: '100%',
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: 24,
  },
  warningCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.warningBg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: typography.semiBold,
    color: colors.text,
    textAlign: 'center',
    marginBottom: 32,
  },
  buttonContainer: {
    width: '100%',
    gap: 16,
  },
  stayButton: {
    backgroundColor: colors.primary,
  },
  logoutButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.border,
  },
  logoutButtonText: {
    color: colors.error,
  },
}); 