import React from 'react';
import styled from 'styled-components';
import ActivitiesListContent from "./ActivitiesListContent";

const ActivitiesList = ({activities}) => {

    return (
        <Container>
            {
                activities.items.map((item, index) =>
                    <ActivitiesListContent key={index} {...item}/>
                )
            }
        </Container>
    )
}

const Container = styled.div`
    max-width: 426px;
  padding-left: 20px;
`;

export default ActivitiesList;