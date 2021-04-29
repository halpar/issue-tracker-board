import styled from 'styled-components';
import { Row, Modal, Input } from 'antd';
import Button from '../Button';

export default styled(Modal)`
    .ant-modal-header {
        padding-top: 0px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        padding-bottom: 14px;
        border-bottom: 1px solid ${({ theme }) => theme.borderColor};
    }

    .ant-modal-content {
        border-radius: 10px;
        padding-bottom: 0px;
        padding-top: 14px;
        max-width: 400px;
    }

    .ant-modal-footer {
        display: none;
        min-height: 57px;
        padding-left: 24px;
        padding-right: 24px;
        border-top: 1px solid ${({ theme }) => theme.borderColor};
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
    }

    .ant-modal-body {
        height: auto;
        min-height: 150px;
        padding-top: 20px;
        padding-bottom: 0px;
        padding-left: 0px;
        padding-right: 0px;
    }

    .ant-form-item-control-input-content {
        input {
            height: 29px;
            border-radius: 5px;
        }
    }
    .ant-form-item {
        width: 100% !important;
    }
`;

export const FooterStyles = styled(Row)`
    border-top: 1px solid ${({ theme }) => theme.borderColor};
    min-height: 57px;
    padding-left: 24px;
    padding-right: 24px;
`;
export const ContentStyles = styled(Row)`
    padding-left: 24px;
    padding-right: 24px;
`;

export const StyledInput = styled(Input)`
    width: 100%;
    padding-left: 24px;
    padding-right: 24px;
`;

export const SubmitButton = styled(Button)`
    border-radius: 5px;
`;
export const CancelButton = styled(Button)`
    border-radius: 5px;
    &:hover {
        color: #ffffff;
        background-color: ${({ theme }) => theme.primaryColor} !important;
    }
`;
