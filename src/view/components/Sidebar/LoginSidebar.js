import React from 'react';
import styled from 'styled-components';
import cn from "classnames";
import {LogoutSvg} from "../../svg";
import GlobalButton from "../../../styled/Button.Styled";
import {authActions} from "../../../redux/ActionCreators";
import {useGoogleLogout} from "react-google-login";
import {GOOGLE_CLIENT_ID} from "../../../constants/Consts";
import {useSelector} from "react-redux";

const LoginSidebar = () => {

    const {isLoggedIn, profileObj} = useSelector(state => state.auth);
    const {memberSidebar} = useSelector(state => state.app);

    const onLogoutSuccess = (res) => {
        console.log(res)
        authActions.updateState({
            profileObj: undefined,
            isLoggedIn: false
        })
    }

    const onFailure = (err) => {
        console.log(err)
        authActions.updateState({
            profileObj: undefined,
            isLoggedIn: false
        })
    }

    const {signOut} = useGoogleLogout({
        clientId: GOOGLE_CLIENT_ID,
        cookiePolicy: 'single_host_origin',
        isSignedIn: true,
        onLogoutSuccess,
        onFailure
    })

    if(!isLoggedIn) return null;

    return(
        <Container className={"LoginSidebar"}>
            <MemberSidebar className={cn({show: memberSidebar})}>
                <UserInfo>
                    <img src={profileObj?.imageUrl} alt=""/>
                    <InfoGroup>
                        <h2>{profileObj?.name}</h2>
                        <h3>{profileObj?.email}</h3>
                        <p>Google 계정 관리</p>
                    </InfoGroup>
                </UserInfo>
                <Logout onClick={signOut}>
                    <LogoutSvg/>
                    <p>로그아웃</p>
                </Logout>
            </MemberSidebar>
        </Container>
    )
}

const Container = styled.div`

`;


const MemberSidebar = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  width: 300px;
  background: rgba(255, 255, 255, 0.98);
  flex-direction: column;
  display: none;
  z-index: 1200;

  &.show {
    display: flex;
  }
`;

const UserInfo = styled.div`
  background: #fff;
  display: flex;
  width: 100%;
  padding: 20px 15px;
  border-bottom: 1px solid #ddd;

  img {
    border-radius: 50%;
    max-width: 45px;
    max-height: 45px;
  }
`;

const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;

  h2 {
    font-weight: bold;
  }

  h3 {
    line-height: 1.7;
  }

  p {
    color: #106BC4;
    font-size: 14px;
    padding: 8px 0;
  }
`;

const Logout = styled(GlobalButton)`
  display: flex;
  align-items: center;
  padding: 9px 15px;
  width: 100%;

  p {
    padding-left: 10px;
  }

  &:hover {
    background: #f1f1f1;
  }
`;

export default LoginSidebar;