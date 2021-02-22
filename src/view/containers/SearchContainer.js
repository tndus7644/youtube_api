import React,{useEffect} from 'react';
import styled from 'styled-components';
import SearchVideoList from "../components/SearchVideoList/SearchVideoList";
import {searchActions} from "../../redux/ActionCreators";
import {useSelector} from "react-redux";
import Sidebar from "../components/Sidebar/Sidebar";

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

    console.log("query", query)

    const {searchResults} = useSelector(state => state.search);


    return (
        <Container>
            <Sidebar/>
            <SearchVideoList searchVideo={searchResults?.items}/>
        </Container>
    )
}

const Container = styled.div`
  background: #f9f9f9;
  display: flex;
`;


export default SearchContainer;