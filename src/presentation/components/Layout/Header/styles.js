import styled, { createGlobalStyle } from 'styled-components';
import { between } from 'polished';
import { Row, Col } from 'antd';

import Layout from '../index';

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
    z-index: 200;
    background-color: #db4c3f;
    padding-left: 42px;
    padding-right: 42px;
`;

export const CustomerLeftSection = styled(Col)``;
export const CustomerRightSection = styled(Col)``;
