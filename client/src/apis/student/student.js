import axios from "axios";

const BASE_URL = "http://localhost:4000";

export const getActiveExams = async (page, pageSize) => {
  try {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${BASE_URL}/students/get-active-exams?page=${page}&perPage=${pageSize}`,
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    const response = await axios.request(config);
    return response;
  } catch (e) {
    throw e;
  }
};

export const getExamQuestions = async (id) => {
  try {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${BASE_URL}/students/get-exam-questions/${id}`,
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    const response = await axios.request(config);
    return response;
  } catch (e) {
    throw e;
  }
};

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
      url: `${BASE_URL}/students/login`,
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

export const submitSolution = async (examId, mcqs, questions) => {
  try {
    let data = JSON.stringify({
      examId,
      mcqs,
      questions,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${BASE_URL}/students/submit-solution`,
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

export const validateToken = async (token) => {
  try {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${BASE_URL}/students/validate-token`,
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

export const getAccumulatedSolution = async (id) => {
  try {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${BASE_URL}/students/accumulated-solution?solutionId=${id}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = axios.request(config);
    return response;
  } catch (e) {
    throw e;
  }
};
