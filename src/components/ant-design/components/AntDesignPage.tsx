import { Col, Row, Typography } from 'antd';
import CustomTable from "./CustomTable";
import CustomAntForm from './CustomAntForm';

const { Text, Link } = Typography;

export function AntDesignPage() {
    return (
        <>
            <Row>
                <Col span={12}>
                    <CustomAntForm/>
                </Col>
                <Col span={12}>
                    <Row gutter={[1, 2]}>
                        <CustomTable/>
                        <Text>For more info, go to{' '}
                            <Link href="https://ant.design/components/overview" target="_blank">
                                Ant Design documentation
                            </Link>
                        </Text>
                    </Row>
                </Col>
            </Row>
        </>
    );
}