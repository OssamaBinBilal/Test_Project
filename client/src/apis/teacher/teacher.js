import axios from "axios";

const BASE_URL = "http://localhost:4000";

export const login = async (email, password) => {
  console.log("logging in with", email, password);

  try {
    let data = JSON.stringify({
      email,
      password,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${BASE_URL}/teacher/login`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = await axios.request(config);
    return response;
  } catch (e) {
    throw e;
  }
};

export const validateToken = async (token) => {
  try {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${BASE_URL}/teacher/validate-token`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = axios.request(config);
    return response;
  } catch (e) {
    throw e;
  }
};
