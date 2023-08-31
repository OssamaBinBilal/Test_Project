import React, { useEffect, useState } from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import Pagination from "../../components/Pagination/Pagination";
import { getActiveExams } from "../../apis/student/student";
import useExamColumns from "../../handlers/_examColumns";

const ExamsList = () => {
  const [exams, setExams] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(1);
  const _columns = useExamColumns("student");

  const itemsPerPage = 10;

  const handlePageChange = (e, newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    getActiveExams(currentPage, itemsPerPage)
      .then((response) => {
        setExams(response.data.exams);
        setTotalItems(response.data.total_exams);
      })
      .catch((e) => {
        console.log(e.response.data.error);
      });
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
