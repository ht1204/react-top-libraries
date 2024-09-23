import { CSSProperties } from 'react';
import { useSpring, animated } from "react-spring";

const basicDemoPageStyle = {
  width: "75%",
  margin: "auto"
};

const numberDemoStyle: CSSProperties = {
  textAlign: "center",
  fontFamily: "Lato",
  fontSize: "25px",
  marginTop: "1vw"
};

const opacityDemoStyle: CSSProperties = {
  textAlign: "center",
  fontFamily: "Lato",
  fontSize: "25px",
  marginTop: "5vw"
};


export const BasicAnimation = () => {
  const numberDemoSpring = useSpring({ number: 10, from: { number: 0 } });
  const opacityDemoSpring = useSpring({ delay: 50, opacity: 1, from: { opacity: 0 }});

  return (
    <section style={basicDemoPageStyle}>
      <div style={opacityDemoStyle}>
        <animated.div style={opacityDemoSpring}>Hello React-Spring</animated.div>
      </div>
      <div style={numberDemoStyle}>
        <animated.span>{numberDemoSpring.number}</animated.span>
      </div>
    </section>
  );
};
