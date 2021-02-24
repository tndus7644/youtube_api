import React,{useEffect} from 'react';
import styled from 'styled-components';
import {searchActions} from "../../redux/ActionCreators";
import {useSelector} from "react-redux";
import Sidebar from "../components/Sidebar/Sidebar";
import VideoList from "../components/VideoList/VideoList";

const SearchContainer = ({match}) => {

    const query = match.params.query;

    useEffect(() => {
        search();
    },[query])

    const search = () => {
        searchActions.searchVideo({
            q:query
        })
    }

    const {searchResults} = useSelector(state => state.search);

    return (
        <Container>
            <Sidebar/>
            <VideoList video={searchResults?.items} shape={"search"}/>
        </Container>
    )
}

const Container = styled.div`
  background: #f9f9f9;
  display: flex;
`;


export default SearchContainer;