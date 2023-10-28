import { useState } from 'react';
import { GrSearch } from 'react-icons/gr';
import {
  SearchForm,
  SearchInput,
  SearchButton,
  SearchSpan,
  SearchLogo,
} from './SarchBar.styled';

export const SearchBar = ({ onSubmit }) => {
    const [searchName, setSearchName] = useState('')
    const [inputValue, setInputValue] = useState('')

const handleChange = event => setInputValue(event.target.value);
    
const handleSubmit = event => {
    event.preventDefault();
    setSearchName(inputValue.trim());
    onSubmit(searchName);
    event.target.reset()
}

    return (
        <header>
            <SearchForm onSubmit={handleSubmit}>
                <a href="https://pixabay.com/" target="_blank" rel="noreferrer">
                <SearchLogo
                    src={require('./pixabay-logo.png')}
                    alt="logo"
                    width="200"
                />
                </a>
                <SearchButton>
                    <GrSearch />
                        <SearchSpan>Search</SearchSpan>
                </SearchButton>
                    <SearchInput
                        name="searchName"
                        type="text"
                        id="search"
                        value={inputValue}
                        onChange={handleChange}
                    />
                </SearchForm>
            </header>
        );
};
