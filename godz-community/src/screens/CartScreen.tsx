import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../theme/colors';
import { Ionicons } from '@expo/vector-icons';



export default function CartScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.card}>
        <Text style={styles.title}>ตะกร้าสินค้า</Text>
        <Text style={styles.empty}>ยังไม่มีสินค้าในตะกร้า</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>ไปหน้า Rewards</Text>
        </TouchableOpacity>
      </View>
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
  empty: { color: COLORS.card, fontSize: 16, marginBottom: 18 },
  btn: { backgroundColor: COLORS.primary, borderRadius: 20, paddingHorizontal: 32, paddingVertical: 12 },
  btnText: { color: COLORS.background, fontWeight: 'bold', fontSize: 18 },
}); 