import React from 'react';
import styled from 'styled-components';
import CommentInfo from "./CommentInfo";
import cn from 'classnames'

const RepliesComments = ({snippet, shape, more}) => {


    return(
        <Container className={cn({more})}>
            <RepliesCommentsInfo snippet={snippet} shape={shape}/>
        </Container>
    )
}

const Container = styled.div`
  margin-left: 20px;
  padding-top: 10px;
  display: none;
  
    &.more{
      display: block;
    }
  
`;

const RepliesCommentsInfo = styled(CommentInfo)`
    
`;

export default RepliesComments;