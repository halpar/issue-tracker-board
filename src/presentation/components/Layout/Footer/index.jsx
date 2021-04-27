import React from 'react';
import { useHistory } from 'react-router';
import { Col, Row, Collapse } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import StyledFooter, {
    FooterBottomWrapper,
    FooterTopWrapper,
    FooterBadgeWrapper,
    FooterNavItemStyles,
    IconWrapperCircle,
    Icon,
    FooterCollapse,
    FooterCollapseWrapper,
} from './styles';
import googleplayIcon from '../../../../assets/common/footer/googleplay.svg';
import appstoreIcon from '../../../../assets/common/footer/appstore.svg';
import vidieatsLogoWhite from '../../../../assets/common/footer/todoist-footer-icon.png';
import { Text } from '../../Typography/styles';
import facebook from '../../../../assets/common/footer/facebook.svg';
import instagram from '../../../../assets/common/footer/instagram.svg';
import twitter from '../../../../assets/common/footer/twitter.svg';
import youtube from '../../../../assets/common/footer/youtube.svg';
import useResponsive from '../../../../utils/Hooks/useMediaQuery';

const dummyData = [
    {
        id: 1,
        title: 'FEATURES',
        datas: [
            {
                id: 1,
                name: 'How It Works?',
                path: '/',
            },
            {
                id: 2,
                name: 'For Teams',
                path: '/',
            },
            {
                id: 3,
                name: 'Pricing',
                path: '/',
            },
            {
                id: 4,
                name: 'Templates',
                path: '/',
            },
        ],
    },
    {
        id: 2,
        title: 'RESOURCES',
        datas: [
            {
                id: 5,
                name: 'Download Apps',
            },
            {
                id: 6,
                name: 'Help Center',
            },
            {
                id: 7,
                name: 'Productivity Methods',
            },
            {
                id: 8,
                name: 'Refer a Friend',
            },
            {
                id: 9,
                name: 'Integrations',
            },
            {
                id: 10,
                name: 'Channel Partners',
            },
            {
                id: 11,
                name: 'Developer API',
            },
        ],
    },
    {
        id: 3,
        title: 'COMPANY',
        datas: [
            {
                id: 12,
                name: 'About US',
            },
            {
                id: 13,
                name: 'We are Hiring!',
            },
            {
                id: 14,
                name: 'Blog',
            },
            {
                id: 15,
                name: 'Press',
            },
            {
                id: 16,
                name: 'Twist',
            },
        ],
    },
];

const FooterNavItem = ({ itemId, title, datas }) => {
    const history = useHistory();

    return (
        <FooterNavItemStyles span={8}>
            <Row>
                <Text weight="bold">{title}</Text>
            </Row>
            {datas.map(({ id, name, path }) => (
                <Row key={id}>
                    <Text onClick={() => history.push(path)} style={{ cursor: 'pointer' }}>
                        {name}
                    </Text>
                </Row>
            ))}
        </FooterNavItemStyles>
    );
};
const { Panel } = Collapse;

const FooterCollapseItem = ({ itemId, title, datas }) => {
    const history = useHistory();

    return (
        <FooterCollapse
            expandIcon={({ isActive }) => <RightOutlined style={{ color: '#FFFFFF' }} rotate={isActive ? 90 : 0} />}
            expandIconPosition="right"
            bordered={false}>
            <Panel header={<Text weight="bold">{title}</Text>} key={itemId}>
                {datas.map(({ id, name, path }) => (
                    <Row>
                        <Text onClick={() => history.push(path)} style={{ cursor: 'pointer' }}>
                            {name}
                        </Text>
                    </Row>
                ))}
            </Panel>
        </FooterCollapse>
    );
};

const Footer = () => {
    const { xs, sm, md, lg } = useResponsive();

    return (
        <StyledFooter>
            <Col className="height-full">
                <FooterTopWrapper gutter={[0, 30]}>
                    <Col xs={14} sm={10} md={8} lg={8} xl={8} xxl={8}>
                        <FooterBadgeWrapper>
                            <Col span={24} className="spacebetween">
                                <Row>
                                    <img src={vidieatsLogoWhite} alt="vidieats-logo" className="footer-logo" />
                                </Row>
                                <Row>
                                    <Col span={12}>
                                        <img src={appstoreIcon} alt="appstore-icon" className="appstore-logo" />
                                    </Col>
                                    <Col span={12}>
                                        <img src={googleplayIcon} alt="googleplay-icon" className="googleplay-logo" />
                                    </Col>
                                </Row>
                                <Row align="middle" justify="space-between">
                                    <IconWrapperCircle>
                                        <img src={facebook} alt="facebook-icon" />
                                    </IconWrapperCircle>
                                    <IconWrapperCircle>
                                        <img src={twitter} alt="twitter-icon" />
                                    </IconWrapperCircle>
                                    <IconWrapperCircle>
                                        <img src={instagram} alt="instagram-icon" />
                                    </IconWrapperCircle>
                                    <IconWrapperCircle>
                                        <img src={youtube} alt="youtube-icon" />
                                    </IconWrapperCircle>
                                </Row>
                            </Col>
                        </FooterBadgeWrapper>
                    </Col>

                    {xs || sm || md || lg ? (
                        <Col xs={24} sm={24} md={24} lg={16} xl={16} xxl={16}>
                            <FooterCollapseWrapper>
                                {dummyData.map(({ id, title, datas }) => (
                                    <FooterCollapseItem itemId={id} title={title} datas={datas} key={id} />
                                ))}
                            </FooterCollapseWrapper>
                        </Col>
                    ) : (
                        <Col xs={24} sm={24} md={24} lg={24} xl={16} xxl={16}>
                            <Row gutter={[{ xs: 44, sm: 44, md: 44, lg: 44, xl: 44 }, 0]}>
                                {dummyData.map(({ id, title, datas }) => (
                                    <FooterNavItem itemId={id} title={title} datas={datas} key={id} />
                                ))}
                            </Row>
                        </Col>
                    )}
                </FooterTopWrapper>
                <FooterBottomWrapper align="middle" justify="space-between">
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Text weight="medium">© 2021 Todoist-Clone All rights reserved · Privacy · Terms · Sitemap</Text>
                    </Col>
                </FooterBottomWrapper>
            </Col>
        </StyledFooter>
    );
};

export default Footer;
