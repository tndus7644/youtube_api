import React from 'react';
import styled from 'styled-components';
import SearchContainer from "../containers/SearchContainer";

const Search = ({match}) => {

    return(
        <Container>
            <SearchContainer match={match}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default Search;