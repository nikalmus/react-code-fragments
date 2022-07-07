import axios from "axios";

import { config } from "../utils/Constants";
const url = config.urls.PIC_URL;

export const getPictures = async (slug = null) => {
  try {
    const endpoint = slug ? `${url}/${slug}` : url;

    const response = await axios.get(endpoint);
    return await response.data;
  } catch (err) {
    console.log(`Oh, noes! ${err}`);
  }
};
