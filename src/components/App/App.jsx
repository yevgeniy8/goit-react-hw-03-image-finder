import { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';

import { pixabayApi } from 'helpers/pixabay-api';

import { WrapperApp } from './App.styled';

export class App extends Component {
    state = {
        text: '',
        collections: [],
        page: 1,
        totalPage: 0,
        isLoading: false,
        largeImageURL: '',
        showModal: false,
    };

    async componentDidUpdate(prevProps, prevState) {
        if (
            prevState.text !== this.state.text ||
            this.state.page !== prevState.page
        ) {
            try {
                this.setState({
                    isLoading: true,
                });
                const data = await pixabayApi(this.state.text, this.state.page);
                const totalPage = data.total / 12;
                setTimeout(() => {
                    this.setState(state => {
                        return {
                            collections: [...state.collections, ...data.hits],
                            totalPage,
                            isLoading: false,
                        };
                    });
                }, 1000);
            } catch (error) {
                console.log(error);
            }
        }
    }

    addInputValue = text => {
        this.setState({
            text,
            page: 1,
            collections: [],
        });
    };

    onClickButton = () => {
        this.setState(prevState => {
            return {
                page: prevState.page + 1,
            };
        });
    };

    toggleModal = () => {
        this.setState(({ showModal }) => ({ showModal: !showModal }));
    };

    openModal = id => {
        this.setState({ isLoading: true });
        const largeImage = this.state.collections.find(item => item.id === id);

        setTimeout(() => {
            this.setState({
                largeImageURL: largeImage.largeImageURL,
                isLoading: false,
            });
            this.toggleModal();
        }, 500);
    };

    render() {
        return (
            <WrapperApp>
                <Searchbar onSubmit={this.addInputValue} />

                {this.state.isLoading && <Loader />}

                {this.state.collections.length > 0 && (
                    <>
                        <ImageGallery
                            collections={this.state.collections}
                            openModal={this.openModal}
                        />
                        {this.state.page < this.state.totalPage && (
                            <Button onClick={this.onClickButton} />
                        )}
                    </>
                )}
                {this.state.showModal && (
                    <Modal
                        largeImageURL={this.state.largeImageURL}
                        onClose={this.toggleModal}
                    />
                )}
            </WrapperApp>
        );
    }
}
