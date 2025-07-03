import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../theme/colors';

const coins = [
  {
    name: 'GZP',
    desc: 'Godz Point',
    value: '9999.00',
  },
  {
    name: 'STAR',
    desc: 'Star Point',
    value: '99.00',
  },
  {
    name: 'PKP',
    desc: 'Punkkub Point',
    value: '0.00',
  },
  {
    name: 'BTD',
    desc: 'Bittoon Dao Point',
    value: '9999.00',
  },
];

export default function WalletScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>My Community Point</Text>
        <View style={styles.divider} />
        {coins.map((coin, idx) => (
          <View key={coin.name} style={[styles.coinRow, idx !== coins.length - 1 && { marginBottom: 12 }]}> 
            <View style={styles.iconWrap}>
              <View style={styles.coinIcon}><Text style={styles.coinIconText}>{coin.name[0]}</Text></View>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.coinName}>{coin.name}</Text>
              <Text style={styles.coinDesc}>{coin.desc}</Text>
            </View>
            <Text style={styles.coinValue}>{coin.value}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.card, alignItems: 'center', justifyContent: 'center' },
  card: { backgroundColor: COLORS.background, borderRadius: 18, padding: 18, width: '92%', shadowColor: '#000', shadowOpacity: 0.12, shadowRadius: 8, elevation: 4 },
  title: { fontSize: 20, fontWeight: 'bold', color: COLORS.card, alignSelf: 'center', marginBottom: 8 },
  divider: { height: 2, backgroundColor: COLORS.gold, marginBottom: 12, width: '100%', borderRadius: 2 },
  coinRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 12, padding: 10, shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 4, elevation: 2 },
  iconWrap: { marginRight: 12 },
  coinIcon: { width: 44, height: 44, borderRadius: 22, backgroundColor: COLORS.primary, alignItems: 'center', justifyContent: 'center' },
  coinIconText: { color: COLORS.background, fontWeight: 'bold', fontSize: 22 },
  coinName: { fontWeight: 'bold', fontSize: 16, color: COLORS.card },
  coinDesc: { color: COLORS.card, fontSize: 12 },
  coinValue: { fontWeight: 'bold', fontSize: 16, color: COLORS.card },
}); 