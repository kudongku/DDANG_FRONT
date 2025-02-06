import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const api = axios.create({
  baseURL: baseURL,
  timeout: 1000000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `${token}`;
    }

    return config;
  },
  (error) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response?.status === 401) {
      const originalRequest = error.config;

      try {
        const refreshToken = localStorage.getItem("refreshToken");

        if (refreshToken) {
          const { data } = await axios.post(baseURL + "/auth/refresh", {
            refreshToken,
          });
          localStorage.setItem("accessToken", data.tokenType + data.token);
          originalRequest.headers.Authorization = `${data.token}`;
          return api(originalRequest);
        } else {
          window.location.href = "/login";
        }
      } catch (refreshError) {
        console.error("토큰 갱신 실패:", refreshError);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default api;
