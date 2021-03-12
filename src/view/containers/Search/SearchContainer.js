import React, {useEffect} from 'react';
import styled from 'styled-components';
import {searchActions} from "../../../redux/ActionCreators";
import {useSelector} from "react-redux";
import Sidebar from "../../components/Sidebar/Sidebar";
import VideoList from "../../components/VideoList/VideoList";
import {ContentContainer} from "../../../styled/Layout.Styled";

const SearchContainer = ({match}) => {

    const query = match.params.query;

    const {searchResults} = useSelector(state => state.search);

    useEffect(() => {
        searchActions.searchVideo({
            q: query,
            maxResults: 10,
            part: 'snippet',
        })
    }, [query])

    return (
        <Container className={"SearchContainer"}>
            <Sidebar/>
                <VideoList video={searchResults?.items} shape={"search"}/>
        </Container>
    )
}

const Container = styled(ContentContainer)`
  position: relative;
`;


export default SearchContainer;