import React from 'react';
import styled from 'styled-components';
import GlobalButton from "../../../styled/Button.Styled";
import {LoginSvg} from "../../svg";

const Login = () => {

    return(
        <Container>
            <LoginBtn>
                <LoginSvg/>
                <p>로그인</p>
            </LoginBtn>
        </Container>
    )
}

const Container = styled.div`

`;

const LoginBtn = styled(GlobalButton)`
    border: 1px solid #106bc4;
    padding: 6px 13px;
    border-radius: 2px;
    color: #106BC4;
    display:flex;
    align-items: center;
    
    svg{
    fill:#106BC4;
    opacity: 1;
    }
    
    p{
    padding-left: 5px;
    }
`;

export default Login;