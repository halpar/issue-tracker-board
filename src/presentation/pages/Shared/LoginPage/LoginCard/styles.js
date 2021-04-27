import styled from 'styled-components';
import { Select as select, Input as input, Row, Form as form, Button, Checkbox as checkbox } from 'antd';
import { between } from 'polished';
import { Title as title, Text as text } from '../../../../components/Typography/styles';
import Card from '../../../../components/Card';

export default styled(Card)`
    max-width: 578px;
    min-height: 50vh;
    border-radius: ${({ theme }) => theme.borderRadius};
    z-index: 1;
    background: #fff;

    .ant-card-body {
        padding: ${`${between('15px', '25px')} ${between('30px', '54px')} ${between('15px', '25px')} ${between('30px', '54px')}`};
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
`;

export const Title = styled(title)`
    margin-bottom: ${between('15px', '25px')};
`;

export const LoginText = styled(text)`
    @media only screen and (max-width: 392px) {
        margin: auto;
    }
`;

export const SignupButton = styled(text)`
    cursor: pointer;
    margin-left: 5px;
    @media only screen and (max-width: 392px) {
        margin: auto;
    }
`;

export const Text = styled(text)``;

export const Content = styled(Row)`
    display: flex;
`;

export const Form = styled(form)`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const Select = styled(select)`
    width: 100%;
    max-width: 467px;
    height: 60px;
    margin-top: ${between('15px', '20px')} !important;

    input {
        height: 60px !important;
    }

    .ant-select-arrow {
        right: 23px;
    }

    .ant-select-selector {
        height: 60px !important;
        border-radius: 5px !important;
    }

    .ant-select-selection-item {
        line-height: 60px !important;
    }
`;

export const Option = styled(Select.Option)``;

export const Input = styled(input)`
    width: 100%;
    max-width: 467px;
    height: 60px;
    border-radius: 5px;
`;

export const PasswordInput = styled(input.Password)`
    width: 100%;
    max-width: 467px;
    height: 60px;
    border-radius: 5px;
`;

export const EmailInput = styled(Input)`
    margin-top: ${between('15px', '20px')};
`;

export const ContinueButton = styled(Button)`
    width: 163px;
    height: 54px;
    text-align: center;
    margin: auto;
    border: none;
    margin-top: 20px;
    margin-bottom: 30px;
    background: ${({ theme }) => theme.secondaryColor};
    border-radius: 25px;

    &:hover {
        background: ${({ theme }) => theme.secondaryColor};
    }

    &:focus {
        background: ${({ theme }) => theme.secondaryColor} !important;
    }

    img {
        margin-left: 20px;
        width: 8px;
        height: 11px;
    }
`;

export const Checkbox = styled(checkbox)`
    margin-right: 5px !important;
`;

export const WrongEmailText = styled(text)`
    margin: auto;
    margin-top: -12px;
    margin-bottom: 12px;
`;
