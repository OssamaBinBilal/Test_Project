import React from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import _columns from "../../handlers/_studentColumns";

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
    email: "s",
  },
];

const TeacherList = () => {
  return (
    <Box style={{ height: "100%", width: "100%" }}>
      <DataGrid rows={rows} columns={_columns} hideFooter />
    </Box>
  );
};

export default TeacherList;
