import ProviderStyles, { Text, Img, Item } from './styles';
import Email from '../../../assets/common/login/email.svg';
import Apple from '../../../assets/common/login/apple.svg';
import Google from '../../../assets/common/login/google.svg';
import Facebook from '../../../assets/common/login/facebook.svg';

const Provider = ({ provider, onClick }) => {
    let providerImage = null;
    let text = null;
    switch (provider) {
        case 'email':
            providerImage = Email;
            text = 'Continue with E-mail';
            break;
        case 'apple':
            providerImage = Apple;
            text = 'Continue with Apple';
            break;
        case 'google':
            providerImage = Google;
            text = 'Continue with Google';
            break;
        default:
            providerImage = Facebook;
            text = 'Continue with Facebook';
            break;
    }
    return (
        <ProviderStyles onClick={onClick}>
            <Img src={providerImage} alt="provider" />
            <Item span={20}>
                <Text>{text}</Text>
            </Item>
        </ProviderStyles>
    );
};

export default Provider;
