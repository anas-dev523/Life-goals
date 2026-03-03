import React from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';

const STATUS_STYLES = {
  'En cours': { bg: '#EBF4FF', color: '#2563EB' },
  'Terminé':  { bg: '#ECFDF5', color: '#059669' },
  'Abandonné':{ bg: '#FEF2F2', color: '#DC2626' },
};

export default function GoalItem({ value, status, onDelete, onStatusChange }) {
  const alerthandler = () => {
    Alert.alert(
      'Supprimer',
      "tu veux vraiment supprimer ?",
      [
        { text: 'Annuler', style: 'cancel' },
        { text: 'Supprimer', style: 'destructive', onPress: onDelete },
      ]
    );
  };

  const badge = STATUS_STYLES[status] || { bg: '#f3e8ff', color: '#8237d8' };

  return (
    <View style={styles.item}>
      <Text style={styles.value} numberOfLines={2}>{value}</Text>
      <TouchableOpacity
        onPress={onStatusChange}
        style={[styles.statusBadge, { backgroundColor: badge.bg }]}
      >
        <Text style={[styles.statusText, { color: badge.color }]}>{status}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton} onPress={alerthandler}>
        <Text style={styles.deleteText}>✕</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginVertical: 5,
    marginHorizontal: 16,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#6C3FCF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 8,
    elevation: 3,
  },
  value: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1a1a2e',
    flex: 1,
    marginRight: 8,
  },
  statusBadge: {
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 8,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '700',
  },
  deleteButton: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: '#FEF2F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteText: {
    color: '#DC2626',
    fontSize: 13,
    fontWeight: '700',
  },
});
