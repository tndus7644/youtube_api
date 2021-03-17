import React from 'react';
import styled from 'styled-components';

const GridList = ({data=[], render}) => {

    return(
        <Container>
            <Row>
                {
                    data.map((item, index) =>
                        <Col key={index}>
                            {render(item)}
                        </Col>)
                }
            </Row>
        </Container>
    )
}

const Container = styled.div`

`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
`;

const Col = styled.div`
  width: 100%;
`;
export default GridList;