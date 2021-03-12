import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {ContentContainer} from "../../../styled/Layout.Styled";
import Sidebar from "../../components/Sidebar/Sidebar";
import TrendingVideoList from "../../components/TrendingVideo/TrendingVideoList";
import Observer from "../../components/Observer";
import {useSelector} from "react-redux";
import {videoActions} from "../../../redux/ActionCreators";

const TrendingContainer = () => {

    const {list, isLoading, hasMore} = useSelector(state => state.video);

    const [page, setPage] = useState(1);

    useEffect(() => {
        videoActions.getVideos({
            maxResults: 15,
            chart: 'mostPopular',
            part: 'snippet, id, contentDetails, player, statistics',
            regionCode: 'KR',
        })
    }, [page])

    const onEnter = () => {
        setPage(prevPage => prevPage + 1);
    }

    return (
        <Container className={"TrendingVideoListContainer"}>
            <Sidebar/>
            <Observer
                      className={"Observer"}
                      isLoading={isLoading}
                      hasMore={hasMore}
                      initilized={list.items.length > 0}
                      onEnter={onEnter}
            >
                <TrendingVideoList video={list.items} shape={"home"}/>
            </Observer>
        </Container>
    )
}

const Container = styled(ContentContainer)`
  position: relative;
  
`;

export default TrendingContainer;