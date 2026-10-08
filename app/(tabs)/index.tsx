import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#337285', dark: '#2d2766' }}
      headerImage={
        <Image
          source={require('@/assets/images/OIP.webp')}
          style={styles.headerImage}
          resizeMode="contain"
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Charlie In Underworld </ThemedText>
      </ThemedView> <HelloWave></HelloWave>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">History </ThemedText>
        <ThemedText>
        Charlie in Underworld (찰리 인 언더월드) is a Korean mobile chat-style visual novel game published by Buff Studio. Despite being the sequel to the mobile story game Underworld Office: Offline Mystery Visual Novel, Team 344 intended to write the story in a way for those who havent played the prequel can also understand the story.
Charlie in Underworld is in the point of view of Charlie, who first appeared as an evil spirit in the fifth chapter of the first game, now a ghost with no memories of their life and themselves. Forced to follow the group of ghosts known as the Underworld Office as Charlie tries to recall their past, unwanted memories surface, though not just of Charlies.
          </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText type="subtitle">Step 2: Explore</ThemedText>
          </Link.Trigger>
          <Link.Preview />
          <Link.Menu>
            <Link.MenuAction title="Action" icon="cube" onPress={() => alert('Action pressed')} />
            <Link.MenuAction
              title="Share"
              icon="square.and.arrow.up"
              onPress={() => alert('Share pressed')}
            />
            <Link.Menu title="More" icon="ellipsis">
              <Link.MenuAction
                title="Delete"
                icon="trash"
                destructive
                onPress={() => alert('Delete pressed')}
              />
            </Link.Menu>
          </Link.Menu>
        </Link>

        <ThemedText>
          {`Tap the Charlie tab to learn more about the main character.`}
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  headerImage: {
    width: '100%',
   height: '100%',
    resizeMode: 'center',
  },
});
