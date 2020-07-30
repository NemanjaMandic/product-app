import Network from "./network";

const BASE_URL = `http://private-5815fe-recommendationsknip.apiary-mock.com`;

export const getProductsAPI = () => Network.get(`${BASE_URL}/products`);
