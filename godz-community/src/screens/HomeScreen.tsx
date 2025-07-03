import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS } from '../theme/colors';
import { Ionicons, MaterialCommunityIcons, FontAwesome5, Entypo } from '@expo/vector-icons';

const CARD_RADIUS = 18;


export default function HomeScreen() {
  return (
    <View style={styles.container}>

      {/* Main Card (User + Point) */}
      <View style={styles.mainCard}>
        {/* User Info */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
          {/* Mock avatar (เปลี่ยนเป็น <Image ... /> ได้) */}
          <View style={styles.avatar}><FontAwesome5 name="user-circle" size={54} color={COLORS.card} /></View>
          <View style={{ marginLeft: 12 }}>
            <Text style={styles.userName}>Tanabut Krinoonsingha</Text>
            <Text style={styles.userId}>GZP-23090001</Text>
            <View style={styles.goldBadge}><Text style={styles.goldBadgeText}>Gold</Text></View>
          </View>
        </View>
        {/* Point Section (แถบส้ม) */}
        <View style={styles.pointSection}>
          <Text style={styles.pointValue}>9999.00 GZP</Text>
          <Text style={styles.pointLabel}>GODZ Points</Text>
          <View style={styles.whiteDivider} />
          <TouchableOpacity style={styles.myPointBtn}><Text style={styles.myPointBtnText}>My Point</Text></TouchableOpacity>
        </View>
      </View>
      {/* Menu Icons (วงกลม) */}
      <View style={styles.menuBox}>
        <View style={styles.menuRow}>
          <MenuIcon icon={<Ionicons name="swap-horizontal" size={28} color={COLORS.background} />} label="Convert" />
          <MenuIcon icon={<Ionicons name="gift" size={28} color={COLORS.background} />} label="Rewards" />
          <MenuIcon icon={<Entypo name="price-tag" size={28} color={COLORS.background} />} label="Deals" />
          <MenuIcon icon={<MaterialCommunityIcons name="ticket-percent" size={28} color={COLORS.background} />} label="My Coupon" />
        </View>
        <View style={styles.menuRow}>
          <MenuIcon icon={<Ionicons name="game-controller" size={28} color={COLORS.background} />} label="Game" />
          <MenuIcon icon={<MaterialCommunityIcons name="newspaper" size={28} color={COLORS.background} />} label="News" />
          <MenuIcon icon={<Ionicons name="people" size={28} color={COLORS.background} />} label="Community" />
          <MenuIcon icon={<Ionicons name="chatbubble-ellipses" size={28} color={COLORS.background} />} label="Support" />
        </View>
      </View>
      {/* Banner/Ads */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.bannerRow}>
        <View style={styles.bannerCard}>
          <MaterialCommunityIcons name="bitcoin" size={32} color={COLORS.primary} />
          <Text style={styles.bannerTitle}>Crypto News</Text>
          <Text style={styles.bannerDesc}>BTC พุ่งแรง! นักลงทุนแห่ซื้อ</Text>
        </View>
        <View style={styles.bannerCard}>
          <MaterialCommunityIcons name="currency-eth" size={32} color={COLORS.primary} />
          <Text style={styles.bannerTitle}>ETH Update</Text>
          <Text style={styles.bannerDesc}>Ethereum 2.0 กำลังมาแรง</Text>
        </View>
      </ScrollView>
    </View>
  );
}

function MenuIcon({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <View style={styles.menuIconCircle}>
      <View style={styles.menuCircle}>{icon}</View>
      <Text style={styles.menuLabel} numberOfLines={1} ellipsizeMode="tail">{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.card, paddingTop: 40 },
  headerRow: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 18, marginBottom: 8 },
  headerText: { color: COLORS.background, fontSize: 22, fontWeight: 'bold', textAlign: 'center', flex: 1 },
  bell: { marginLeft: 8 },
  mainCard: { backgroundColor: COLORS.background, borderRadius: CARD_RADIUS, marginHorizontal: 18, padding: 0, marginBottom: 10, overflow: 'hidden', elevation: 2 },
  avatar: { width: 54, height: 54, borderRadius: 27, backgroundColor: COLORS.secondary, alignItems: 'center', justifyContent: 'center', margin: 18, marginBottom: 0 },
  userName: { fontWeight: 'bold', fontSize: 16, color: COLORS.text },
  userId: { color: COLORS.primary, fontSize: 13 },
  goldBadge: { backgroundColor: COLORS.gold, borderRadius: 8, paddingHorizontal: 8, paddingVertical: 2, alignSelf: 'flex-start', marginTop: 4 },
  goldBadgeText: { color: COLORS.background, fontWeight: 'bold', fontSize: 12 },
  pointSection: { backgroundColor: COLORS.primary, borderRadius: 0, borderBottomLeftRadius: CARD_RADIUS, borderBottomRightRadius: CARD_RADIUS, alignItems: 'center', paddingVertical: 16, paddingHorizontal: 18 },
  pointValue: { color: COLORS.background, fontSize: 28, fontWeight: 'bold' },
  pointLabel: { color: COLORS.background, fontSize: 14, marginBottom: 8 },
  whiteDivider: { height: 1, backgroundColor: COLORS.background, width: '90%', marginVertical: 8, borderRadius: 1 },
  myPointBtn: { backgroundColor: COLORS.primary, borderRadius: 8, paddingHorizontal: 24, paddingVertical: 6, alignSelf: 'center', borderWidth: 1, borderColor: COLORS.background },
  myPointBtnText: { color: COLORS.background, fontWeight: 'bold', fontSize: 15 },
  menuBox: { backgroundColor: COLORS.card, borderRadius: 16, marginHorizontal: 12, paddingVertical: 12, marginBottom: 10, elevation: 2 },
  menuRow: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 4 },
  menuIconCircle: { alignItems: 'center', width: 80, marginVertical: 4 },
  menuCircle: { backgroundColor: COLORS.primary, borderRadius: 40, width: 56, height: 56, alignItems: 'center', justifyContent: 'center', marginBottom: 4, elevation: 2 },
  menuLabel: { color: COLORS.background, fontSize: 11, marginTop: 4, fontWeight: 'normal', width: 70, textAlign: 'center' },
  bannerRow: { marginTop: 10, marginHorizontal: 10 },
  bannerCard: { backgroundColor: COLORS.background, borderRadius: 12, width: 180, height: 80, marginRight: 12, alignItems: 'center', justifyContent: 'center', padding: 10 },
  bannerTitle: { color: COLORS.primary, fontWeight: 'bold', fontSize: 16, marginTop: 4 },
  bannerDesc: { color: COLORS.card, fontSize: 13, marginTop: 2, textAlign: 'center' },
}); 