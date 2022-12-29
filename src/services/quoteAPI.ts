import axios from "axios";

const quoteAPI = axios.create({
  baseURL: "https://type.fit/api/quotes",
});

async function getSingleQuote() {
  const res = await quoteAPI.get("").then((response) => response.data);

  const index = Math.round(Math.random() * res.length);

  return res[index];
}

export default getSingleQuote;
