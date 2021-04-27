import styled from 'styled-components';
import { Row, Col } from 'antd';

export default styled(Col)`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
    padding-top: 40px;
    padding-bottom: 40px;
`;

export const Content = styled(Row)``;

export const Item = styled(Col)``;
