import React, { useEffect, useState } from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { getExams } from "../../apis/admin/admin";
import Pagination from "../../components/Pagination/Pagination";
import useExamColumns from "../../handlers/_examColumns";
import { useSnackbar } from "../../context/useSnackbar";

const ExamsList = () => {
  const [exams, setExams] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(1);

  const { displaySnackbar } = useSnackbar();

  const retrieveExams = () => {
    getExams(currentPage, itemsPerPage)
      .then((response) => {
        setExams(response.data.exams);
        setTotalItems(response.data.total_exams);
      })
      .catch((e) => {
        displaySnackbar(e.response.data.error, "error");
      });
  };

  const _columns = useExamColumns("admin", retrieveExams);

  const itemsPerPage = 10;

  const handlePageChange = (e, newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    retrieveExams();
  }, [currentPage]);

  return (
    <>
      <Box style={{ height: "90%", width: "100%" }}>
        <DataGrid
          sx={{ border: "none" }}
          rowHeight={75}
          rows={exams}
          columns={[..._columns]}
          hideFooter
          disableColumnMenu
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

export default ExamsList;
