import styled from 'styled-components';
import { Row, Col } from 'antd';
import { Text as text } from '../Typography/styles';

export default styled(Row)`
    height: 40px;
    width: 100%;
    max-width: 467px;
    display: flex;
    align-items: center;

    border: ${({ theme }) => `1px solid ${theme.borderColor}`};
    border-radius: 50px;
    margin-bottom: 15px;
    cursor: pointer;
`;

export const Item = styled(Col)`
    text-align: center;
`;

export const Img = styled.img`
    margin-top: -1px;
    margin-left: -2px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
`;

export const Text = styled(text)``;
