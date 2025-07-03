# GODZ COMMUNITY Dapp

A decentralized application (Dapp) built with React Native (Expo) for the GODZ COMMUNITY platform. This mobile application provides Web3 wallet integration, user authentication, and community features.

## 🚀 Features

- **Web3 Wallet Integration**: Connect with MetaMask and other Web3 wallets
- **User Authentication**: Secure login with Gmail OAuth
- **Community Features**: User profiles, points system, and community interactions
- **Cross-platform**: Works on both Android and iOS
- **Modern UI/UX**: Beautiful interface with custom design system
- **Real-time Data**: Powered by Supabase backend

## 📱 Screenshots

- Home Screen with user cards and community features
- Wallet integration with Web3 support
- QR code scanning functionality
- Shopping cart system
- User profile management

## 🛠 Tech Stack

- **Frontend**: React Native (Expo)
- **Language**: TypeScript
- **Navigation**: React Navigation v6
- **Backend**: Supabase
- **Authentication**: Expo Auth Session (Gmail OAuth)
- **Icons**: Expo Vector Icons
- **State Management**: React Hooks

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Expo CLI**: `npm install -g @expo/cli`
- **Expo Go** app on your mobile device (for testing)
- **Git**

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd godz-community
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Required Packages

```bash
npm install @react-navigation/native @react-navigation/bottom-tabs
npm install react-native-screens react-native-safe-area-context
npm install expo-auth-session expo-crypto expo-web-browser
npm install @supabase/supabase-js
npm install expo-constants
```

### 4. Environment Setup

Create a `.env` file in the root directory:

```env
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
EXPO_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id
```

### 5. Supabase Configuration

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Get your project URL and anon key
3. Set up authentication providers (Google OAuth)
4. Create necessary database tables

### 6. Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add your app's bundle identifier to authorized redirect URIs

## 🏃‍♂️ Running the Application

### Development Mode

```bash
# Start the development server
npx expo start

# Or use npm
npm start
```

### Testing on Device

1. Install **Expo Go** app on your mobile device
2. Scan the QR code displayed in the terminal
3. The app will load on your device

### Building for Production

```bash
# Build for Android
npx expo build:android

# Build for iOS
npx expo build:ios
```

## 📁 Project Structure

```
godz-community/
├── src/
│   ├── assets/           # Images, icons, and static files
│   ├── navigation/       # Navigation components
│   │   └── BottomTabNavigator.tsx
│   ├── screens/          # Screen components
│   │   ├── HomeScreen.tsx
│   │   ├── WalletScreen.tsx
│   │   ├── QRScreen.tsx
│   │   ├── CartScreen.tsx
│   │   └── ProfileScreen.tsx
│   ├── services/         # API and external services
│   │   └── supabase.ts
│   └── theme/           # Design system and colors
│       └── colors.ts
├── App.tsx              # Main app component
├── app.json            # Expo configuration
├── package.json        # Dependencies
└── tsconfig.json       # TypeScript configuration
```

## 🎨 Design System

### Colors

The app uses a consistent color palette defined in `src/theme/colors.ts`:

- **Primary**: Orange (#FF6B35)
- **Secondary**: Gray (#6C757D)
- **Background**: White (#FFFFFF)
- **Card**: Light Gray (#F8F9FA)
- **Text**: Dark Gray (#212529)

### Components

- **NaviBar**: Fixed top navigation bar with Web3 wallet button
- **Bottom Tab Navigator**: 5-tab navigation (Home, Wallet, QR, Cart, Profile)
- **Cards**: User information and community features
- **Buttons**: Consistent styling with rounded corners

## 🔐 Authentication Flow

1. User taps "Connect Wallet" button
2. Google OAuth authentication screen appears
3. User signs in with Gmail account
4. Authentication token is stored securely
5. User profile is created/updated in Supabase
6. App navigates to main interface

## 💰 Web3 Integration

### Wallet Connection

The app supports Web3 wallet connections through:

- **MetaMask**: Most popular Ethereum wallet
- **WalletConnect**: Multi-wallet support
- **Custom Web3 Provider**: For other wallet types

### Features

- Wallet address display
- Balance checking
- Transaction signing
- Network switching

## 📊 Database Schema

### Users Table

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  wallet_address TEXT,
  points INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Transactions Table

```sql
CREATE TABLE transactions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  type TEXT NOT NULL,
  amount INTEGER NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## 🧪 Testing

### Unit Tests

```bash
npm test
```

### E2E Tests

```bash
npm run test:e2e
```

## 🚀 Deployment

### Expo Application Services (EAS)

1. Install EAS CLI:
```bash
npm install -g @expo/eas-cli
```

2. Login to Expo:
```bash
eas login
```

3. Configure EAS:
```bash
eas build:configure
```

4. Build for production:
```bash
eas build --platform android
eas build --platform ios
```

### App Store Deployment

1. Build production version
2. Submit to App Store Connect (iOS)
3. Submit to Google Play Console (Android)

## 🔧 Configuration

### Expo Configuration (app.json)

```json
{
  "expo": {
    "name": "GODZ COMMUNITY",
    "slug": "godz-community",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./src/assets/icon.png",
    "splash": {
      "image": "./src/assets/splash-icon.png",
      "resizeMode": "contain",
      "backgroundColor": "#FF6B35"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.godzcommunity.app"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./src/assets/adaptive-icon.png",
        "backgroundColor": "#FF6B35"
      },
      "package": "com.godzcommunity.app"
    },
    "web": {
      "favicon": "./src/assets/favicon.png"
    }
  }
}
```

## 🐛 Troubleshooting

### Common Issues

1. **Metro bundler issues**:
   ```bash
   npx expo start --clear
   ```

2. **Dependencies conflicts**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Expo Go connection issues**:
   - Ensure device and computer are on same network
   - Try using tunnel mode: `npx expo start --tunnel`

4. **Authentication errors**:
   - Check Google OAuth configuration
   - Verify Supabase credentials
   - Ensure redirect URIs are correct

### Debug Mode

Enable debug logging:

```typescript
// In App.tsx
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning:']); // Ignore specific warnings
```

## 📈 Performance Optimization

- Use React.memo for expensive components
- Implement lazy loading for images
- Optimize bundle size with tree shaking
- Use FlatList for large lists
- Implement proper error boundaries

## 🔒 Security Considerations

- Store sensitive data in secure storage
- Implement proper input validation
- Use HTTPS for all API calls
- Regular dependency updates
- Implement rate limiting
- Secure authentication flow

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:

- **Email**: support@godzcommunity.com
- **Discord**: [GODZ Community Discord](https://discord.gg/godzcommunity)
- **Documentation**: [docs.godzcommunity.com](https://docs.godzcommunity.com)

## 🗺 Roadmap

- [ ] Multi-chain wallet support
- [ ] NFT marketplace integration
- [ ] DeFi features
- [ ] Social features
- [ ] Push notifications
- [ ] Offline mode
- [ ] Dark theme
- [ ] Internationalization

## 📊 Analytics

The app includes analytics tracking for:

- User engagement
- Feature usage
- Performance metrics
- Error tracking
- User behavior

## 🔄 Version History

- **v1.0.0**: Initial release with basic features
- **v1.1.0**: Added Web3 wallet integration
- **v1.2.0**: Enhanced UI/UX and performance improvements

---

**Made with ❤️ by the GODZ Community Team** 0