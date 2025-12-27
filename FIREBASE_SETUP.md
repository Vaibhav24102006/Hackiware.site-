# Firebase Setup Instructions

## Step 1: Create .env File

Create a `.env` file in the project root (same level as `package.json`) with the following content:

```env
REACT_APP_FIREBASE_API_KEY=AIzaSyBnksVF539ku2OPgvcB_wGjBRH-LKWGrz0
REACT_APP_FIREBASE_AUTH_DOMAIN=hackiware-c70c8.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=hackiware-c70c8
REACT_APP_FIREBASE_STORAGE_BUCKET=hackiware-c70c8.firebasestorage.app
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=613705910314
REACT_APP_FIREBASE_APP_ID=1:613705910314:web:db2969ff7b96a433129b53
```

## Step 2: Restart Dev Server

**IMPORTANT:** After creating/updating `.env`, you MUST restart your development server:

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm start
```

CRA only reads environment variables on startup, so changes won't take effect until restart.

## Step 3: Verify Setup

The Firebase app will automatically initialize when imported. To test:

1. Open browser console
2. Import and call the test function:

```typescript
import { testFirestoreConnection } from './firebase/test';
testFirestoreConnection();
```

## Security Note

The `.env` file is already in `.gitignore` and will NOT be committed to git. This is correct and safe.

## Next Steps

Once Firestore is verified working:
- Set up Firestore Security Rules in Firebase Console
- Integrate Firebase Auth (next phase)
- Connect UI components to Firestore data

