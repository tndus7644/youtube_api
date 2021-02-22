import React from 'react';
import styled from 'styled-components';
import {FireSvg, HistorySvg, HomeSvg, MenuButtonSvg, StorageSvg, SubscribeSvg} from "../../svg";
import GlobalButton from "../../../styled/Button.Styled";
import {useSelector} from "react-redux";
import cn from 'classnames';

const Sidebar = ({handleSidebar}) => {

    const {sidebar} = useSelector(state => state.app);

    return (
        <Container>
            <Button onClick={handleSidebar}>
                <MenuButtonSvg/>
            </Button>
            <MenuGroup className={cn({isActive: sidebar})}>
                <Button className={"button"}>
                    <HomeSvg/>
                    <p>홈</p>
                </Button>
                <Button className={"button"}>
                    <FireSvg/>
                    <p>인기</p>
                </Button>
                <Button className={"button"}>
                    <SubscribeSvg/>
                    <p>구독</p>
                </Button>
                <Button className={"button"}>
                    <StorageSvg/>
                    <p>보관함</p>
                </Button>
                <Button className={"button"}>
                    <HistorySvg/>
                    <p>시청 기록</p>
                </Button>
            </MenuGroup>
        </Container>
    )
}

const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  height: 100vh;
  width: 75px;
  background: #fff;
`;

const MenuGroup = styled.div`
  position: sticky;
  top: 60px;
  left: 0;
  background: #fff;
  height: 100vh;
  width: 75px;
  
  &.isActive {
  width: 230px;
  align-items: flex-start;

  .button {
    flex-direction: row;

    p {
      padding-left: 20px;
      font-size: 14px;
      color: #333;
    }
  }
}
`;


const Button = styled(GlobalButton)`
  padding: 12px 25px;
  display: flex;
  flex-direction: column;
  font-size: 11px;
  line-height: 1.8;
  color: #777;
  width: 100%;

  svg {
    opacity: 0.5;
  }

  &:hover {
    background: #f1f1f1;
  }

  &:first-child:hover {
    background: none;
  }

`;

export default Sidebar;