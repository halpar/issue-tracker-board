import styled, { createGlobalStyle } from 'styled-components';
import { between } from 'polished';
import { Row, Col, Input } from 'antd';

import Layout from '../index';

// const { Search } = Input;

const { Header } = Layout;

export const GuestHeader = styled(Header)`
    z-index: 1000;
    overflow: hidden;
    height: ${({ theme }) => theme.layoutStyles.headerHeight};
    background: ${({ theme }) => theme.layoutStyles.headerColor};
    padding-left: ${between('0px', '50px')};
    padding-right: ${between('0px', '50px')};
    position: fixed;
    width: 100%;
    -webkit-box-shadow: 0 3px 6px rgba(112, 112, 112, 0.23);
    -moz-box-shadow: 0 3px 6px rgba(112, 112, 112, 0.23);
    box-shadow: 0 3px 6px rgba(112, 112, 112, 0.23);

    .header-logo {
        cursor: pointer;
        user-select: none;
        width: 127px;
        height: 32px;
    }

    .ant-menu-horizontal {
        border: none;
    }

    .clickable {
        cursor: pointer;
    }
`;

export const GlobalStyleForTooltip = createGlobalStyle`
  body {
    .ant-tooltip-inner {
      background-color: transparent;
      padding:0px;
      margin-top:-5px;
      border-radius:15px;
      box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    }
    .ant-tooltip-arrow{
        display:none
    }
  }
`;

export const CustomerHeader = styled(Header)`
    width: 100%;
    z-index: 200;
    position: fixed;
    background-color: ${({ theme }) => theme.layoutStyles.customerHeaderColor};
    height: ${({ theme }) => theme.layoutStyles.customerHeaderHeight} !important;
    padding-left: ${({ theme }) => theme.layoutStyles.customerHeaderPaddingHorizontal};
    padding-right: ${({ theme }) => theme.layoutStyles.customerHeaderPaddingHorizontal};

    .header-icon-styling {
        font-size: 24px;
        color: #ffffff;
    }
    .icon-margin-left {
        margin-left: 12px;
    }
`;

export const CustomerLeftSection = styled(Col)``;
export const CustomerRightSection = styled(Col)``;
export const SearchbarContainer = styled(Col)`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 400px;
`;
export const SearchInput = styled(Input.Search)`
    width: 185px;
    border-radius: 90%;
    opacity: 0.6;
    transition: 0.1s ease-in;
    background: transparent;

    ::placeholder {
        /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: ${({ theme }) => theme.placeholderColor};
        opacity: 1; /* Firefox */
    }
    &:hover {
        opacity: 1;
        text-align: start;
        width: 100%;
        @media only screen and (min-width: 1250px) {
            width: 100%;
        }

        border: ${({ theme }) => `1px solid ${theme.primaryColor}`};
    }
`;
