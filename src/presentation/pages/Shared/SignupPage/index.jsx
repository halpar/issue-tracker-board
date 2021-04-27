import { useState } from 'react';
import SignupPageStyles, { Content, Item } from '../LoginPage/styles';
import RegisterCard from './RegisterCard';
// import bg from '../../../../assets/background/login-background.png';
// import video from '../../../../assets/background/customer-background.mp4';

const SignupPage = () => {
    const [showEmailLogin, setShowEmailLogin] = useState(false);
    return (
        <SignupPageStyles>
            <Content justify="center">
                <Item xs={24}>
                    <RegisterCard setShowEmailLogin={setShowEmailLogin} showEmailLogin={showEmailLogin} />
                </Item>
            </Content>
        </SignupPageStyles>
    );
};

export default SignupPage;
