import styled, { css } from 'styled-components';
import { Button } from 'antd';
import { ButtonTheme } from './constants';
import { theme } from '../../themes/theme';

const { primaryColor, lightColor, primaryColorBrighter } = theme;
const { defaultRadius, defaultShadow } = ButtonTheme;

const PrimaryButtonStyles = css`
    background-color: ${lightColor};
    border-color: ${primaryColor};
    color: ${primaryColor};
    &.ant-btn:hover,
    &.ant-btn:focus {
        background-color: transparent;
        border-color: ${lightColor};
        color: ${lightColor};
    }
`;

const SecondaryButtonStyles = css`
    background-color: ${primaryColor};
    color: #ffffff;
    border-color: ${primaryColor};
    /* &.ant-btn:hover,
    &.ant-btn:focus {
        color: #ffffff;
        background-color: ${primaryColorBrighter};
    } */
`;

const LinkButtonStyles = css`
    background-color: transparent;
    color: ${primaryColor};
    border: none;
`;

const BorderedButton = css`
    background-color: transparent;
    border-color: ${lightColor};
    color: ${lightColor};
    &.ant-btn:hover,
    &.ant-btn:focus {
        background-color: ${lightColor};
        border-color: ${primaryColor};
        color: ${primaryColor};
    }
`;

export default styled(Button)`
    min-height: ${({ type }) => type !== 'link' && `40px`};
    border-radius: ${defaultRadius};
    box-shadow: ${({ type }) => type !== 'link' && defaultShadow};
    ${({ type }) => {
        switch (type) {
            case 'secondary':
                return SecondaryButtonStyles;
            case 'link':
                return LinkButtonStyles;
            case 'bordered':
                return BorderedButton;
            default:
                return PrimaryButtonStyles;
        }
    }}
`;
