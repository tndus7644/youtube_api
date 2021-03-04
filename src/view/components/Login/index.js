import React from 'react';
import styled from 'styled-components';
import GlobalButton from "../../../styled/Button.Styled";
import {LoginSvg} from "../../svg";
import {useGoogleLogin} from "react-google-login";
import {GOOGLE_CLIENT_ID} from '../../../constants/Consts'
import {appActions, authActions} from "../../../redux/ActionCreators";
import {useSelector} from "react-redux";
import LoginSidebar from "../Sidebar/LoginSidebar";

const Login = () => {

    const {isLoggedIn, profileObj} = useSelector(state => state.auth);
    const {memberSidebar} = useSelector(state => state.app);

    const handleSidebar = () => {
        appActions.updateState({
            memberSidebar:!memberSidebar
        })
    }

    const onSuccess = ({profileObj}) => {
        authActions.updateState({
            profileObj,
            isLoggedIn: true
        })
    }

    const onFailure = (err) => {
        console.log(err)
        authActions.updateState({
            profileObj: undefined,
            isLoggedIn: false
        })
    }


    const {signIn, loaded} = useGoogleLogin({
        clientId: GOOGLE_CLIENT_ID,
        cookiePolicy: 'single_host_origin',
        isSignedIn: true,
        onSuccess,
        onFailure
    })


    if (!loaded) return <div style={{minWidth: '80px'}}/>

    return (
        <Container>
            {
                isLoggedIn
                    ?
                    <User onClick={handleSidebar}>
                        <img src={profileObj?.imageUrl} alt=""/>
                    </User>
                    :
                    <LoginBtn onClick={signIn}>
                        <LoginSvg/>
                        <p>로그인</p>
                    </LoginBtn>
            }
            <LoginSidebar/>
        </Container>
    )
}

const Container = styled.div`
`;

const User = styled.div`
  cursor: pointer;

  img {
    max-width: 35px;
    max-height: 35px;
    border-radius: 50%;
  }
`;

const LoginBtn = styled(GlobalButton)`
  border: 1px solid #106bc4;
  padding: 6px 13px;
  border-radius: 2px;
  color: #106BC4;
  display: flex;
  align-items: center;

  svg {
    fill: #106BC4;
    opacity: 1;
  }

  p {
    padding-left: 5px;
  }
`;

export default Login;