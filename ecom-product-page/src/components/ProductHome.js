import React, { useState } from "react";
import "./producthome.css";
import QtyButton from "./QtyButton";
import Add2CartBtn from "./Add2CartBtn";

const sample_product = {
  company: "Sneaker Company",
  productName: "Fall Limited Edition Sneakers",
  productDesc:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  price: "$125.00",
  discount: "50%",
  mrp: "$250.00",
  images: [
    {
      default: "image-product-1.jpg",
      tn: "image-product-1-thumbnail.jpg",
    },
    {
      default: "image-product-2.jpg",
      tn: "image-product-2-thumbnail.jpg",
    },
    {
      default: "image-product-3.jpg",
      tn: "image-product-3-thumbnail.jpg",
    },
    {
      default: "image-product-4.jpg",
      tn: "image-product-4-thumbnail.jpg",
    },
  ],
};

const ProductHome = () => {
  const [product, setProduct] = useState(sample_product);
  const [qty, setQty] = useState(0);

  function incrQtyHandler() {
    setQty((prevQty) => prevQty + 1);
  }

  function decrQtyHandler() {
    if (qty === 0) {
      return;
    }
    setQty((prevQty) => prevQty - 1);
  }

  return (
    <div className="pdcontainer">
      <div className="left">
        <div
          id="imgCarouselContorl"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {product?.images?.map((image, index) => (
              <div
                key={"ladav6-" + index}
                className={"carousel-item " + `${index === 0 ? "active" : ""}`}
              >
                <img
                  key={"ladaks63$v6-" + index}
                  src={process.env.PUBLIC_URL + "/images/" + image.default}
                  className="d-block w-100 rounded"
                  alt={image.default}
                />
              </div>
            ))}
            {/* <div class="carousel-item">
              <img src="" class="d-block w-100" alt="..." />
            </div> */}
          </div>
          <div class="carousel-indicators indi-box d-none d-sm-flex">
            {product?.images?.map((image2, index2) => (
              <button
                type="button"
                data-bs-target="#imgCarouselContorl"
                data-bs-slide-to={index2}
                className={index2 === 0 ? "active" : ""}
                aria-current="true"
                // aria-label="Slide 1"
              >
                <img
                  src={process.env.PUBLIC_URL + "/images/" + image2.tn}
                  className="d-block mt-5 indi rounded"
                />
              </button>
            ))}
          </div>

          <button
            className="carousel-control-prev d-block d-sm-none"
            type="button"
            data-bs-target="#imgCarouselContorl"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next d-block d-sm-none"
            type="button"
            data-bs-target="#imgCarouselContorl"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* <img
          src={process.env.PUBLIC_URL + "/images/image-product-1.jpg"}
          className="rounded img-fluid"
        /> */}
        {/* <div className="tnimg-container">
          {product?.images?.map((image, index) => (
            <img
              key={"lkansdv0" + index}
              src={process.env.PUBLIC_URL + "/images/" + image.tn}
              className="rounded tnimage"
            />
          ))}
        </div> */}
      </div>
      <div className="right">
        <div className="pd-details">
          <span className="pdcomp orange-text">{product.company}</span>
          <p className="pdname fw-bold">{product.productName}</p>
          <p className="grey-text">{product.productDesc}</p>
          <span>
            <span className="fw-bold" style={{ fontSize: "20px" }}>
              {product.price}
            </span>
            {"    "}
            <span className="discount fw-bold orange-text">
              {product.discount}
            </span>
          </span>
          <p className="mrp grey-text">{product.mrp}</p>
        </div>
        <div className="d-flex flex-column flex-sm-row justify-content-between">
          <QtyButton
            qty={qty}
            onIncr={incrQtyHandler}
            onDecr={decrQtyHandler}
          />
          <Add2CartBtn />
        </div>
      </div>
    </div>
  );
};

export default ProductHome;
