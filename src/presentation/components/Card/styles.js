import styled from 'styled-components';
import { Card } from 'antd';

const shadowColor = '#E2E4EE';
const shadow = `0 0px 20px ${shadowColor}`;
const shadowNone = `none !important`;

export const CardStyles = styled(Card)`
    border-radius: ${({ borderRadius }) => borderRadius || '10px'} !important;
    box-shadow: ${shadow};
    padding: ${({ padding }) => padding || '10px'} !important;

    .ant-card-body {
        padding: 0px;
    }
    ${({ boxShadow }) => {
        switch (boxShadow) {
            case 'shadowOnn':
                return `box-shadow: ${shadow}; `;
            case 'shadowOff':
                return `box-shadow: ${shadowNone}`;
            default:
                return `box-shadow: ${shadow};`;
        }
    }};

    ${({ theme, type }) => {
        switch (type) {
            case 'primary':
                return `
                        background: ${theme.primaryColor};`;
            case 'secondary':
                return `
                        background: ${theme.secondaryColor};`;
            case 'tertiary':
                return `
                        background: ${theme.tertiaryColor};`;
            case 'quaternary':
                return `
                        background: ${theme.quaternaryColor};`;
            default:
                return `
                        background: ${theme.lightColor};`;
        }
    }};
`;
