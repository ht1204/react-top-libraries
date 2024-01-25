import { Row, Typography } from 'antd';
import { ToggleButton } from './ToggleButton';
import { RotatingButton } from './RotatingButton';

const { Text, Link } = Typography;

export const GSAPReactPage = () => {

    return (
        <section>
            <h1
                style={{
                    position: 'relative',
                    left: '60%',
                    fontSize: "2.5rem",
                }}
            >
                GSAP React Demos
            </h1>
            <Row
                gutter={[1, 2]}
                style={{
                    position: 'relative',
                    left: '45%',
                    marginBottom: '1rem',
                }}
            >
                <Text>For more info, go to{' '}
                    <Link href="https://www.npmjs.com/package/@gsap/react" target="_blank">
                        GSAP documentation
                    </Link> & {' '}
                    <Link href="https://bitworking.github.io/react-gsap/" target="_blank">
                        react-gsap documentation
                    </Link>
                </Text>
            </Row>
            <iframe 
                    src="https://stackblitz.com/edit/react-6rzfpp?embed=1"
                    style={{
                        position: 'absolute',
                        right: '5%',
                        top: '30%',
                        width: '50rem',
                        height: '26rem',
                        marginTop: '10px',
                    }}
                >
                </iframe>
            <section
                style={{
                    position: 'absolute',
                    top: '40%',
                    left: '20%',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <br />
                <ToggleButton />
                <br />
                <br />
                <RotatingButton />
                <br />
                <br />
            </section>
        </section>
    );
};
