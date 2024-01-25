import { useState } from 'react';
import { useSpring, animated } from 'react-spring';

export function useMultipleColorsSpringExample() {
  const [isToggled, setIsToggled] = useState(false);

  const props = useSpring({
    from: { color: 'blue' },
    to: [
        { color: '#ffaaee' },
        { color: 'red' },
        { color: '#008000' },
        { color: 'yellow' },
        { color: 'blue' }
    ]
  });

  return {
    title: 'Transition through multiple colors',
    button: <button onClick={() => setIsToggled(!isToggled)}>Activate Transition</button>,
    animation: <animated.h1 style={props}>Hello World</animated.h1>
  };
}