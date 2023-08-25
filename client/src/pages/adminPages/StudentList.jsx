import React, { useEffect, useState } from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import _columns from "../../handlers/_studentColumns";
import { getStudents } from "../../apis/admin/admin";

const rows = [
  {
    id: 1,
    firstname: "Hello",
    lastname: "World",
    username: "kekw",
    email: "Omegalul",
  },
  {
    id: 2,
    firstname: "Hello",
    lastname: "World",
    username: "kekw",
    email: "Omegalul",
  },
  {
    id: 3,
    firstname: "Hello",
    lastname: "World",
    username: "kekw",
    email: "Omegalul",
  },
];

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents()
      .then((response) => {
        setStudents(response.data.students);
      })
      .catch((e) => {
        console.log(e.response.data.error);
      });
  }, []);

  return (
    <Box style={{ height: "100%", width: "100%" }}>
      <DataGrid rows={students} columns={_columns} hideFooter />
    </Box>
  );
};

export default StudentList;
