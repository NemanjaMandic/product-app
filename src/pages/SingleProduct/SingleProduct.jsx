import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { getProduct } from "../../state/products/actions";
import { singleProduct, productLoading } from "../../state/products/selectors";
import { saveComment, loadComment } from "../../utils/persist";
import Loader from "../../components/Loader";
import Comments from "../../widgets/Comments";

import {
  Wrapper,
  Title,
  Description,
  FlexDiv,
  ImageWrapper,
  Image,
  Div,
  SpecificationLabel,
  Specification,
  Price,
  Label,
  BackLink,
  Button,
  CommentsWrapper,
  NoComments,
  FormWrapper,
  Form,
} from "./style";

const SingleProduct = (props) => {
  const [comment, setComment] = useState("");
  const [photoIndex, setPhotoIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const { product, loading, getProduct } = props;

  const productId = props.match.params.productId - 1;

  const comments = loadComment(productId);

  let images = [];

  if (product.images) {
    product.images.forEach((element, index) =>
      images.push(product.images[index].original)
    );
  }

  useEffect(() => {
    getProduct(productId);
  }, []);

  const handleChange = (event) => {
    setComment(event.target.value);
  };
  const sendComment = (event) => {
    event.preventDefault();
    saveComment(productId, comment);
    setComment("");
  };

  const openLightBox = () => {
    setOpen(true);
  };

  const closeLightBox = () => {
    setOpen(false);
  };

  const movePreviousImage = () => {
    setPhotoIndex((photoIndex + images.length - 1) % images.length);
  };

  const moveNextImage = () => {
    setPhotoIndex((photoIndex + images.length + 1) % images.length);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Wrapper>
      <Title>{product.title}</Title>
      <Description>{product.description}</Description>
      <FlexDiv>
        <ImageWrapper>
          <Image src={images[0]} onClick={openLightBox} />
        </ImageWrapper>
        <Div>
          <SpecificationLabel>specification:</SpecificationLabel>
          <Specification> {product.specification}</Specification>
          <Price>{product.price} &euro;</Price>
        </Div>
      </FlexDiv>
      <FormWrapper>
        <Form onSubmit={sendComment}>
          <Label>Leave a comment</Label>
          <textarea
            name="comment"
            value={comment}
            onChange={handleChange}
            rows="6"
            cols="70"
          />

          <Button type="submit" disabled={!comment}>
            Send
          </Button>
        </Form>
      </FormWrapper>
      <CommentsWrapper>
        {comments ? <h3>Comments: </h3> : <NoComments>No comments</NoComments>}
        {comments && <Comments comments={comments} />}
      </CommentsWrapper>

      <BackLink to="/">&lt; BACK</BackLink>

      {open && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={closeLightBox}
          onMovePrevRequest={movePreviousImage}
          onMoveNextRequest={moveNextImage}
        />
      )}
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    product: singleProduct(state),
    loading: productLoading(state),
  };
};

SingleProduct.propTypes = {
  product: PropTypes.any.isRequired,
  specification: PropTypes.string,
  price: PropTypes.number,
  getProduct: PropTypes.func,
  loading: PropTypes.bool,
};
export default connect(mapStateToProps, { getProduct })(SingleProduct);
