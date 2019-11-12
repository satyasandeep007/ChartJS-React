import React, { Component } from 'react';


export default class Item extends Component {
    render() {
        return (
            <div className="main">

                <div className="sideone">
                    <ol className="list-group" id="">
                        <li className="list-group-item" style={{
                            backgroundColor: this.props.isComplete ? "#25CCF7" : "",
                            color: this.props.isComplete ? "white" : ""
                        }}
                        >
                            <div className="d-flex justify-content-start">
                                <div className="d-flex p-2">{this.props.id} </div>
                                <div className="d-flex p-2">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" defaultChecked={this.props.isComplete} ></input>
                                    </div>
                                </div>
                                <a className="d-flex p-2"
                                    href="https://www.freeiconspng.com/img/4067"><img src=
                                        "https://www.freeiconspng.com/uploads/phone-contacts-icon-25.png"
                                        width="30" height="30" alt="Phone Contacts Icon" />
                                </a>
                                <div className="d-flex p-2">{this.props.name}</div>
                            </div>
                        </li>
                    </ol>
                </div>
                <div className="sidetwo">
                    <ol className="list-group" id="">
                        <li className="list-group-item" style={{
                            backgroundColor: this.props.isComplete ? "#25CCF7" : "",
                            color: this.props.isComplete ? "white" : ""
                        }}
                        >
                            <div className="d-flex justify-content-between">
                                <div className="d-flex p-2">{this.props.start}</div>
                                <div className="d-flex p-2">{this.props.end}</div>
                            </div>
                        </li>
                    </ol>
                </div>
            </div >
        )
    }
}
