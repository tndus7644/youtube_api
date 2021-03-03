import React from 'react';
import styled from 'styled-components';
import {DotMenuSvg, ServiceButtonSvg} from "../../svg";
import GlobalButton from "../../../styled/Button.Styled";

const HeaderNav = () => {

    return(
        <Container>
            <ButtonGroup>
                <Button>
                    <ServiceButtonSvg/>
                </Button>
                <Button>
                    <DotMenuSvg/>
                </Button>
            </ButtonGroup>
        </Container>
    )
}

const Container = styled.div`
padding: 0 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
`;

const Button = styled(GlobalButton)`
  cursor: pointer;
    svg{
      width: 30px;
    }
`;

export default HeaderNav;