import React, {useEffect} from 'react';
import styled from 'styled-components';
import VideoDetail from "../components/VideoDetail/VideoDetail";
import {channelActions, videoActions} from "../../redux/ActionCreators";
import {useSelector} from "react-redux";
import {ContentContainer} from "../../styled/Layout.Styled";

const VideoContainer = ({match}) => {

    const id = match.params.id

    const {video} = useSelector(state => state.video);

    const videoById = () => {
        videoActions.getVideo({
            id,
            part: 'snippet,statistics'
        })
    }

    const channelId = video.items[0]?.snippet?.channelId

    const channelList = () => {
        channelActions.channelList({
            id: channelId,
            part:'snippet,statistics'
        })
    }

    const {channel} = useSelector(state => state.channel);

    useEffect(() => {
        videoById();
        channelList();
    }, [channelId])

    return (
        <Container>
            <VideoDetail id={id}
                         snippet={video.items[0]?.snippet}
                         statistics={video.items[0]?.statistics}
                         channel={channel.items[0]}
            />
        </Container>
    )
}

const Container = styled(ContentContainer)`

`;

export default VideoContainer;