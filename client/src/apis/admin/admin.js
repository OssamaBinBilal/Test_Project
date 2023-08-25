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
