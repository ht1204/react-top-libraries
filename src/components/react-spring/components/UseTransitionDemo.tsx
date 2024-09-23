import{ useState } from "react";
import { useTransition, animated } from "react-spring";

import '../styles/styles.css';


const COLORS = ['ORANGE', 'PINK', 'PURPLE'];

export const UseTransitionDemoPage = () => {

    const [colors, setColors] = useState(COLORS);

    const transitions2 = useTransition(colors, {
        from: { opacity: 0, transform: 'perspective(600px) rotateX(180deg)' },
        enter: { opacity: 1, transform: 'perspective(600px) rotateX(0deg)' },
        leave: { opacity: 0, transform: 'perspective(600px) rotateX(180deg)' },
        config: { duration: 1500 },
    });

    const handleMouseLeave = () => {
        setColors([]);
    };

    const handleMouseEnter = () => {
        setColors(COLORS);
    };

    return (
        <div className='play'>
            <h1>Fun with Colors</h1>
            <br />
            <div
                className='color-container'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {transitions2((styles, item) => (
                    <animated.div
                        className={`color ${item}`}
                        style={{
                            ...styles,
                            fontSize: '50px',
                        }}
                    >
                        {item}
                    </animated.div>
                ))}
            </div>
        </div>
    );
};
