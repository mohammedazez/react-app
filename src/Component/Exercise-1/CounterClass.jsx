import React, { Component } from "react";
import "./Counter.css";
import { MDBBtn, MDBBtnGroup, MDBCol } from "mdbreact";

export default class CounterClass extends Component {
  state = {
    countNum: 0,
  };
  // Function untuk menambah angka
  increment = () => {
    this.setState({
      countNum: this.state.countNum + 1,
    });
  };

  // Function untuk mengurangi angka
  dicrement = () => {
    if (this.state.countNum > 0) {
      this.setState({
        countNum: this.state.countNum - 1,
      });
    }
  };

  render() {
    return (
      <div>
        <h1 className="judul">Let's create Counter using Class</h1>
        <MDBCol md="12" className="mb-4 container">
          <MDBBtnGroup className="container" size="lg">
            <MDBBtn color="unique" onClick={this.dicrement}>
              Kurangi
            </MDBBtn>
            <MDBBtn color="unique">{this.state.countNum}</MDBBtn>
            <MDBBtn color="unique" onClick={this.increment}>
              Tambah
            </MDBBtn>
          </MDBBtnGroup>
          <hr />
        </MDBCol>
      </div>
    );
  }
}
