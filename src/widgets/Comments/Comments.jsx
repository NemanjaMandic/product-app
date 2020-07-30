import React from "react";
import PropTypes from "prop-types";

import { Wrapper, Comment } from "./style";

const Comments = (props) => {
  const { comments } = props;

  return (
    <>
      {comments &&
        comments.map((comment, id) => {
          return (
            <Wrapper key={id}>
              <Comment>{comment}</Comment>
            </Wrapper>
          );
        })}
    </>
  );
};

Comments.propTypes = {
  comments: PropTypes.array,
};

export default Comments;
