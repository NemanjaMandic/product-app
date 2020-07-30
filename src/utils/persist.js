export const saveComment = (productId, state) => {
  try {
    let comment = [];
    comment = JSON.parse(localStorage.getItem(productId)) || [];
    comment.push(state);
    localStorage.setItem(productId, JSON.stringify(comment));
  } catch (err) {
    console.log(err);
  }
};

export const loadComment = (productId) => {
  try {
    const serializedProduct = localStorage.getItem(productId);
    if (serializedProduct === null) {
      return undefined;
    }
    return JSON.parse(serializedProduct);
  } catch (error) {
    return undefined;
  }
};
