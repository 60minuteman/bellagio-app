import React from 'react';
import { StyleSheet, View, Text, Modal, TouchableOpacity, Pressable } from 'react-native';
import { colors, typography } from '../../styles/theme';
import { Feather } from '@expo/vector-icons';

interface BottomSheetProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const BottomSheet = ({ visible, onClose, children }: BottomSheetProps) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <View style={styles.content} onStartShouldSetResponder={() => true}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Feather name="x" size={24} color={colors.text} />
          </TouchableOpacity>
          {children}
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  content: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    paddingTop: 32,
  },
  closeButton: {
    position: 'absolute',
    right: 24,
    top: 24,
    zIndex: 1,
  },
}); 