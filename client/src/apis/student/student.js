import axios from "axios";

const BASE_URL = "http://localhost:4000";

export const getActiveExams = async (page, pageSize) => {
  try {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${BASE_URL}/students/get-active-exams?page=${page}&perPage=${pageSize}`,
      headers: {},
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
      headers: {},
    };
    const response = await axios.request(config);
    return response;
  } catch (e) {
    throw e;
  }
};
