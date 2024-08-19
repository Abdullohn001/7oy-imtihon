import React from "react";
import axios from "axios";

const productionUrl = "https://strapi-store-server.onrender.com/api";
export const customFetch = axios.create({
  baseURL: productionUrl,
});

// // Add a request interceptor
// axios.interceptors.request.use(
//   function (config) {
//     const acces_token = window.localStorage.getItem("acces_token");

//     if (acces_token) {
//     }
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

// // Add a response interceptor
// axios.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     const originalReq = error.config;
//     originalReq._retry = false;

//     if (originalReq.status == 403 && !originalReq._retry) {
//       //refresh token
//       originalReq._retry = true;

//       const { data } = axios(mainUrl + "/auth/refresh_token", {
//         refresh_token: window.localStorage.getItem("refresh_token"),
//       });
//       window.localStorage.setItem("refresh_token", data.refresh_token);
//       return axiosCliend(data);
//     } else {
//       window.localStorage.removeItem("acces_token");
//       window.localStorage.removeItem("refresh_token");
//     }
//     return Promise.reject(error);
//   }
// );


export const formatPrice = (price) => {
  const dollorAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format((price / 100).toFixed(2));
  return dollorAmount;
};

export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;
    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};