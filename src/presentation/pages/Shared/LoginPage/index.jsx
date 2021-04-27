import { useState } from 'react';
import LoginPageStyles, { Content, Item } from './styles';
import LoginCard from './LoginCard/index';
// import bg from '../../../../assets/background/login-background.png';
// import video from '../../../../assets/background/customer-background.mp4';

const LoginPage = () => {
    const [showEmailLogin, setShowEmailLogin] = useState(false);
    return (
        <LoginPageStyles>
            <Content justify="center">
                <Item xs={24}>
                    <LoginCard setShowEmailLogin={setShowEmailLogin} showEmailLogin={showEmailLogin} />
                </Item>
            </Content>
        </LoginPageStyles>
    );
};

export default LoginPage;
