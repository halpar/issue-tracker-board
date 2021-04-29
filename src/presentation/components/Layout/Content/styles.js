/* eslint-disable sonarjs/no-identical-functions */
import styled from 'styled-components';
import { Layout } from 'antd';
import { between } from 'polished';

const { Content } = Layout;

export default styled(Content)`
    background: ${({ theme }) => theme.layoutStyles.contentColor};
    padding-top: ${({ theme, userRole }) => (userRole === 'customer' ? theme.layoutStyles.customerHeaderHeight : theme.layoutStyles.headerHeight)};
    min-height: ${({ theme, userRole }) => (userRole === 'customer' ? '100vh' : theme.layoutStyles.contentHeight)};
    height: ${({ userRole }) => userRole === 'customer' && '100vh'};
    &::-webkit-scrollbar {
        overflow: hidden;
    }
`;
