import { useState } from "react";
import { Row, Typography } from 'antd';
import { CustomSquare } from "./CustomSquare";
import { Refresh } from "./Refresh";
import { CustomTabs } from './CustomTabs';
import { AnimationFrame } from "./AnimationFrame";

import "../styles/styles.css";


const { Text, Link } = Typography;

export const FramerMotionPage = () => {
    const [count, setCount] = useState(0);

    function handleRefresh() {
        setCount(prevState => prevState + 1);
    }

    return (
        <section
        >
            <h1
                style={{
                    position: 'relative',
                    left: '45%',
                    fontSize: "2.5rem",
                }}
            >
                Framer Motion Demos
            </h1>
            <Row
                gutter={[1, 2]}
                style={{
                    position: 'relative',
                    left: '50%',
                    marginBottom: '3rem',
                }}
            >
                <Text>For more info, go to{' '}
                    <Link href="https://www.framer.com/motion/introduction/" target="_blank">
                        Framer Motion documentation
                    </Link>
                </Text>
            </Row>
            <Refresh onClick={handleRefresh} />
            <div className="example-container">
                <CustomSquare key={count} />
            </div>
            <br />
            <CustomTabs />
            <br />
            <section
                style={{
                    position: 'absolute',
                    top: '65%',
                    right: '10%'
                }}
            >
                <AnimationFrame />
            </section>
        </section>
    );
};

