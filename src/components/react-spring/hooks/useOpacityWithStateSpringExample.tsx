import { useState } from 'react';
import { useSpring, animated } from 'react-spring';

export function useOpacityWithStateSpringExample() {
  const [isToggled, setIsToggled] = useState(false);

  const props = useSpring({opacity: isToggled ? 1 : 0});

  return {
    title: 'Transition from hidden to visible (using state)',
    button: <button onClick={() => setIsToggled(!isToggled)}>Activate Transition</button>,
    animation: <animated.h1 style={props}>Hello World</animated.h1>
  };
}