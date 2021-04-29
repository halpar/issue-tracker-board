import styled from 'styled-components';
import { Row, Col, Select } from 'antd';
import { between } from 'polished';
import Button from '../../../components/Button';

export default styled(Col)`
    padding-top: 36px;
    padding-left: ${between('55px', '120px')};
    padding-right: ${between('55px', '120px')};

    .icons-styling {
        font-size: 16px;
        opacity: 0.6;
        &:hover {
            cursor: pointer;
            opacity: 1;
        }
    }
    .margin-left {
        margin-left: 12px;
    }

    .flex-align-it {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: end;
        div {
            margin-bottom: 0px;
        }
    }
`;
export const RadioWrapper = styled(Row)``;
export const TasksWrapper = styled(Row)``;
export const TitleWrapper = styled(Row)`
    margin-bottom: 12px;
`;
export const IconsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const SubmitButton = styled(Button)`
    min-height: 30px;
    border-radius: 5px;
`;
export const CancelButton = styled(Button)`
    min-height: 30px;
    border-radius: 5px;
    &:hover {
        color: #ffffff;
        background-color: ${({ theme }) => theme.primaryColor} !important;
    }
`;

export const AddTaskSection = styled(Row)``;
export const AddTaskSectionFooter = styled(Row)`
    margin-top: 30px;
    padding-bottom: 12px;
`;
export const CustomSelectbar = styled(Select)`
    min-width: 140px;
`;
