<div align="center">
   <div>
      <img src="https://img.shields.io/badge/-Expo-black?style=for-the-badge&logoColor=white&logo=expo&color=000020" alt="expo" />
      <img src="https://img.shields.io/badge/-ReactNative-black?style=for-the-badge&logoColor=white&logo=react&color=3178C6" alt="react-native" />
      <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
      <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="appwrite" />
      <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Run project](#run-project)

## <a name="introduction">🚀 Introduction</a>
A real estate app using React Native with features like: Google Authentication, property listings, profiles, search and filters.

## <a name="tech-stack">⚙️ Tech Stack</a>
   - Expo
   - React Native
   - TypeScript
   - Nativewind
   - Appwrite

## <a name="features">🔗 Features</a>

👉 **Google Authentication**: Sign-ins using Google’s authentication service.

👉 **Home**: Displays the latest and recommended properties with search and filter.

👉 **Property Details**: Provides comprehensive information about individual properties, including images and key details.

👉 **Profile**: Displays user settings and profile.

## <a name="run-project">🕸️ Run Project</a>

**Prerequisites**

Make sure you have installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Clone Repository**

```bash
git clone https://github.com/tranthuyvy/real-estate-app.git
cd react_native-restate
```

**Installation** 

```bash
npm install
```

**Create .env**

Create a new file named `.env.local` in the root of your project and add the following content. Replace the values with your actual Appwrite credentials:

```env
EXPO_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
EXPO_PUBLIC_APPWRITE_PROJECT_ID=
EXPO_PUBLIC_APPWRITE_DATABASE_ID=
EXPO_PUBLIC_APPWRITE_AGENTS_COLLECTION_ID=
EXPO_PUBLIC_APPWRITE_REVIEWS_COLLECTION_ID=
EXPO_PUBLIC_APPWRITE_GALLERIES_COLLECTION_ID=
EXPO_PUBLIC_APPWRITE_PROPERTIES_COLLECTION_ID=
```

**Start app**
   
```bash
 npx expo start
```

You can open the app by:
- [Expo Go](https://expo.dev/go)
- [Xcode](https://docs.expo.dev/workflow/ios-simulator/)
- [Android Studio](https://docs.expo.dev/workflow/android-studio-emulator/)

You can start developing. My project uses [expo](https://docs.expo.dev/router/introduction).

<details>
<summary><code>lib/useAppwrite.ts</code></summary>

```ts
import { Alert } from 'react-native';
import { useEffect, useState, useCallback } from 'react';

// ------------------------------------------------------

interface UseAppwriteOptions<T, P extends Record<string, string | number>> {
  fn: (params: P) => Promise<T>;
  params?: P;
  skip?: boolean;
}

interface UseAppwriteReturn<T, P> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: (newParams: P) => Promise<void>;
}

export const useAppwrite = <T, P extends Record<string, string | number>>({
  fn,
  params = {} as P,
  skip = false,
}: UseAppwriteOptions<T, P>): UseAppwriteReturn<T, P> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(!skip);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(
    async (fetchParams: P) => {
      setLoading(true);
      setError(null);

      try {
        const result = await fn(fetchParams);
        setData(result);
      } catch (err: unknown) {
        const errorMessage =
          err instanceof Error ? err.message : 'An unknown error occurred';
        setError(errorMessage);
        Alert.alert('Error', errorMessage);
      } finally {
        setLoading(false);
      }
    },
    [fn]
  );

  useEffect(() => {
    if (!skip) {
      fetchData(params);
    }
  }, []);

  const refetch = async (newParams: P) => await fetchData(newParams);

  return { data, loading, error, refetch };
};
```

</details>