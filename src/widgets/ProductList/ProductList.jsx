import React from "react";
import PropTypes from "prop-types";

import Product from "../../components/Product";
import { Wrapper } from "./style";

const ProductList = (props) => {
  const { products } = props;
  return (
    <Wrapper>
      {products &&
        products.map((product) => {
          return (
            <Product
              key={product.id}
              title={product.title}
              to={`/product/${product.id}`}
              image={product.images[0].thumb}
              price={product.price}
            />
          );
        })}
    </Wrapper>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.number,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          thumb: PropTypes.string,
        })
      ),
    }).isRequired
  ),
};

export default ProductList;
