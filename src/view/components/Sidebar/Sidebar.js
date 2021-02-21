import React from 'react';
import styled from 'styled-components';
import {FireSvg, HistorySvg, HomeSvg, StorageSvg, SubscribeSvg} from "../../svg";
import GlobalButton from "../../../styled/Button.Styled";

const Sidebar = () => {

    return (
        <Container>
                <Button>
                    <HomeSvg/>
                    <p>홈</p>
                </Button>
                <Button>
                    <FireSvg/>
                    <p>인기</p>
                </Button>
                <Button>
                    <SubscribeSvg/>
                    <p>구독</p>
                </Button>
                <Button>
                    <StorageSvg/>
                    <p>보관함</p>
                </Button>
                <Button>
                    <HistorySvg/>
                    <p>시청 기록</p>
                </Button>
        </Container>
    )
}

const Container = styled.div`
  position: sticky;
  top: 60px;
  left: 0;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 220px;
  height: 100vh;
  background: #fff;
`;

const Button = styled(GlobalButton)`
  width: 100%;
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  font-size: 11px;
  line-height: 1.8;
  color: #777;

  svg {
    fill: #666;
  }

  &:hover {
    background: #f1f1f1;
  }
`;

export default Sidebar;