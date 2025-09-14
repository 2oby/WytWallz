![WytWallz Banner](assets/images/wytwallz-banner.png)

# 🎨 WytWallz

> Transform vacant walls into canvases - Where artists meet empty spaces

A revolutionary fully decentralized app that connects artists to empty wall spaces. Adopting a host model along the lines of Airbnb, we transform vacant walls into canvases, giving artists the platform to showcase their talent and hosts an opportunity to monetize free wall space.

**Your wall, their masterpiece.**

## 🚀 Features

- **Decentralized Platform** - Built on blockchain for transparent and secure transactions
- **Artist Portfolio** - Showcase previous work and build reputation
- **Wall Host Marketplace** - List your available wall spaces with photos and dimensions
- **Smart Contract Integration** - Automated payments and agreements
- **React Native App** - Cross-platform mobile experience for iOS and Android

## 📱 Tech Stack

- **Frontend:** React Native
- **Blockchain:** Ethereum Smart Contracts (Solidity)
- **Web3 Integration:** ethers.js
- **Testing:** Jest
- **Navigation:** React Navigation

## 🏗️ Project Structure

```
WytWallz/
│
├── android/                      # Android app specific files
├── ios/                          # iOS app specific files
│
├── src/
│   ├── components/               # Reusable UI components
│   ├── screens/                  # Screen components (Home, Profile, etc.)
│   ├── lib/                      # Libraries and utilities
│   ├── navigation/               # Navigation setup
│   ├── context/                  # Context API for state management
│   ├── assets/                   # Static files (images, fonts)
│   └── services/                 # API service functions
│
├── blockchain/                   # Blockchain-related scripts
│   ├── contracts/                # Smart contract files (Solidity)
│   └── scripts/                  # Deployment and interaction scripts
│
├── __tests__/                    # Unit and integration tests
│
├── package.json                  # NPM dependencies and scripts
├── app.json                      # React Native configuration
└── README.md                     # Project documentation
```

## 🛠️ Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- React Native development environment
- iOS: Xcode (for Mac users)
- Android: Android Studio

### Setup

1. Clone the repository:
```bash
git clone https://github.com/2oby/WytWallz.git
cd WytWallz
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Install iOS dependencies (Mac only):
```bash
cd ios && pod install
cd ..
```

4. Start the Metro bundler:
```bash
npm start
# or
yarn start
```

5. Run the app:
```bash
# iOS
npm run ios
# or
yarn ios

# Android
npm run android
# or
yarn android
```

## 🔗 Smart Contract Deployment

1. Configure your blockchain network in `blockchain/scripts/`
2. Deploy contracts:
```bash
cd blockchain
npm run deploy
```

## 🧪 Testing

Run the test suite:
```bash
npm test
# or
yarn test
```

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines for more details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

Project Link: [https://github.com/2oby/WytWallz](https://github.com/2oby/WytWallz)

## 🙏 Acknowledgments

- React Native community
- Ethereum development community
- All contributing artists and wall hosts



