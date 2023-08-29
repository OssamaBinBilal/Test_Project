const Admin = require("../models/admin");
const Student = require("../models/student");
const Teacher = require("../models/teacher");

async function isRegisteredAsAdmin(email) {
  try {
    const admin = await Admin.findOne({ where: { email } });
    return admin !== null;
  } catch (error) {
    console.error("Error checking admin:", error);
    return false;
  }
}

async function isRegisteredAsTeacher(email) {
  try {
    const teacher = await Teacher.findOne({ where: { email } });
    return teacher !== null;
  } catch (error) {
    console.error("Error checking admin:", error);
    return false;
  }
}

async function isRegisteredAsStudent(email) {
  try {
    const student = await Student.findOne({ where: { email } });
    return student !== null;
  } catch (error) {
    console.error("Error checking admin:", error);
    return false;
  }
}

module.exports = {
  isRegisteredAsAdmin,
  isRegisteredAsTeacher,
  isRegisteredAsStudent,
};
