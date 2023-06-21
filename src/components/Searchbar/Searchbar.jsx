import { Component } from 'react';

import Notiflix from 'notiflix';

import PropTypes from 'prop-types';

import {
    Header,
    SearchForm,
    SearchFormButton,
    // Label,
    Input,
    StyledIcon,
} from './Searchbar.styled';

class Searchbar extends Component {
    state = {
        text: '',
    };

    handleChange = evt => {
        this.setState({
            text: evt.target.value,
        });
    };

    handleSubmit = evt => {
        evt.preventDefault();
        if (this.state.text.trim() === '') {
            Notiflix.Notify.failure('Введите что то в поиск');
            return;
        }
        this.props.onSubmit(this.state.text);
        this.setState({
            text: '',
        });
    };

    render() {
        return (
            <Header>
                <SearchForm onSubmit={this.handleSubmit}>
                    <SearchFormButton type="submit">
                        {/* <Label>Search</Label> */}
                        <StyledIcon />
                    </SearchFormButton>

                    <Input
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                </SearchForm>
            </Header>
        );
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
