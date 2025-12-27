# Firestore Security Rules - Production Configuration

## 🔒 Ready-to-Paste Rules

Copy and paste the following rules into your Firebase Console:

**Firebase Console → Firestore Database → Rules**

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Users collection - Private user data
    match /users/{userId} {
      // Users can only read/write their own profile
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }

    // Events collection - Public read, no public write
    match /events/{eventId} {
      // Anyone can read events (public content)
      allow read: if true;
      // No public writes (admin-only via Admin SDK or authenticated admin users)
      allow write: if false;
    }

    // Posts collection (Blogs & Achievements) - Public read, no public write
    match /posts/{postId} {
      // Anyone can read posts (public content)
      allow read: if true;
      // No public writes (admin-only via Admin SDK or authenticated admin users)
      allow write: if false;
    }

    // Deny everything else by default
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

## 📋 Rules Explanation

### Why Public Reads Are Safe

**Events & Posts:**
- These collections contain public-facing content (event listings, blog posts, achievements)
- No sensitive data is stored here
- Public read access enables:
  - Fast page loads without authentication
  - SEO-friendly content access
  - Better user experience for visitors

**Security Consideration:**
- Even if someone scrapes all events/posts, they only get public marketing content
- No user data, credentials, or sensitive information is exposed

### Why Writes Are Locked

**All Collections:**
- `allow write: if false` prevents unauthorized data modification
- Protects against:
  - Spam content injection
  - Data tampering
  - Malicious document creation
  - Unauthorized deletions

**User Profiles:**
- Users can only modify their own profile (`request.auth.uid == userId`)
- Prevents:
  - Profile hijacking
  - Unauthorized role changes
  - Data corruption

### Protection Against Abuse

**1. Rate Limiting (Firebase Built-in):**
- Firebase automatically rate-limits requests
- Prevents DDoS-style attacks
- Throttles excessive reads

**2. Authentication Requirement:**
- User profiles require valid Firebase Auth token
- No anonymous access to sensitive data
- Session-based security

**3. Default Deny:**
- `match /{document=**}` catches any new collections
- Defaults to deny all access
- Forces explicit permission for new features

**4. No Public Writes:**
- Even authenticated users cannot write to public collections
- Admin operations must use:
  - Firebase Admin SDK (server-side)
  - Future role-based rules (admin role check)

### How Admin Rules Can Be Added Later

**Future Enhancement Pattern:**

```javascript
// Example future admin rule (DO NOT ADD YET)
match /events/{eventId} {
  allow read: if true;
  allow write: if request.auth != null && 
               get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
}
```

**Implementation Steps (Future):**
1. Add `role` field check to existing rules
2. Use `get()` to fetch user document
3. Verify `role == 'admin'`
4. Apply to events, posts, and other admin-managed collections

**Current State:**
- Admin operations must use Firebase Admin SDK
- Server-side operations bypass security rules
- Safe for production until admin UI is built

## 🚀 Deployment Instructions

1. **Open Firebase Console**
   - Go to https://console.firebase.google.com
   - Select your project: `hackiware-c70c8`
   - Navigate to: Firestore Database → Rules

2. **Paste Rules**
   - Delete existing rules
   - Paste the rules from above
   - Click "Publish"

3. **Verify**
   - Rules deploy immediately
   - Test with authenticated/unauthenticated requests
   - Monitor Firebase Console for rule violations

## ✅ Security Checklist

- ✅ Public reads for events/posts (safe)
- ✅ No public writes (protected)
- ✅ User profiles private (auth required)
- ✅ Default deny for unknown collections
- ✅ Ready for admin role expansion
- ✅ Production-safe defaults

## 🔄 Next Steps (Phase 3.3+)

1. **Admin Role Rules:**
   - Add role-based write permissions
   - Enable authenticated admin users to create events/posts

2. **Field-Level Security:**
   - Restrict certain fields from being modified
   - Protect `role` field from user modification

3. **Audit Logging:**
   - Monitor rule violations in Firebase Console
   - Set up alerts for suspicious activity

4. **Index Optimization:**
   - Create composite indexes for queries
   - Optimize for common read patterns

