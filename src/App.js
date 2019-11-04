import React, { Component } from 'react';
// import Xml from "./Xml";
// import Code from "./Code";

export default class App extends Component {
  constructor() {
    super()
  }
  componentWillMount() {
    this.getData()
  }

  getData() {
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest()

    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      console.log(xhr.responseText)
    })
    // open the request with the verb and the url
    xhr.open('GET', ' https://totalcloud-static.s3.amazonaws.com/intern.json')
    // send the request
    xhr.send()
  }

  render() {
    return (
      <div>
        <p>Hello World</p>
      </div>
    )
  }
}
