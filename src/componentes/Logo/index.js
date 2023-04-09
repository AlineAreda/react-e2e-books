import logo from '../../imagens/logo.svg'
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    font-size: 25px; 
    color: #3F3F3F; 
    align-items: center;   
`
const LogoImage = styled.img`
    display: flex;
    margin-right: 5px;   
    width: 80px;
`
function Logo() {
    return (
        <LogoContainer>
            <LogoImage
                src={logo}
                alt='logo'
            />
        </LogoContainer>
    )
}

export default Logo