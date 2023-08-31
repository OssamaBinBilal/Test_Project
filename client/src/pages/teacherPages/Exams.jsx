import React, { useEffect, useState } from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import Pagination from "../../components/Pagination/Pagination";
import useExamColumns from "../../handlers/_examColumns";
import { getExamsAgainstTeachers } from "../../apis/teacher/teacher";

const ExamsList = () => {
  const [exams, setExams] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(1);
  const _columns = useExamColumns("teacher");

  const itemsPerPage = 10;

  const handlePageChange = (e, newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    getExamsAgainstTeachers(currentPage, itemsPerPage)
      .then((response) => {
        setExams(response.data.exams);
        setTotalItems(response.data.totalCount);
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
