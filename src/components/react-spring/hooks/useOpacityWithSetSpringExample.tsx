import { useSpring, animated } from 'react-spring';

export function useOpacityWithSetSpringExample() {
  const [animationProperties, setAnimationProperties] = useSpring(() => ({ opacity: 0 }));

  return {
    title: 'Transition from hidden to visible (using set method)',
    button: <button onClick={() => setAnimationProperties({ opacity: 1 })}>Activate Transition</button>,
    animation: <animated.h1 style={animationProperties}>Hello World</animated.h1>
  };
}