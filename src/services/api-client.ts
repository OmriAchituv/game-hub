import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fd0ddea6e3954ff78e168a10972c4930",
  },
});
