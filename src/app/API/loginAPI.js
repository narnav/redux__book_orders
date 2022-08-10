import axios from "axios";
const URL = "http://127.0.0.1:8000/api/token/";

export function doLogin(loginData) {
  console.log(loginData);
  return new Promise((resolve) =>
    axios.post(URL, loginData).then((res) => resolve({ data: res.data }))
  );
}
