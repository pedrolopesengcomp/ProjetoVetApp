import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from 'react-native';

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from "firebase/database";


export default function RootLayout() {
  const colorScheme = useColorScheme();
  const firebaseConfig = {
      databaseURL: "https://projeto-veterinaria-b09fd-default-rtdb.firebaseio.com/",
    };
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
          <StatusBar style="auto" />
    </ThemeProvider>
  );
}
