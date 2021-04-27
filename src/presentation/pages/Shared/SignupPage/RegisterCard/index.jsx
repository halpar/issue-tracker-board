import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { message, Row } from 'antd';
import Provider from '../../../../components/AuthProvider';

import RegisterCardStyles, {
    Title,
    Text,
    Content,
    Form,
    Input,
    SignupButton,
    ContinueButton,
    Checkbox,
    LoginText,
    WrongEmailText,
    PasswordInput,
    EmailInput,
} from '../../LoginPage/LoginCard/styles';
import whiteArrow from '../../../../../assets/common/login/white-arrow.svg';

const RegisterCard = ({ setShowEmailLogin, showEmailLogin, history }) => {
    const [subscribe, setSubscribe] = useState(true);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const handleLogin = (vals) => {
        const { email, password } = vals;
    };

    return (
        <RegisterCardStyles>
            <Row align="middle" justify="center">
                <Title weight="bold" size="title">
                    Sign up
                </Title>
            </Row>
            <Content style={{ marginBottom: '12px' }}>
                <LoginText>Already have account ?</LoginText>
                <SignupButton weight="bold" onClick={() => history.push('/login')}>
                    Log in
                </SignupButton>
            </Content>
            {showEmailLogin ? (
                <Form onFinish={handleLogin}>
                    <Form.Item name="email" rules={[{ required: true, message: 'Please enter your e-mail.' }]}>
                        <EmailInput placeholder="E-mail" type="email" />
                    </Form.Item>
                    <Form.Item name="password" rules={[{ required: true, message: 'Please enter your password.' }]}>
                        <PasswordInput placeholder="Password" type="password" />
                    </Form.Item>
                    {showErrorMessage ? (
                        <WrongEmailText size="13px" weight="bold">
                            Wrong password or e-mail!
                        </WrongEmailText>
                    ) : null}
                    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</Text>
                    <ContinueButton htmlType="submit">
                        <Text color="white" weight="bold" pointer>
                            Register
                        </Text>
                        <img src={whiteArrow} alt="" />
                    </ContinueButton>
                </Form>
            ) : (
                <Form onFinish={handleLogin}>
                    <Form.Item rules={[{ required: true, message: 'LPlease enter your phone number.' }]}>
                        <Input type="tel" placeholder="Phone number" />
                    </Form.Item>
                    <ContinueButton htmlType="submit">
                        <Text color="white" weight="bold">
                            Continue
                        </Text>
                        <img src={whiteArrow} alt="" />
                    </ContinueButton>
                </Form>
            )}
            <Provider provider="email" onClick={() => setShowEmailLogin(true)} />
            <Provider provider="apple" />
            <Provider provider="google" />
            <Provider provider="facebook" />
            <Row style={{ marginTop: '15px' }}>
                <Checkbox checked={subscribe} onClick={() => setSubscribe(!subscribe)}>
                    <Text size="12px">Turn on notifications? Dont miss important messages like new delicious and online experiences</Text>
                </Checkbox>
            </Row>
        </RegisterCardStyles>
    );
};

export default withRouter(RegisterCard);