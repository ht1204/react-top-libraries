import { Row, Typography } from 'antd';
import { IndexDemos } from "./IndexDemos";
import { CustomHooksDemo } from './CustomHooksDemo';

import "../styles/styles.css";


const { Text, Link } = Typography;

export function ReactSpringPage() {
    return (
        <>
            <section>
                <h1 
                    style={{ 
                        position: 'relative',
                        left: '45%',
                    }}
                >
                    React Spring Demos
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
                        <Link href="https://www.react-spring.dev/docs" target="_blank">
                            React-Spring documentation
                        </Link>
                    </Text>
                </Row>
                <IndexDemos />
                <CustomHooksDemo />
            </section>
        </>
    );
}
