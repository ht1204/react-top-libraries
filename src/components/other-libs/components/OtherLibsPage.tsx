import { Typography, Row, Col, Tooltip } from 'antd';
import { Typography as Typo } from '@mui/material';
import { libLinks } from '../utils/routerDocLinks';


const { Link } = Typography;

type linkItemType = {
    library: string;
    doc_link: string;
}

export const OtherLibsPage = () => {

    const styledLinkItem = {
        border: "1px solid black",
        margin: '20px',
        padding: "8px",
        borderRadius: "10px",
        background: "lightblue",
        color: "#000",
    }


    return (
        <section>
            <h1
                style={{
                    position: 'relative',
                    left: '30%',
                    fontSize: "2.5rem",
                    color: "blue",
                    fontFamily: 'arial',
                    fontWeight: 'bold'
                }}
            >
                Other React Libraries to Try
            </h1>
            <Row
                gutter={[16, 16]}
                style={{
                    position: 'relative',
                    left: '10%',
                }}
            >
                {libLinks.map(({ library, doc_link }: linkItemType, index) => (
                    <Col span={6} >
                        <Tooltip
                            title={library}
                            color={'geekblue'}
                        >
                            <Link
                                href={library}
                                target="_blank"
                                style={styledLinkItem}
                                key={index}
                            >
                                {doc_link}
                            </Link>
                        </Tooltip>
                    </Col>
                ))}
            </Row>
            <Typo
                component="h1"
                variant="h5"
                style={{
                    position: 'relative',
                    left: '10%',
                    paddingTop: '5rem'
                }}
            >
                There is a lot of libraries, feel free to share any library as you wish.
                <br />
                Experiment forking this repo and enjoy!
            </Typo>
        </section>
    );
};
