import React from 'react';
import styled from 'styled-components';
import ActivitiesListContent from "./ActivitiesListContent";
import GridList from "../GridList";

const ActivitiesList = ({activities}) => {

    const renderItem = (item) => <ActivitiesListContent {...item}/>

    return (
        <Container>
            <GridList data={activities.items}
                      render={renderItem}
            />
        </Container>
    )
}

const Container = styled.div`
    max-width: 426px;
  padding-left: 20px;
`;

export default ActivitiesList;