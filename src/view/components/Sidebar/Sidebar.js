import React from 'react';
import styled from 'styled-components';
import {FireSvg, HistorySvg, HomeSvg, MenuButtonSvg, StorageSvg, SubscribeSvg} from "../../svg";
import GlobalButton from "../../../styled/Button.Styled";
import {useSelector} from "react-redux";
import cn from 'classnames';

const Sidebar = () => {

    const {sidebar} = useSelector(state => state.app);

    return (
        <Container>
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
  position: relative;
`;


const MenuGroup = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  padding-top: 60px;
  width: 75px;
  height: 100vh;
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;

  &.isActive {
    width: 210px;
    align-items: flex-start;

    .button {
      flex-direction: row;

      svg {
        margin-left: 24px;
      }

      p {
        padding-left: 10px;
        font-size: 14px;
        color: #333;
      }
    }

  }
`;


const Button = styled(GlobalButton)`
  padding: 18px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  width: 100%;

  p {
    font-size: 11px;
    color: #555;
    line-height: 1.6;
  }

  svg {
    opacity: 0.6;
  }

  &:hover {
    background: #f1f1f1;
    width: 100%;
  }

`;

export default Sidebar;