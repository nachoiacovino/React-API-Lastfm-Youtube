import axios from "axios";

const KEY = "AIzaSyC8uyYNPbV_T3dNkLq4ACiB-UdA9THtXIc";

export default axios.create({
  baseURL: "https://api.spotify.com/v1",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY
  }
});
