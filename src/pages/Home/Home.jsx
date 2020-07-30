import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getProducts } from "../../state/products/actions";
import { products, productsLoading } from "../../state/products/selectors";

import ProductList from "../../widgets/ProductList";
import Loader from "../../components/Loader";

import { Wrapper } from "./style";

const Home = (props) => {
  const { getProducts, products, loading } = props;

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Wrapper>
      {loading ? <Loader /> : <ProductList products={products} />}
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    products: products(state),
    loading: productsLoading(state),
  };
};

Home.propTypes = {
  getProducts: PropTypes.func.isRequired,
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
  loading: PropTypes.bool,
};
export default connect(mapStateToProps, { getProducts })(Home);
