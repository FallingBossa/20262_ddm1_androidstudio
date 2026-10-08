import Animated from 'react-native-reanimated';

export function HelloWave() {
  return (
    <Animated.Text
      style={{
        fontSize: 28,
        lineHeight: 32,
        marginTop: -6,
        animationName: {
          '60%': { transform: [{ rotate: '10deg' }] },
        },
        animationIterationCount: 4,
        animationDuration: '400ms',
      }}>
    ༼ つ ╹ ╹ ༽つ 
    </Animated.Text>
  );
}
