import React from "react";
import "./Product.css";

class product extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="container-utama">
        <div className="card">
          <img src={this.props.item.img} alt="props" />
          <div className="container">
            <h1>{this.props.item.namaMakanan} -</h1>
            <br />
            <h1> harganya {this.props.item.harga}</h1>
          </div>
        </div>
      </div>
    );
  }
}
export default product;
