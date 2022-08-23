import axios from "axios";

const api = axios.create({
    baseURL: "https://api.bitpreco.com/btc-brl/",
});

export { api };
