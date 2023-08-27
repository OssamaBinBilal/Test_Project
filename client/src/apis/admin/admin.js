import axios from "axios";

const BASE_URL = "http://localhost:4000";

export const getStudents = async (page, pageSize) => {
  try {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${BASE_URL}/admin/get-students?page=${page}&pageSize=${pageSize}`,
      headers: {},
    };
    const response = await axios.request(config);
    return response;
  } catch (e) {
    throw e;
  }
};

export const getTeachers = async (page, pageSize) => {
  try {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${BASE_URL}/admin/get-teachers?page=${page}&pageSize=${pageSize}`,
      headers: {},
    };
    const response = await axios.request(config);
    return response;
  } catch (e) {
    throw e;
  }
};

export const getExams = async (page, pageSize) => {
  try {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${BASE_URL}/admin/get-all-exams?page=${page}&perPage=${pageSize}`,
      headers: {},
    };
    const response = await axios.request(config);
    return response;
  } catch (e) {
    throw e;
  }
};

export const createStudent = (firstName, lastName, email, password) => {
  try {
    let data = JSON.stringify({
      firstName,
      lastName,
      email,
      password,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${BASE_URL}/admin/create-student`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = axios.request(config);
    return response;
  } catch (e) {
    throw e;
  }
};
