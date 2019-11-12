import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Fetch from './Fetch.js';
import Charts from './Charts';

export default class App extends Component {
  state = {
    error: null,
    isLoaded: false,
    results: [],
  };
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
    return (
      <div>
        <h1>Form Chart by data from API</h1>
        <Fetch results={this.state.results} isLoaded={this.state.isLoaded} error={this.state.error}/>
        <Charts results={this.state.results}  />
      </div>
    )
  }
}
