import React, { Component } from 'react';
import Item from "./Item";

export default class Fetch extends Component {

    render() {
        const { error, isLoaded, results } = this.props;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="fetch-main">
                    <ul>
                        {results.map(item => (
                            <Item id={item.id} name={item.name}
                                start={item.start} end={item.end} />
                        ))}
                    </ul>
                </div>
            );
        }
    }
}