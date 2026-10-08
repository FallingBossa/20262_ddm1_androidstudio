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
Charlie
        </ThemedText>
      </ThemedView>
      <ThemedText style={styles.centerText}>"Shut the f**k up!"</ThemedText>
      <Collapsible title="Appearance">
        <ThemedText>
          Charlie is an evil spirit of an unknown gender. Their body is completely black and shapeless. Large strands of unruly hair protrude from Charlies head. Their eyes are white with scattered tiny black pupils and are the most distinct part of Charlies body. The neck and abdominal area are jagged and a significant portion of Charlies abdomen is missing, save for a thin diagonal line that connects the upper and lower body. 
          The right leg is also almost completely detached. As a human, Charlie has unruly dark brown hair and a peach skin tone. They are commonly depicted with an olive-green short-sleeved shirt with a purple collar and at the end of its sleeves. Their pants are a dark teal and as are their shoes. During their time as a mortal, Charlie often carried a pair of scissors.

As a ghost, Charlie is almost completely white, save for some small black areas on their hands and face. As the plot progresses and more of Charlie’s memories resurface, more of Charlies body turns back to shadow starting with their arms.

Unlike in the previous game, Charlies body is neither missing any parts nor have any areas distorted.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Personality">
        <ThemedText>
         As a mortal, Charlie was antisocial and very insecure. Charlie tended to keep their frustrations to themselves, often out of fear of being scolded by superiors or provoking a harsh response. This habit can make them come across as a little irritating at times.But what really defines Charlie is that, even while being aware of this side of themselves, they can’t bring themselves to unload those frustrations onto someone weaker or more vulnerable, like a child.
          </ThemedText>
          <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
Underworld Office
      
        </ThemedText>
         <ThemedText>
        Charlie is a vengeful spirit who tries to maltreat people through nightmares in order to feel powerful. Eugene first finds Charlie in the subway attempting to cause multiple passengers a heart attack in their sleep.

If Eugene chooses to release Charlie in Chapter 5, Charlie will express annoyance at being indebted to a "tiny bastard" and may enthusiastically return in Chapter 7 to help if Eugene decides to kill Jack. If Eugene hesitates, Charlie will scold them and become even more aggressive if Eugene shows pusillanimity, but will applaud them if they go for the kill.
          </ThemedText>
           <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
Charlie in Underworld
      
        </ThemedText>
          <ThemedText>
        Like Eugene in Underworld Office!, Charlie can have any personality that the player wants to give them, although many dialogue options suggest Charlie is cocky and often swears. They are also shown to be disrespectful towards others.

At the beginning of the game, Charlie has no memories due to being sealed in Joan's cane during the events of Underworld Office!. As Charlie in Underworld progresses, Charlie's memories return and their shadows begin to reappear. By the end of the game, they are almost completely dark, except for a few tiny bright areas thanks to their regret over what happened during their mortal life with Mike and their mother.

Based on Charlie’s memories as a human, Charlie wasn’t very sociable during their time as a mortal and preferred to cut out paper figures rather than talk to their classmates except for Mike, who approached them in a friendly manner even after “the incident”. Despite Charlie not behaving in a friendly manner in return, Charlie felt bad for what they did to Mike and always acknowledged their friend is a good person.
          </ThemedText>
      </Collapsible>
      <Collapsible title="Images">
        <Image
          source={require('@/assets/images/503d1ee9fe22c5fe33d7f1cd8da4a3aa.jpg')}
          style={{ width: 100, height: 100, alignSelf: 'center' }}
        />
      </Collapsible>
        <ThemedText>
          {`Tap the Eugene tab to learn more about the secondary most important character.`}
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
