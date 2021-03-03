import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {searchActions} from "../../../redux/ActionCreators";
import {useSelector} from "react-redux";
import Sidebar from "../../components/Sidebar/Sidebar";
import VideoList from "../../components/VideoList/VideoList";
import {ContentContainer} from "../../../styled/Layout.Styled";
import Observer from "../../components/Observer";

const SearchContainer = ({match}) => {

    const query = match.params.query;
    const [page, setPage] = useState(1);

    useEffect(() => {
        searchVideo();
    }, [query])

    useEffect(() => {
        searchMoreVideo();
    },[page])

    const {searchResults, hasMore, isLoading} = useSelector(state => state.search);

    const searchVideo = () => {
        searchActions.searchVideo({
            q: query,
            maxResults: 6,
            part: 'snippet',
            pageToken: searchResults?.nextPageToken
        })
    }

    const searchMoreVideo = () => {
        searchActions.searchVideoMore({
            q: query,
            maxResults: 6,
            part: 'snippet',
            pageToken: searchResults?.nextPageToken
        })
    }

    const onEnter = () => {
        setPage(prevPage => prevPage + 1);
    }

    return (
        <Container className={"SearchContainer"}>
            <Sidebar/>
            <Observer
                isLoading={isLoading}
                hasMore={hasMore}
                initilized={searchResults?.items.length > 0}
                onEnter={onEnter}
            >
                <VideoList video={searchResults?.items} shape={"search"}/>
            </Observer>
        </Container>
    )
}

const Container = styled(ContentContainer)`
  position: relative;
`;


export default SearchContainer;