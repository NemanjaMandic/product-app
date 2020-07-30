import React from "react";
import PropTypes from "prop-types";
import { Title, ProductLink, Image } from "./style";

const Product = (props) => {
  const { title, image, price, to } = props;
  return (
    <div>
      <ProductLink to={to}>
        <Title>{title}</Title>
        <Image src={image} />
      </ProductLink>
      <p>{price} &euro;</p>
    </div>
  );
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;
