import axios from "axios";

const KEY = "AIzaSyAfoTtI0qcBhiLBoQnI8ebT2X4R1zvXLAo";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { part: "snippet", maxResults: 10, type: "video", key: KEY },
});
