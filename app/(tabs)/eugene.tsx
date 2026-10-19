import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Collapsible } from '@/components/ui/collapsible';
import { Fonts } from '@/constants/theme';

export default function TabTwoScreen() {
  return (
     <ParallaxScrollView
          headerBackgroundColor={{ light: '#337285', dark: '#f5f5f8' }}
          headerImage={
            <Image
              source={require('@/assets/images/charlie-in-underworld-underworld-office.gif')}
              style={styles.headerImage}
              resizeMode="contain"
            />
          }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
Eugene
        </ThemedText>
      </ThemedView>
      <ThemedText style={styles.centerText}>"I was a better person after I met you...! But that was all built on lies..!"</ThemedText>
      <Collapsible title="Appearance">
        <ThemedText>
          Eugene sports short, light brown hair, a long-sleeved black turtleneck under a white uniform shirt, along with black eyes and circular glasses
      Eugene usually wears their station attendant uniform with their guardian flower in their chest pocket, although occasionally we see Eugene wear a black top alongside black leggings.

As a ghost, Eugene has pink hair that lightens or dims depending on whether or not Hayden turns into an evil spirit. Eugene also wears a white top instead of his station uniform, alongside dark pink leggings.

After the events of Charlie In Underworld!, Eugene is seen wearing a blue shirt under their usual white uniform, paired along with blue leggings instead of their black, showing the change of time and growth of the character.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Personality">
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
Underworld Office
      
        </ThemedText>
         <ThemedText>
        In the beginning, Eugene is introverted, quiet, and extremely insecure about themselves. They hardly talk in public due to their shyness and fear of making a mistake, owing to their uncontrollable stuttering. It is implied that they oftentimes spend a whole day without having said a single word. However, they are shown to be caring for others and determined to be of help, although the motive depends on the player's choices.

Eugene's personality can change all throughout the game. Depending on the player, Eugene can be empathic and selfless or direct and efficient. Their motivation in helping others can be either based on genuine care or simply a way to repay their debt to Boss. They also have the choice to be understanding of every situation they find themselves in or be quick to anger and resentment when things don't go their way.
         </ThemedText>
           <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
Charlie in Underworld
      
        </ThemedText>
          <ThemedText>
        Comparing Eugene's personality from the first and second games, a lot about Eugene has changed, the key difference being their relationship with Boss.

Eugene has now integrated talking into their daily life, seen by their interactions with the other station attendants. Eugene also smiles much more often to the point that it worries the other station attendants when Eugene stops smiling or when Eugene seems pretty out of it.

Eugene also seems to have mostly lost their stutter, although they still stutter when things don't go their way or when they are scared.

Though, Eugene has become so dependent on Boss and his rules that they sometimes have tiny breakdowns when they realize they have broken a rule, an example being when Charlie mentions to Eugene that they didn’t tell Boss that they used their scissors, Eugene seemed pretty out of it for a while and kept on saying "huh".

Eugene's following of Boss's rules even extends to them refusing to talk to Charlie, because Boss said "It would be better for everyone if Charlie stayed away from Eugene". Charlie describes it as Eugene becoming "Boss's cute little puppet" because sometimes Eugene doesn't even seem to act on their own accord and instead follows Boss's rules, with very few exceptions.
          </ThemedText>
      </Collapsible>
      <Collapsible title="Images">
        <Image
          source={require('@/assets/images/503d1ee9fe22c5fe33d7f1cd8da4a3aa.jpg')}
          style={{ width: 100, height: 100, alignSelf: 'center' }}
        />
      </Collapsible>
        <ThemedText>
          {`Tap the Charlie tab to learn more about the main character.`}
        </ThemedText>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
   headerImage: {
    width: '100%',
   height: '100%',
    resizeMode: 'center',
  },
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
  },
  centerText: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
});
