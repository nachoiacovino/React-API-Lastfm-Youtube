import axios from "axios";

const KEY = "1eb9a5c754470fa1796bc0b465ec41a3";

// eslint-disable-next-line
const secret = "a86c562957c6023d2ef143237c83729c";

export default axios.create({
  baseURL: "http://ws.audioscrobbler.com/2.0",
  params: {
    country: "united states",
    limit: "50",
    api_key: KEY,
    format: "json"
  }
});
