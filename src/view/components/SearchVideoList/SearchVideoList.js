import React from 'react';
import styled from 'styled-components';
import SearchVideoContent from "./SearchVideoContent";

const SearchVideoList = ({searchVideo}) => {

    console.log("searchVideo", searchVideo)

    return (
        <Container>
            {searchVideo.map((item, index) =>
                <SearchVideoContent key={index} {...item}/>
            )}
        </Container>
    )
}

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export default SearchVideoList;