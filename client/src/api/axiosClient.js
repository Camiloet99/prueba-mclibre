import axios from "axios";

const axiosClient = () => {
  const config = {
    proxy: {
      host: "localhost",
      port: 5000,
    },
    headers: {
      Signature: "Camilo Echeverri Tamayo",
    },
  };
  return axios.create(config);
};

export const client = axiosClient();
