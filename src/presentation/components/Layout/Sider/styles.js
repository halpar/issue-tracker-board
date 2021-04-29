import styled from 'styled-components';
import { Layout } from 'antd';
// import { rgba } from 'polished';

const { Sider } = Layout;

export default styled(Sider)`
    background-color: ${({ theme }) => theme.layoutStyles.siderColor};
    padding-top: ${({ theme }) => theme.layoutStyles.customerHeaderHeight};
    border-right: 1px solid #f0f0f0;
    .ant-menu-item {
        padding-left: 42px !important;
    }
    .ant-menu-submenu-title {
        padding-left: 42px !important;
    }
    .menu-item-styles {
        padding-left: 48px !important;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-between;

        .ant-icon {
            margin-right: 0px;
        }
    }
    .add-new-project-styles {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .hover-text {
        &:hover {
            color: #e44232;
        }
    }
`;
