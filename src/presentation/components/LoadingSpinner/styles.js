import styled from 'styled-components';
import { Spin as AntdSpin } from 'antd';

export const Spin = styled(AntdSpin)``;

export const LoadingSpinnerStyles = styled.div`
    height: ${(props) => (props.fullHeight ? '100vh' : '200px')};
    width: ${(props) => props.fullHeight && '100%'};

    display: flex;
    justify-content: center;
    align-items: center;
`;
