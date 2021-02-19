import React from 'react';
import styled from 'styled-components';
import {DotMenuSvg, ServiceButtonSvg} from "../../svg";
import GlobalButton from "../../../styled/Button.Styled";

const Nav = () => {

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

`;

const ButtonGroup = styled.div`
  display: flex;
`;

const Button = styled(GlobalButton)`
  cursor: pointer;
    svg{
      width: 30px;
      fill:#666;
    }
`;

export default Nav;