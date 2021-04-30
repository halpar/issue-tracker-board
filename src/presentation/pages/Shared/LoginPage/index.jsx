import { useState, useContext } from 'react';
import LoginPageStyles, { Content, Item } from './styles';
import LoginCard from './LoginCard/index';

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
