import { useState } from 'react';
import { useSpring, animated } from 'react-spring';

export function useColorSpringExample() {
  const [isToggled, setIsToggled] = useState(false);

  const props = useSpring({color: isToggled ? `rgb(255,0,0)` : 'blue'});

  return {
    title: 'Transition from one color to another',
    button: <button onClick={() => setIsToggled(!isToggled)}>Activate Transition</button>,
    animation: <animated.h1 style={props}>Hello World</animated.h1>
  };
}