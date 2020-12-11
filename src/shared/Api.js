import Axios from "axios";

export const Api = Axios.create({
  baseURL: "https://yts.mx/api/v2/",
});
