const getAdmin = (req, res) => {
  res.send("get admin");
};

const postAdmin = (req, res) => {
  res.send("post admin");
};

const putAdmin = (req, res) => {
  res.send("put admin");
};

const deleteAdmin = (req, res) => {
  res.send("delete admin");
};

module.exports = {
  getAdmin,
  postAdmin,
  putAdmin,
  deleteAdmin,
};
