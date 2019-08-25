import React from "react";
import ProductCard from "./ProductCard";

const prods = [
  {
    id: 1,
    name: "Detergent Chemicals",
    img: "https://drive.google.com/uc?id=1uyTXlgUc8nwm7f7z-DOY9E3JwNs-pkx-"
  },
  {
    id: 2,
    name: "Industrial Chemicals",
    img: "https://drive.google.com/uc?id=1fBF6mzzcoa1s-N_Fk95GXJKsq63fxhDi"
  },
  {
    id: 3,
    name: "Leather Tanning Chemicals",
    img: "https://drive.google.com/uc?id=1xma7V3yoEd6g8BU4EwUIsQqwV8ywtyIc"
  },

  {
    id: 5,
    name: "Textile Dyeing Chemicals",
    img: "https://drive.google.com/uc?id=1p_pI143Fl8tECPHadkjqPogOoNBbaYnF"
  },
  {
    id: 6,
    name: "Plastic Chemicals & PVC additives",
    img: "https://drive.google.com/uc?id=1re8aUlu70E1gKIoHXApokRAR-5fyV4It"
  },
  {
    id: 4,
    name: "Paint & Coating Chemicals",
    img: "https://drive.google.com/uc?id=1fBmq4E53al_UPkqcKaYwt91wT5aHVC_u"
  }
];

const Products = () => {
  return (
    <div id="products">
      <div className="py-5" />
      <h2
        className="text-center text-primary display-3 mt-5 mb-5"
        data-aos="zoom-in-up"
      >
        Our Products
      </h2>
      <div className="row justify-content-around container mx-auto pb-5 mb-5">
        {prods.map(p => (
          <ProductCard value={p} key={p.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
