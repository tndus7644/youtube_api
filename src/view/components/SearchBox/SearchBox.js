import React, {useState} from 'react';
import styled from 'styled-components';
import {SearchSvg} from "../../svg";
import {navigate} from "../../../lib/History";
import GlobalButton from "../../../styled/Button.Styled";

const SearchBox = () => {

    const [value, setValue] = useState('');

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${value}`)
    }

    return (
        <Container>
            <Form onSubmit={onSubmit}>
                <Label>
                    <Input type="text"
                           placeholder="검색"
                           value={value}
                           onChange={onChange}
                    />
                    <SearchButton>
                        <SearchSvg/>
                    </SearchButton>
                </Label>
            </Form>
        </Container>
    )
}

const Container = styled.div`
  width: 600px;
`;

const Form = styled.form`
  width: 100%;
  display: block;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  height: 30px;
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid #ddd;
`;

const Input = styled.input`
  border: none;
  background: none;
  height: 100%;
  flex: 1;
  padding: 3px 6px;

  &:focus {
    outline: 0;
  }
`;

const SearchButton = styled(GlobalButton)`
  background: #eee;
  height: 100%;
  cursor: pointer;
  padding: 3px 16px;
  border: none;

  svg {
    width: 20px;
    fill: #888;
  }
`;

export default SearchBox;