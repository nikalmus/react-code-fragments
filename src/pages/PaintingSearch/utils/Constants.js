const prod = {
  urls: {
    PIC_URL: "https://TBD.herokuapp.com/lasmeninas",
  },
};
const dev = {
  urls: {
    PIC_URL: "http://localhost:3034/lasmeninas",
  },
};

export const config = process.env.NODE_ENV === "development" ? dev : prod;
