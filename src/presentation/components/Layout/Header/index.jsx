/* eslint-disable sonarjs/no-identical-functions */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Menu, Avatar, Badge } from 'antd';
import { MenuOutlined, HomeOutlined, BellOutlined, QuestionCircleOutlined, PlusOutlined, UserOutlined } from '@ant-design/icons';
import useResponsive from '../../../../utils/Hooks/useMediaQuery';
import { GuestHeader, CustomerHeader, CustomerLeftSection, CustomerRightSection, SearchInput, SearchbarContainer } from './styles';
import MainLogo from '../../../../assets/common/header/todoist-main-logo.png';
import { Text } from '../../Typography/styles';
import { setSidebarCollapseState } from '../../../../utils/Redux/collapsed/actions';

const Header = ({ userRole }) => {
    const { xs, sm, md } = useResponsive();
    const history = useHistory();
    const dispatch = useDispatch();
    const isCollapsed = useSelector((state) => state.sidebarStateStore.isCollapsed);

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

    const handleMenuCollapse = () => {
        dispatch(setSidebarCollapseState(!isCollapsed));
    };

    return userRole === 'customer' ? (
        <CustomerHeader>
            <Row align="middle" justify="space-between" style={{ height: '100%' }}>
                <CustomerLeftSection>
                    <Row align="middle" justify="center">
                        <MenuOutlined onClick={() => handleMenuCollapse()} className="header-icon-styling" />
                        <HomeOutlined className="header-icon-styling icon-margin-left" />
                        <SearchbarContainer className="icon-margin-left" style={{ height: '44px' }}>
                            <SearchInput placeholder="Search here" />
                        </SearchbarContainer>
                    </Row>
                </CustomerLeftSection>
                <CustomerRightSection>
                    <Row align="middle" justify="center">
                        <QuestionCircleOutlined className="header-icon-styling icon-margin-left" />
                        <BellOutlined className="header-icon-styling icon-margin-left" />
                        <Badge dot>
                            <Avatar className="icon-margin-left" icon={<UserOutlined />} />
                        </Badge>
                    </Row>
                </CustomerRightSection>
            </Row>
        </CustomerHeader>
    ) : (
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
    );
};

export default Header;
