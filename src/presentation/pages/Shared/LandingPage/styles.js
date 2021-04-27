import styled from 'styled-components';
import { Row, Col } from 'antd';
import Button from '../../../components/Button';

export default styled(Col)`
    min-height: 100vh;
    background-image: ${({ backgroundIMG }) => backgroundIMG && `url(${backgroundIMG})`};
`;

export const MottoWrapper = styled(Row)`
    padding-top: 80px;
    padding-left: 30%;
    padding-right: 30%;
`;

export const CustomBtn = styled(Button)`
    width: 100%;
    height: 50px;
`;
