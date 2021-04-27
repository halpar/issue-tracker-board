import React from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Menu, Avatar, Badge } from 'antd';
import { MenuOutlined, HomeOutlined, BellOutlined, QuestionCircleOutlined, PlusOutlined, UserOutlined } from '@ant-design/icons';
import useResponsive from '../../../../utils/Hooks/useMediaQuery';
import { GuestHeader, CustomerHeader, CustomerLeftSection, CustomerRightSection } from './styles';
import MainLogo from '../../../../assets/common/header/todoist-main-logo.png';
import { Text } from '../../Typography/styles';

const Header = ({ userRole }) => {
    const { xs, sm, md } = useResponsive();
    const history = useHistory();

    const onClickLogo = () => {
        history.push('/');
    };

    const navItemGuest = [
        {
            id: 1,
            title: 'Features',
            path: '/features',
        },
        {
            id: 2,
            title: 'For Teams',
            path: '/for-teams',
        },
        {
            id: 3,
            title: 'Pricing',
            path: '/pricing',
        },
    ];

    return userRole === '' ? (
        <GuestHeader>
            <Row style={{ height: '100%' }} align="middle" justify="space-between">
                <Col span={6} onClick={() => onClickLogo()}>
                    <img src={MainLogo} alt="header-logo" className="header-logo" />
                </Col>
                <Col span={18}>
                    <Row align="middle" justify="space-between">
                        <Col span={20}>
                            <Menu theme="light" mode="horizontal">
                                <Menu.Item onClick={() => history.push('/')}>Home</Menu.Item>
                                {navItemGuest.map(({ id, title, path }) => (
                                    <Menu.Item onClick={() => history.push(path)} key={id}>
                                        {title}
                                    </Menu.Item>
                                ))}
                            </Menu>
                        </Col>
                        <Col span={4}>
                            <Row align="middle" justify="end">
                                <div>
                                    <Text onClick={() => history.push('/login')} className="clickable">
                                        Log in
                                    </Text>
                                    <Text onClick={() => history.push('/signup')} className="clickable" style={{ marginLeft: '12px' }} color="red">
                                        Sign up
                                    </Text>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </GuestHeader>
    ) : (
        <CustomerHeader>
            <Row style={{ height: '100%' }} align="middle" justify="space-between">
                <CustomerLeftSection span={6}>
                    <Row>
                        <MenuOutlined />
                        <HomeOutlined />
                    </Row>
                </CustomerLeftSection>
                <CustomerRightSection span={6}>
                    <PlusOutlined />
                    <QuestionCircleOutlined />
                    <BellOutlined />
                    <Badge dot>
                        <Avatar icon={<UserOutlined />} />
                    </Badge>
                </CustomerRightSection>
            </Row>
        </CustomerHeader>
    );
};

export default Header;
