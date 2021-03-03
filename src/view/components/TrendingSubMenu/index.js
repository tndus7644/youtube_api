import React from 'react';
import styled from 'styled-components';
import Images from "../../../images/Images";

const TrendingSubMenu = () => {

    return(
        <Container>
            <div>
                <img src={Images.musicIcon} alt=""/>
                <span>음악</span>
            </div>
            <div>
                <img src={Images.gameIcon} alt=""/>
                <span>게임</span>
            </div>
            <div>
                <img src={Images.movieIcon} alt=""/>
                <span>영화</span>
            </div>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 500px;
  
  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    
    img{
      border-radius: 50%;
    }
    
    span{
      padding-top: 10px;
      font-size: 14px;
      color: #666;
    }
  }
`;

export default TrendingSubMenu;