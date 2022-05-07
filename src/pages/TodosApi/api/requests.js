import axios from "axios";
import { url } from "../Constants";

export const getTodos = async (page) => {
  try {
    const response = await axios.get(url, { params: { _page: page } });
    return response;
  } catch (err) {
    console.log(err);
  }
};
