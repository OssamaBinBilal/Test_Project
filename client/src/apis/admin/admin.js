import axios from "axios";

const BASE_URL = "http://localhost:4000";

export const getStudents = async () => {
  try {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${BASE_URL}/admin/get-students?page=2&pageSize=10`,
      headers: {},
    };
    const response = await axios.request(config);
    return response;
  } catch (e) {
    throw e;
  }
};
