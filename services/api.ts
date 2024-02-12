import axios from "axios";

const api = axios.create({
  baseURL: "https://economia.awesomeapi.com.br/json/last",
});

export { api };
