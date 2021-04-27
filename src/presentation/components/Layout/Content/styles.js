/* eslint-disable sonarjs/no-identical-functions */
import styled from 'styled-components';
import { Layout } from 'antd';
import { between } from 'polished';

const { Content } = Layout;

export default styled(Content)`
    background: ${({ theme }) => theme.layoutStyles.contentColor};
    margin-top: ${({ theme }) => theme.layoutStyles.headerHeight};
    min-height: ${({ theme }) => theme.layoutStyles.contentHeight};
    min-height: 100vh;
    &::-webkit-scrollbar {
        overflow: hidden;
    }
`;
