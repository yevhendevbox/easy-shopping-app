import axios from "axios";

const HTTP = axios.create({
  baseURL: 'https://dummyapi.online/api/products',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getProductsQuery = async () => {
  try {
    const response = HTTP.get();

    return response;
  } catch (error) {
    throw new Error(error, 'Some thing went wrong!')
  }
}