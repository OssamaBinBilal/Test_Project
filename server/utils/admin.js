const Admin = require("../models/admin");

async function isRegisteredAsAdmin(email) {
  try {
    const admin = await Admin.findOne({ where: { email } });
    return admin !== null;
  } catch (error) {
    console.error("Error checking admin:", error);
    return false;
  }
}

module.exports = {
  isRegisteredAsAdmin,
};
