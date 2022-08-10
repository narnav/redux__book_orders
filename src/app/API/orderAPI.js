import axios from "axios";
const URL = "http://127.0.0.1:8000/api/";

export function getOrders(token) {
  console.log(token);
  return new Promise((resolve) =>
    axios(URL + "getOrders/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => resolve({ data: res.data }))
  );
}

export function loanBook(data) {
  console.log(data.token);
  return new Promise((resolve) =>
    axios
      .post(URL + "orderbook/", data, {
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      })
      .then((res) => resolve({ data: res.data }))
  );
}
