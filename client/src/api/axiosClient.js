import axios from "axios";

const axiosClient = () => {
  const config = {
    headers: {
      Signature: "Camilo Echeverri Tamayo",
    },
  };
  return axios.create(config);
};

export const client = axiosClient();
