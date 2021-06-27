import axios from "axios";

export const api = axios.create({
  //baseURL: "https://apiimobiliario.mnem.org.br",
  baseURL: "http://127.0.0.1:3333",
});
