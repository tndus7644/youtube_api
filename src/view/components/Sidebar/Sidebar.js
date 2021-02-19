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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  width: 72px;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
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