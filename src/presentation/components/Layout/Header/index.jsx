/* eslint-disable sonarjs/no-identical-functions */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Menu, Avatar, Badge, Popover } from 'antd';
import { MenuOutlined, HomeOutlined, BellOutlined, QuestionCircleOutlined, UserOutlined } from '@ant-design/icons';
import { GuestHeader, CustomerHeader, CustomerLeftSection, CustomerRightSection, SearchInput, SearchbarContainer } from './styles';
import MainLogo from '../../../../assets/common/header/todoist-main-logo.png';
import { Text } from '../../Typography/styles';
import { setSidebarCollapseState } from '../../../../utils/Redux/collapsed/actions';
import Button from '../../Button';

export const LandingHeader = ({ userInfo }) => {
    const history = useHistory();

    const onClickLogo = () => {
        history.push('/');
    };

    const handleLogout = () => {
        localStorage.removeItem('authUser');
        window.location.reload();
    };

    const landingHeaderNavItems = [
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

    return (
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
                                {landingHeaderNavItems.map(({ id, title, path }) => (
                                    <Menu.Item onClick={() => history.push(path)} key={id}>
                                        {title}
                                    </Menu.Item>
                                ))}
                                <Menu.Item onClick={() => history.push('/customer')}>Hall of tasks</Menu.Item>
                            </Menu>
                        </Col>
                        <Col span={4}>
                            <Row align="middle" justify="end">
                                {userInfo ? (
                                    <div>
                                        <Text onClick={() => handleLogout()} className="clickable" style={{ marginLeft: '12px' }} color="red">
                                            Log out
                                        </Text>
                                    </div>
                                ) : (
                                    <div>
                                        <Text onClick={() => history.push('/login')} className="clickable">
                                            Log in
                                        </Text>
                                        <Text
                                            onClick={() => history.push('/signup')}
                                            className="clickable"
                                            style={{ marginLeft: '12px' }}
                                            color="red">
                                            Sign up
                                        </Text>
                                    </div>
                                )}
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </GuestHeader>
    );
};

export const AfterLoginHeader = ({ userInfo }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const isCollapsed = useSelector((state) => state.sidebarStateStore.isCollapsed);
    const handleMenuCollapse = () => {
        dispatch(setSidebarCollapseState(!isCollapsed));
    };

    const onClickLogo = () => {
        history.push('/');
    };

    const handleLogout = () => {
        localStorage.removeItem('authUser');
        window.location.reload();
    };

    return (
        <CustomerHeader>
            <Row align="middle" justify="space-between" style={{ height: '100%' }}>
                <CustomerLeftSection>
                    <Row align="middle" justify="center">
                        <MenuOutlined onClick={() => handleMenuCollapse()} className="header-icon-styling" />
                        <HomeOutlined onClick={() => onClickLogo()} className="header-icon-styling icon-margin-left" />
                        <SearchbarContainer className="icon-margin-left" style={{ height: '44px' }}>
                            <SearchInput placeholder="Search here" />
                        </SearchbarContainer>
                    </Row>
                </CustomerLeftSection>
                <CustomerRightSection>
                    <Row align="middle" justify="center">
                        <Text color="white" size="description" className="flex-it">{`Hello! ${userInfo.user.displayName}`}</Text>
                        <QuestionCircleOutlined className="header-icon-styling icon-margin-left" />
                        <BellOutlined className="header-icon-styling icon-margin-left" />
                        <Badge dot>
                            <Popover
                                placement="bottom"
                                content={
                                    <Button type="link" onClick={() => handleLogout()}>
                                        Logout
                                    </Button>
                                }
                                trigger="hover">
                                <Avatar className="icon-margin-left" icon={<UserOutlined />} />
                            </Popover>
                        </Badge>
                    </Row>
                </CustomerRightSection>
            </Row>
        </CustomerHeader>
    );
};
