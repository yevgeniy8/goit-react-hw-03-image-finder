import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export class App extends Component {
    addInputValue = text => {
        console.log(text);
    };

    render() {
        return (
            <div
            //   style={{
            //     height: '100vh',
            //     display: 'flex',
            //     justifyContent: 'center',
            //     alignItems: 'center',
            //     fontSize: 40,
            //     color: '#010101'
            //   }}
            >
                <Searchbar onSubmit={this.addInputValue} />
                <ImageGallery />
            </div>
        );
    }
}
