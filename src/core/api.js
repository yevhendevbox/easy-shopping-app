import axios from "axios";

// const HTTP = axios.create({
//   baseURL: 'https://dummyapi.online/api/products',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });
// =========== It turned out that a request to this API returns a CORS error. so I decided to use another one

const HTTP = axios.create({
  baseURL: 'https://fakestoreapi.com/products',
  headers: {
    'Content-Type': 'application/json',
  },
});
export const getProductsQuery = async () => {
  try {
    const response = await HTTP.get('/');
    return response.data;
  } catch (error) {
    throw new Error(error, 'Some thing went wrong when getting list of products');
  }
}
export const getProductByIdQuery = async (id) => {
  try {
    const response = await HTTP.get(`/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error, 'Some thing went wrong when getting single product');
  }
}