import axios from "axios";

const baseUrl = "https://fakestoreapi.com";

export const getAllProducts = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/products`);
    return data;
  } catch (error) {
    console.log("error is:", error);
  }
};

export const getProduct = async (id) => {
  try {
    const { data } = await axios.get(`${baseUrl}/products/${id}`);

    return data;
  } catch (error) {
    console.log(error);
  }
};
