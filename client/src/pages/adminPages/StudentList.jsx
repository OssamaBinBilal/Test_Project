import React, { useEffect, useState } from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import _columns from "../../handlers/_studentColumns";
import { getStudents } from "../../apis/admin/admin";
import Pagination from "../../components/Pagination/Pagination";
import { useNavigate } from "react-router-dom";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(1);
  const navigate = useNavigate();

  const itemsPerPage = 10;

  const handlePageChange = (e, newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    getStudents(currentPage, itemsPerPage)
      .then((response) => {
        setStudents(response.data.students);
        setTotalItems(response.data.total_students);
      })
      .catch((e) => {
        console.log(e.response.data.error);
        if (e.response.status === 403) {
          console.log("Your token is invalid, please log in again");
          navigate("/admin/login");
        }
      });
  }, [currentPage]);

  return (
    <>
      <Box style={{ height: "90%", width: "100%" }}>
        <DataGrid
          sx={{ border: "none" }}
          rowHeight={75}
          rows={students}
          columns={[..._columns]}
          hideFooter
        />
      </Box>
      <Pagination
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        handlePageChange={handlePageChange}
      />
    </>
  );
};

export default StudentList;
