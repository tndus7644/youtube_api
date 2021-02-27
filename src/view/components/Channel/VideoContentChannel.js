import React, {useEffect} from 'react';
import styled from 'styled-components';
import {channelActions} from "../../../redux/ActionCreators";
import {useSelector} from "react-redux";

const VideoContentChannel = ({snippet, id}) => {

    const channelId = [
       snippet.channelId || id
]


    const {channel} = useSelector(state => state.channel);

    // useEffect(() => {
    //     channelInfo();
    // }, [])

    const channelLength = () => {
    }

    const channelInfo = () => {
        channelActions.channelList({
        })
    }

    console.log("channelId", channelId)

    return (
        <Container>
            {/*{channel.items.map((item, index) =>*/}
            {/*    <ChannelBox key={index}>*/}
            {/*        <img src={item?.snippet?.thumbnails?.default?.url} alt=""/>*/}
            {/*    </ChannelBox>*/}
            {/*)}*/}
        </Container>
    )
}

const Container = styled.div`
    
`;

const ChannelBox = styled.div`
    
`;


export default VideoContentChannel;