import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../../godz-community/src/screens/HomeScreen';
import WalletScreen from '../../../godz-community/src/screens/WalletScreen';
import QRScreen from '../../../godz-community/src/screens/QRScreen';
import CartScreen from '../../../godz-community/src/screens/CartScreen';
import ProfileScreen from '../../../godz-community/src/screens/ProfileScreen';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { COLORS } from '../theme/colors';
import { View, Text, TouchableOpacity, StyleSheet, Platform, StatusBar } from 'react-native';

const Tab = createBottomTabNavigator();

const TAB_BAR_HEIGHT = 64 * 1.3; // เพิ่มขนาดขึ้น 30%
const ICON_SIZE = 24 * 1.3; // เพิ่มขนาดไอคอนขึ้น 30%
const ICON_HL_SIZE = ICON_SIZE + 18;

function NaviBar() {
  return (
    <View style={styles.naviBar}>
      <TouchableOpacity style={styles.connectBtn}>
        <MaterialCommunityIcons name="wallet" size={20} color={COLORS.background} />
        <Text style={styles.connectBtnText}>Web3</Text>
      </TouchableOpacity>
      <Text style={styles.naviTitle}>GODZ COMMUNITY</Text>
      <Ionicons name="notifications" size={28} color={COLORS.primary} style={styles.bell} />
    </View>
  );
}

function TabBarIcon({ name, type, focused }: { name: string; type: string; focused: boolean }) {
  let IconComponent;
  if (type === 'Ionicons') IconComponent = Ionicons;
  else if (type === 'MaterialCommunityIcons') IconComponent = MaterialCommunityIcons;
  else if (type === 'FontAwesome5') IconComponent = FontAwesome5;
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      {focused ? (
        <View style={{
          backgroundColor: COLORS.primary,
          borderRadius: ICON_HL_SIZE / 2,
          width: ICON_HL_SIZE,
          height: ICON_HL_SIZE,
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 2,
        }}>
          <IconComponent name={name} size={ICON_SIZE} color={COLORS.background} />
        </View>
      ) : (
        <IconComponent name={name} size={ICON_SIZE} color={COLORS.tabIconActive} />
      )}
    </View>
  );
}

export default function BottomTabNavigator() {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.card }}>
      {/* NaviBar ตรึงบนสุด */}
      <View style={{ height: Platform.OS === 'android' ? 56 + (StatusBar.currentHeight || 0) : 56, backgroundColor: COLORS.card, justifyContent: 'flex-end' }}>
        <NaviBar />
      </View>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: COLORS.background,
          tabBarInactiveTintColor: COLORS.tabIconActive,
          tabBarStyle: {
            backgroundColor: COLORS.primary,
            borderTopColor: COLORS.primary,
            height: TAB_BAR_HEIGHT,
          },
          tabBarIcon: ({ focused }) => {
            if (route.name === 'Home') {
              return <TabBarIcon name="home" type="Ionicons" focused={focused} />;
            } else if (route.name === 'Wallet') {
              return <TabBarIcon name="wallet" type="Ionicons" focused={focused} />;
            } else if (route.name === 'QR') {
              return <TabBarIcon name="qrcode-scan" type="MaterialCommunityIcons" focused={focused} />;
            } else if (route.name === 'Cart') {
              return <TabBarIcon name="cart" type="Ionicons" focused={focused} />;
            } else if (route.name === 'Profile') {
              return <TabBarIcon name="user-circle" type="FontAwesome5" focused={focused} />;
            }
          },
          tabBarLabelStyle: {
            fontSize: 15,
            marginBottom: 6,
            color: COLORS.background,
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Wallet" component={WalletScreen} />
        <Tab.Screen name="QR" component={QRScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  naviBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.card,
    paddingHorizontal: 12,
    height: 56,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.secondary,
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) : 0,
  },
  naviTitle: {
    color: COLORS.background,
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    marginLeft: 8,
    marginRight: 8,
  },
  bell: {
    marginLeft: 8,
  },
  connectBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginRight: 8,
  },
  connectBtnText: {
    color: COLORS.background,
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 6,
  },
}); 