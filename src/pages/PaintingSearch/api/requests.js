import axios from "axios";

import { config } from "../utils/Constants";
const url = config.urls.PIC_URL;

export const getData = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    console.log(`Oh, noes! ${err}`);
  }
};
