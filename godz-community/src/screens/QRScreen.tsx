import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../theme/colors';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';



export default function QRScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.card}>
        <MaterialCommunityIcons name="qrcode-scan" size={120} color={COLORS.primary} style={{ marginBottom: 16 }} />
        <Text style={styles.title}>Scan QR Code</Text>
        <TouchableOpacity style={styles.scanBtn}>
          <Text style={styles.scanBtnText}>Start Scan</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.desc}>ใช้สำหรับสแกน QR Code เพื่อรับสิทธิ์หรือแต้ม</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.card, alignItems: 'center', justifyContent: 'center' },
  headerRow: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 18, marginBottom: 8 },
  headerText: { color: COLORS.background, fontSize: 22, fontWeight: 'bold', textAlign: 'center', flex: 1 },
  bell: { marginLeft: 8 },
  card: { backgroundColor: COLORS.background, borderRadius: 18, padding: 32, alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.12, shadowRadius: 8, elevation: 4 },
  title: { fontSize: 22, fontWeight: 'bold', color: COLORS.primary, marginBottom: 18 },
  scanBtn: { backgroundColor: COLORS.primary, borderRadius: 20, paddingHorizontal: 32, paddingVertical: 12, marginTop: 12 },
  scanBtnText: { color: COLORS.background, fontWeight: 'bold', fontSize: 18 },
  desc: { color: COLORS.background, fontSize: 15, marginTop: 32, textAlign: 'center' },
}); 