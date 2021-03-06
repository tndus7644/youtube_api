import React from 'react';
import styled from 'styled-components';
import SearchContainer from "../containers/Search/SearchContainer";

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