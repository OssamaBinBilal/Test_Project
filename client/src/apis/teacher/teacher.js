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

export const createExam = async (
  mcqs,
  questions,
  startDate,
  expireDate,
  startTime,
  expireTime
) => {
  const formattedMCQs = mcqs.map((mcq) => {
    const convertedOptions = mcq.options.map((optionText) => ({ optionText }));
    return {
      ...mcq,
      options: convertedOptions,
    };
  });

  let data = JSON.stringify({
    startTime: "2023-08-01T10:00:00Z",
    endTime: "2023-09-01T12:00:00Z",
    subject: "Sample Exam 1",
    textQuestions: questions,
    mcqs: formattedMCQs,
  });

  try {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${BASE_URL}/teacher/create-exam`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: data,
    };
    const response = axios.request(config);
    return response;
  } catch (e) {
    throw e;
  }
};
