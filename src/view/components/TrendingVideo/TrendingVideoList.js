import React from 'react';
import styled from 'styled-components';
import TrendingVideoContent from "./TrendingVideoContent";
import TrendingSubMenu from "../TrendingSubMenu";

const TrendingVideoList = ({video}) => {

    return (
            <Container>
                <TrendingSubMenu/>
                <Line/>
                <Content>
                {video.map((item, index) =>
                    <TrendingVideoContent key={index} {...item}/>
                )}
                </Content>
            </Container>

    )
}

const Container = styled.div`
  padding-top: 80px;
  width: 1250px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
    
`;

const Line = styled.div`
  margin: 20px 0;
  border-bottom: 1px solid #ddd;
`;

export default TrendingVideoList;