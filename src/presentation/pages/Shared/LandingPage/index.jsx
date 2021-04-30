import React from 'react';
import { Row, Col } from 'antd';
import { useHistory } from 'react-router-dom';
import LandingPageStyles, { MottoWrapper, CustomBtn } from './styles';
import BackgroundIMG from '../../../../assets/common/landing/landing-bg.png';
import { Text } from '../../../components/Typography/styles';

const LandingPage = () => {
    const history = useHistory();
    const isCustomer = window.location.pathname.includes('customer');
    return (
        <LandingPageStyles backgroundIMG={BackgroundIMG}>
            {!isCustomer && (
                <>
                    <MottoWrapper align="middle" justify="center">
                        <Text style={{ textAlign: 'center', lineHeight: '90px' }} weight="bold" size="76px" color="dark-black">
                            Organize it all with Todoist
                        </Text>
                    </MottoWrapper>
                    <Row style={{ marginTop: '24px' }} align="middle" justify="center">
                        <Col span={4}>
                            <CustomBtn onClick={() => history.push('/login')} type="secondary">
                                Get Started
                            </CustomBtn>
                        </Col>
                    </Row>
                </>
            )}
        </LandingPageStyles>
    );
};

export default LandingPage;
