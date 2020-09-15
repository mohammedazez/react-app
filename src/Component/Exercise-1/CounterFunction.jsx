import React, { useState } from "react";
import "./Counter.css";
import { MDBBtn, MDBBtnGroup, MDBCol } from "mdbreact";

function CounterFunction() {
  // Method angka
  const [countNum, setCountNum] = useState(0);
  // method angka dikurangi
  const dikurangi = () => {
    if (countNum > 0) {
      setCountNum(countNum - 1);
    }
  };

  // Method angka ditambah
  const ditambah = () => {
    setCountNum(countNum + 1);
  };

  return (
    <div>
      <h1 className="judul">Let's create Counter using Function</h1>
      <MDBCol md="12" className="mb-4 container">
        <MDBBtnGroup className="container" size="lg">
          <MDBBtn color="unique" onClick={dikurangi}>
            Kurangi
          </MDBBtn>
          <MDBBtn color="unique">{countNum}</MDBBtn>
          <MDBBtn color="unique" onClick={ditambah}>
            Tambah
          </MDBBtn>
        </MDBBtnGroup>
        <hr />
      </MDBCol>
    </div>
  );
}

export default CounterFunction;
