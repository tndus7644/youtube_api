import React, {useEffect} from 'react';
import styled from 'styled-components';
import VideoDetail from "../../components/VideoDetail/VideoDetail";
import {commentsActions, videoActions} from "../../../redux/ActionCreators";
import {useSelector} from "react-redux";
import {ContentContainer} from "../../../styled/Layout.Styled";
import ActivitiesList from "../../components/ActivitiesList/ActivitiesList";

const VideoDetailContainer = ({match}) => {

    const id = match.params.id

    const {detail, activities} = useSelector(state => state.video);

    useEffect(() => {
        videoById();
        getComments();
        activitiesList();
    }, [id])


    const videoById = () => {
        videoActions.getVideoById({
            id,
            part: 'snippet,statistics'
        })
    }

    const getComments = () => {
        commentsActions.commentsList({
            part: 'snippet',
            videoId: id,
            maxResults: 10
        })
    }

    const activitiesList = () => {
        videoActions.getActivitiesVideos({})
    }

    if (!detail) return null;

    return (
        <Container>
            <VideoDetail id={id}
                         snippet={detail.video.items[0]?.snippet}
                         statistics={detail.video.items[0]?.statistics}
                         channel={detail.channel.items[0]}
            />
            <ActivitiesList activities={activities}/>
        </Container>
    )
}

const Container = styled(ContentContainer)`
  padding-top: 80px;
  justify-content: center;
`;

export default VideoDetailContainer;