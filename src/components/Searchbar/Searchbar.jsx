import { Component } from 'react';

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
        this.props.onSubmit(this.state.text);
        this.setState({
            text: '',
        });
    };

    render() {
        return (
            <header className="searchbar">
                <form className="form" onSubmit={this.handleSubmit}>
                    <button type="submit" className="button">
                        <span className="button-label">Search</span>
                    </button>

                    <input
                        className="input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                </form>
            </header>
        );
    }
}

export default Searchbar;
