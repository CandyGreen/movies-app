import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Spinner from './components/Spinner/Spinner';
import Movies from './components/Movies/Movies';
import FullMovie from './components/FullMovie/FullMovie';
import * as actions from './store/actions';

class App extends Component {
    state = {
        search: ''
    }

    onChangeHandler = event => {
        this.setState({ search: event.target.value });
    }

    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path="/:id" render={() => <FullMovie movies={this.props.movies} />} />
                    
                    <Route path="/" exact render={() => {
                        return this.props.isLoading
                            ? <Spinner />
                            : <Movies
                                search={this.state.search}
                                movies={this.props.movies}
                                currentPage={this.props.currentPage}
                                totalPages={this.props.totalPages}
                                isLoading={this.props.isLoading}
                                changed={this.onChangeHandler}
                                getMovies={this.props.getMovies} />;
                    }} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movies,
        currentPage: state.currentPage,
        totalPages: state.totalPages,
        isLoading: state.isLoading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getMovies: (searchString, page) => dispatch(actions.getMovies(searchString, page))
    };
};

App.propTypes = {
    movies: PropTypes.array,
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number,
    isLoading: PropTypes.bool.isRequired,
    getMovies: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
