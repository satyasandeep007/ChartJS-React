import React, { Component } from 'react';

export default class Fetch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            results: []
        };
    }

    componentDidMount() {
        fetch("https://raw.githubusercontent.com/satyasandeep007/api-total-cloud/master/intern.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        results: result.results
                    });
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, results } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="fetch-main">
                    <ul>
                        {results.map(item => (
                            <li key={item.id}>
                                <div>{item.id}</div>
                                <div>{item.name}</div>
                                <div>{item.start}</div>
                                <div>{item.end}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}