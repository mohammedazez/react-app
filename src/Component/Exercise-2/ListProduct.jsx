import React, { useState } from "react";
import Product from "./Product";
import "./Product.css";

function ListProduct() {
  const [makanan, setMakanan] = useState([
    {
      namaMakanan: "Bakso",
      harga: "Rp 10.000",
      img: "https://acegif.com/wp-content/uploads/spaghetti.gif",
    },
    {
      namaMakanan: "Mie Ayam",
      harga: "Rp 10.000",
      img:
        "https://64.media.tumblr.com/b57f5f0029ecc7b8fa46ab250cf0eff3/tumblr_nc5rljURhS1si4e7ko1_250.gif",
    },
    {
      namaMakanan: "Nasi Goreng",
      harga: "Rp 15.000",
      img:
        "https://thumbs.gfycat.com/EcstaticCompleteAsianelephant-max-1mb.gif",
    },
    {
      namaMakanan: "KFC",
      harga: "Rp 50.000",
      img: "https://i.gifer.com/8GkS.gif",
    },
    {
      namaMakanan: "Pizza",
      harga: "Rp 50.000",
      img:
        "https://i.pinimg.com/originals/5b/fc/46/5bfc46d02e21b788cdbf2541ba5931b6.gif",
    },
  ]);

  return (
    <div>
      <h1 className="judul">Daftar Makanan</h1>
      {makanan.map(function (item, index) {
        return <Product item={item} key={index} />;
      })}
    </div>
  );
}

export default ListProduct;
