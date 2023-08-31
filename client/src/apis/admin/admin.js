import axios from "axios";

const BASE_URL = "http://localhost:4000";

export const getStudents = async (page, pageSize) => {
  try {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${BASE_URL}/admin/get-students?page=${page}&pageSize=${pageSize}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
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
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
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
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await axios.request(config);
    return response;
  } catch (e) {
    throw e;
  }
};

export const createStudent = async (
  firstName,
  lastName,
  email,
  password,
  image
) => {
  try {
    let data = new FormData();
    data.append("image", image);
    data.append("firstName", firstName);
    data.append("lastName", lastName);
    data.append("email", email);
    data.append("password", password);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${BASE_URL}/admin/create-student`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: data,
    };
    const response = await axios.request(config);
    return response;
  } catch (e) {
    throw e;
  }
};

export const createTeacher = async (firstName, lastName, email, password) => {
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
      url: `${BASE_URL}/admin/create-teacher`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: data,
    };

    const response = await axios.request(config);
    return response;
  } catch (e) {
    throw e;
  }
};

export const login = async (email, password) => {
  try {
    let data = JSON.stringify({
      email,
      password,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${BASE_URL}/admin/login`,
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

export const updateExamStatus = async (id, status) => {
  try {
    let data = JSON.stringify({
      id,
      status,
    });

    let config = {
      method: "put",
      maxBodyLength: Infinity,
      url: `${BASE_URL}/admin/update-exam-status`,
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
      url: `${BASE_URL}/admin/validate-token`,
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

export const getSolutionsByExam = async (id, page, pageSize) => {
  try {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${BASE_URL}/admin/exam/${id}/solutions?page=${1}&pageSize=${pageSize}`,
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

export const getAccumulatedSolution = async (id) => {
  try {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${BASE_URL}/admin/accumulated-solution?solutionId=${id}`,
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
