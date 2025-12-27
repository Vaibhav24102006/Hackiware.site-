# Firebase Firestore Integration

## Setup

1. Copy `.env.example` to `.env` in the project root
2. Fill in your Firebase project credentials from the Firebase Console
3. The app will automatically initialize Firebase on startup

## Structure

```
src/firebase/
├── firebase.ts      # Firebase app initialization
├── firestore.ts     # Core Firestore utilities
├── types.ts         # TypeScript interfaces for all collections
├── services/        # Typed service functions
│   ├── users.ts
│   ├── events.ts
│   └── posts.ts
├── test.ts         # Temporary test functions
└── index.ts         # Main exports
```

## Collections

### users
- `uid`: Firebase Auth UID
- `name`: User display name
- `email`: User email
- `role`: "member" | "admin"
- `joinedAt`: Timestamp

### events
- `title`: Event title
- `description`: Event description
- `date`: Event date (Timestamp)
- `status`: "upcoming" | "completed"
- `createdAt`: Timestamp

### posts
- `title`: Post title
- `content`: Post content
- `type`: "blog" | "achievement"
- `authorId`: User ID reference
- `publishedAt`: Publication timestamp

## Usage

```typescript
import { getAllEvents, getPublishedPosts, getUserById } from './firebase';

// Fetch events
const events = await getAllEvents();

// Fetch posts
const posts = await getPublishedPosts('blog');

// Fetch user
const user = await getUserById('userId');
```

## Testing

Import and call `testFirestoreConnection()` from `./test` to verify connectivity.

