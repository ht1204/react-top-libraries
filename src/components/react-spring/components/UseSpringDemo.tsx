import { useSpring, animated } from "react-spring";
import "../styles/styles.css";

const calc = (x: number, y: number) =>
             [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];

const trans = (x: number, y: number, s: number) => 
            `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const cardContainerStyle = {
  margin: "auto",
  width: "50%",
};

export const UseSpringDemoPage = () => {

  const [props, set] = useSpring(() => ({ 
    xys: [0, 0, 1], 
    config: { mass: 5, tension: 350, friction: 40 } 
 }));


  return (
    <div style={cardContainerStyle}>
      <animated.div
        className="card"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      />
    </div>
  );
};
