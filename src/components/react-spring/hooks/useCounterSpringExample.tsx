import { useState } from 'react';
import { useSpring, animated } from 'react-spring';

export function useCounterSpringExample() {
  const [isToggled, setIsToggled] = useState(false);


  const spring = useSpring({ 
    from: { val: 0 }, 
    to: { val: isToggled ? 100 : 0 },
    config: {
      tension: 280,
      friction: 86,
      clamp: true
    }, 
  });


  return {
    title: 'Count up/down to 10',
    button: <button onClick={() => setIsToggled(!isToggled)}>Activate Count</button>,
    animation: <animated.h1>{spring.val.interpolate(val => val.toFixed(2))}</animated.h1>
  };
}