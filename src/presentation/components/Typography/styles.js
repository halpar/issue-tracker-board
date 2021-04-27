import { Typography } from 'antd';
import styled, { css } from 'styled-components';
import { FontTheme } from './constants';

const JointStyling = css`
    &&& {
        display: ${({ display }) => display || ''};

        font-family: ${({ family }) => {
            if (!family) return FontTheme.Family.primary;
            switch (family) {
                case 'primary':
                    return FontTheme.Family.primary;
                case 'secondary':
                    return FontTheme.Family.secondary;
                default:
                    return family;
            }
        }};

        color: ${({ color }) => {
            if (!color) return FontTheme.Color.black;
            switch (color) {
                case 'black':
                    return FontTheme.Color.lightBlack;
                case 'dark-black':
                    return FontTheme.Color.darkBlack;
                case 'smoke':
                    return FontTheme.Color.smoke;
                case 'white':
                    return FontTheme.Color.white;
                case 'red':
                    return FontTheme.Color.red;
                default:
                    return color;
            }
        }};

        font-weight: ${({ weight }) => {
            if (!weight) return FontTheme.Weight.regular;
            switch (weight) {
                case 'light':
                    return FontTheme.Weight.light;
                case 'regular':
                    return FontTheme.Weight.regular;
                case 'semi-bold':
                    return FontTheme.Weight.semiBold;
                case 'medium':
                    return FontTheme.Weight.medium;
                case 'bold':
                    return FontTheme.Weight.bold;
                case 'extra-bold':
                    return FontTheme.Weight.extraBold;
                default:
                    return weight;
            }
        }};

        font-size: ${({ size }) => {
            if (!size) return FontTheme.Size.regular;
            switch (size) {
                case 'tiny':
                    return FontTheme.Size.tiny;
                case 'description':
                    return FontTheme.Size.description;
                case 'regular':
                    return FontTheme.Size.regular;
                case 'noble-regular':
                    return FontTheme.Size.nobleRegular;
                case 'title':
                    return FontTheme.Size.title;
                case 'big-title':
                    return FontTheme.Size.bigTitle;
                case 'motto':
                    return FontTheme.Size.motto;
                case 'mobile-motto':
                    return FontTheme.Size.mobileMotto;
                case 'mobile-big-title':
                    return FontTheme.Size.mobileBigTitle;
                default:
                    return size;
            }
        }};

        font-style: ${({ fontStyle }) => {
            if (!fontStyle) return FontTheme.Style.normal;
            switch (fontStyle) {
                case 'normal':
                    return FontTheme.Style.normal;
                case 'italic':
                    return FontTheme.Style.italic;
                case 'oblique':
                    return FontTheme.Style.oblique;
                default:
                    return FontTheme.Style.normal;
            }
        }};

        max-width: ${({ maxWidth }) => {
            if (maxWidth) return maxWidth;
        }};

        ${({ disableSelect }) =>
            disableSelect &&
            `
                -webkit-touch-callout: none; 
                -webkit-user-select: none; 
                -khtml-user-select: none; 
                -moz-user-select: none; 
                -ms-user-select: none; 
                user-select: none; 
            `}
        ${({ displayBlock }) =>
            displayBlock &&
            `
                display:block;
            `}
    }
`;

export const Title = styled(Typography.Title)`
    ${JointStyling}
`;

export const Text = styled(Typography.Text)`
    ${JointStyling}
`;

export const Paragraph = styled(Typography.Paragraph)`
    ${JointStyling}
`;
