import axios from "axios";

export const getAllProducts = async () => {
  try {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    return data;
  } catch (error) {
    console.log("error is:", error);
  }
};

export const getProduct = async (id) => {
  try {
    const { data } = await axios.get(
      ` https://fakestoreapi.com/products/${id}`
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
