import axios from "axios";
axios.defaults.baseURL = process.env.VUE_APP_ROOT_API;
console.log('axios.defaults.baseURL :>> ', axios.defaults.baseURL);
export default function ApiService({ method, url, config = {} }) {
  return axios({
    method,
    url,
    data: {
      ...config.data,
    },
    params: {
      ...config.params,
    },

  });
}

axios.interceptors.response.use(
  (response) => response,
  (error) => {


    if (error.response.status === 401) {
      console.log('Error :>> ');
    }

    return Promise.reject(error);
  }
);
