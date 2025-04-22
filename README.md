

A modern React Native mobile application for e-commerce shopping with a clean UI and smooth user experience.

## Screenshots
<div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center">
  <img src="https://github.com/user-attachments/assets/c9bb7dbb-98c2-44d8-9acd-02d59f0423a0" alt="Home Screen" width="150" />
  <img src="https://github.com/user-attachments/assets/ab4285c6-b4ae-48da-97d8-13d919f3eb57" alt="Product List" width="150" />
  <img src="https://github.com/user-attachments/assets/38871054-3b96-437b-a140-c148027d1954" alt="Product Detail" width="150" />
  <img src="https://github.com/user-attachments/assets/d38900ab-0ab6-4e9c-9ac3-1d5fa7805839" alt="Shopping Cart" width="150" />
  <img src="https://github.com/user-attachments/assets/458f3d68-b51e-4753-9082-c54ed67a6891" alt="Checkout" width="150" />
  <img src="https://github.com/user-attachments/assets/8a0db21b-a905-4a82-b10e-83b802c48c75" alt="Checkout" width="150" />
  <img src="https://github.com/user-attachments/assets/774dd99c-efef-45c9-8377-096ae3a6e53c" alt="Checkout" width="150" />
</div>



## 📱 Features

- **Browse Products**: Navigate through product categories and listings
- **Search**: Find products by name, category, or description
- **Product Details**: View comprehensive product information 
- **Shopping Cart**: Add, update, and remove items from your cart
- **Checkout Process**: Complete purchase with order summary and confirmation
- **State Persistence**: Cart state persists even after app restart

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                       E-Commerce App                             │
└───────────────────────────────┬─────────────────────────────────┘
                                │
            ┌─────────────────────────────────────────┐
            │         React Native Application         │
            └─────────────────────┬───────────────────┘
                                  │
┌─────────────────────┬──────────┴───────────┬───────────────────┐
│                     │                      │                   │
▼                     ▼                      ▼                   ▼
┌─────────────┐ ┌──────────────┐  ┌───────────────┐  ┌───────────────┐
│  Navigation │ │  Components  │  │ State (Redux) │  │ Data Services │
└──────┬──────┘ └──────┬───────┘  └───────┬───────┘  └───────┬───────┘
       │               │                  │                  │
       ▼               ▼                  ▼                  ▼
┌──────────────┐ ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│ Stack & Tab  │ │ Atomic Design│  │ Redux Toolkit│  │  Mock Data   │
│ Navigators   │ │ Pattern      │  │ Redux Persist│  │  (API Ready) │
└──────────────┘ └──────────────┘  └──────────────┘  └──────────────┘
```

## 🧩 Technical Stack

### Core Technologies
- **React Native** (v0.79.1): Framework for building native mobile apps
- **TypeScript**: Type-safe JavaScript
- **Redux Toolkit**: State management with a more streamlined approach
- **Redux Persist**: Persistence layer for preserving app state across sessions

### Navigation
- **React Navigation v7**: Handles routing and navigation between screens
  - Bottom Tab Navigator for main app sections
  - Stack Navigator for screen transitions

### UI Organization
- **Atomic Design Pattern**: Components organized as:
  - **Atoms**: Basic building blocks (buttons, inputs, text)
  - **Molecules**: Simple component combinations
  - **Organisms**: Complex UI sections
  - **Templates**: Page layouts
  - **Pages**: Complete screens with business logic

### Data Management
- **Redux Store**: Centralized state management
  - Cart slice for shopping cart functionality
  - AsyncStorage for local persistence

## 📁 Project Structure

```
ecom-app/
├── android/                 # Android native code
├── ios/                     # iOS native code
├── src/                     # Main source code
│   ├── assets/              # Images, fonts, and other static resources
│   ├── components/          # UI components following Atomic Design
│   │   ├── atoms/           # Basic UI elements
│   │   ├── molecules/       # Simple compositions of atoms
│   │   ├── organisms/       # Complex UI sections
│   │   ├── templates/       # Page layouts
│   │   └── pages/           # Complete screens
│   ├── data/                # Data layer
│   │   └── mock/            # Mock data for development
│   └── store/               # Redux state management
│       ├── index.ts         # Store configuration
│       └── slices/          # Redux Toolkit slices
│           └── cartSlice.ts # Cart state management
├── App.tsx                  # Main application component
└── index.js                 # Application entry point
```

## 📋 Application Flow

1. **Home Screen**: Browse featured products and categories
2. **Search Screen**: Find products using search functionality
3. **Product Detail**: View detailed product information
4. **Cart**: Review and manage items in cart
5. **Order Summary**: Review order before checkout
6. **Order Confirmation**: View successful order details

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- Ruby (for iOS development)
- Android Studio (for Android development)
- Xcode (for iOS development)
- CocoaPods (for iOS dependencies)

### Installation

1. Clone the repository
2. Install dependencies:
   ```sh
   npm install
   ```
   
3. For iOS, install CocoaPods dependencies:
   ```sh
   bundle install
   bundle exec pod install
   ```

### Running the App

#### Android
```sh
npm run android
```

#### iOS
```sh
npm run ios
```

## 🧪 Testing

```sh
npm test
```

## 🛠️ Development

### Code Style and Linting
- ESLint for code quality
- Prettier for code formatting

```sh
npm run lint
```

### Future Enhancements

- User authentication system
- Payment gateway integration
- Product reviews and ratings
- Order history
- Wishlist functionality
- Push notifications

## 📦 Dependencies

### Production Dependencies
- React Native v19.0.0
- React Navigation v7
- Redux Toolkit
- Redux Persist
- React Native Vector Icons
- Async Storage

### Development Dependencies
- TypeScript
- Jest for testing
- ESLint for linting
- Prettier for code formatting
