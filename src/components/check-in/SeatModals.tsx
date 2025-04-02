import React from 'react';
import { StyleSheet, View, Text, Modal, TouchableOpacity } from 'react-native';
import { colors, typography } from '../../styles/theme';
import { Button } from '../common/Button';
import { Feather } from '@expo/vector-icons';

interface SeatModalProps {
  isVisible: boolean;
  onClose: () => void;
  seatNumber: string;
  passengerName: string;
}

export const AssignSeatModal = ({ isVisible, onClose, seatNumber, passengerName, onAssign }: SeatModalProps & { onAssign: () => void }) => (
  <Modal transparent visible={isVisible} animationType="slide">
    <View style={styles.modalOverlay}>
      <View style={styles.modalContent}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Feather name="x" size={24} color={colors.text} />
        </TouchableOpacity>
        
        <View style={styles.seatInfo}>
          <View style={styles.seatLabel}>
            <Text style={styles.seatNumber}>{seatNumber}</Text>
          </View>
          <View style={styles.seatDetails}>
            <Text style={styles.seatType}>Economy</Text>
            <Text style={styles.seatText}>Seat</Text>
          </View>
        </View>

        <View style={styles.statusContainer}>
          <Feather name="check-circle" size={20} color={colors.success} />
          <Text style={styles.statusText}>This seat is available for selection</Text>
        </View>

        <Text style={styles.assignText}>Who'd you like to assign this seat to?</Text>

        <Button
          title={`Assign to ${passengerName}`}
          onPress={onAssign}
          style={styles.button}
        />
      </View>
    </View>
  </Modal>
);

export const ConfirmSeatModal = ({ isVisible, onClose, seatNumber, passengerName, onKeepSeat, onUnassign }: 
  SeatModalProps & { onKeepSeat: () => void; onUnassign: () => void }) => (
  <Modal transparent visible={isVisible} animationType="slide">
    <View style={styles.modalOverlay}>
      <View style={styles.modalContent}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Feather name="x" size={24} color={colors.text} />
        </TouchableOpacity>

        <View style={styles.seatInfo}>
          <View style={styles.seatLabel}>
            <Text style={styles.seatNumber}>{seatNumber}</Text>
          </View>
          <View style={styles.seatDetails}>
            <Text style={styles.seatType}>Economy</Text>
            <Text style={styles.seatText}>Seat</Text>
          </View>
        </View>

        <View style={styles.statusContainer}>
          <Feather name="check-circle" size={20} color={colors.success} />
          <Text style={styles.statusText}>This seat is currently assigned to {passengerName}</Text>
        </View>

        <Text style={styles.assignText}>Would you like to keep this seat?</Text>

        <Button
          title="Yes, keep this seat"
          onPress={onKeepSeat}
          style={styles.button}
        />
        <TouchableOpacity onPress={onUnassign} style={styles.unassignButton}>
          <Text style={styles.unassignText}>Unassign seat</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

export const UnassignConfirmModal = ({ isVisible, onClose, onConfirmUnassign, onKeepSeat }: {
  isVisible: boolean;
  onClose: () => void;
  onConfirmUnassign: () => void;
  onKeepSeat: () => void;
}) => (
  <Modal transparent visible={isVisible} animationType="slide">
    <View style={styles.modalOverlay}>
      <View style={styles.modalContent}>
        <View style={styles.warningIcon}>
          <Feather name="alert-triangle" size={24} color={colors.warning} />
        </View>
        
        <Text style={styles.warningTitle}>Unassign This Seat?</Text>
        <Text style={styles.warningText}>
          If you unassign this seat, it might not be available anymore
        </Text>

        <Button
          title="Unassign seat"
          onPress={onConfirmUnassign}
          style={[styles.button, styles.unassignButton]}
          textStyle={styles.unassignButtonText}
        />
        <Button
          title="No, keep my seat"
          onPress={onKeepSeat}
          style={styles.button}
        />
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
  },
  closeButton: {
    position: 'absolute',
    right: 24,
    top: 24,
    zIndex: 1,
  },
  seatInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  seatLabel: {
    width: 48,
    height: 48,
    backgroundColor: colors.success + '20',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  seatNumber: {
    fontSize: 16,
    fontFamily: typography.semiBold,
    color: colors.success,
  },
  seatDetails: {
    flex: 1,
  },
  seatType: {
    fontSize: 16,
    fontFamily: typography.semiBold,
    color: colors.text,
  },
  seatText: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textLight,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  statusText: {
    marginLeft: 8,
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.text,
  },
  assignText: {
    fontSize: 24,
    fontFamily: typography.semiBold,
    color: colors.text,
    marginBottom: 24,
  },
  button: {
    marginBottom: 12,
  },
  unassignButton: {
    backgroundColor: 'transparent',
  },
  unassignText: {
    color: colors.error,
    fontSize: 16,
    fontFamily: typography.medium,
    textAlign: 'center',
    padding: 12,
  },
  unassignButtonText: {
    color: colors.error,
  },
  warningIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.warning + '20',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    alignSelf: 'center',
  },
  warningTitle: {
    fontSize: 20,
    fontFamily: typography.semiBold,
    color: colors.text,
    textAlign: 'center',
    marginBottom: 8,
  },
  warningText: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textLight,
    textAlign: 'center',
    marginBottom: 24,
  },
}); 