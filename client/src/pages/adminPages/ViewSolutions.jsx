import { useEffect, useState } from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { getSolutionsByExam, getTeachers } from "../../apis/admin/admin";
import Pagination from "../../components/Pagination/Pagination";
import { useNavigate, useParams } from "react-router-dom";
import _columns from "../../handlers/_solutionColumns";

const ViewSolutions = () => {
  const [solutions, setSolutions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(1);

  const { examId } = useParams();

  const itemsPerPage = 10;

  const handlePageChange = (e, newPage) => {
    setCurrentPage(newPage);
  };

  // useEffect(() => {
  //   getTeachers(currentPage, itemsPerPage)
  //     .then((response) => {
  //       setTeachers(response.data.teachers);
  //       setTotalItems(response.data.total_teachers);
  //     })
  //     .catch((e) => {
  //       console.log(e.response.data.error);
  //       if (e.response.status === 403) {
  //         console.log("Your token is invalid, please log in again");
  //         navigate("/admin/login");
  //       }
  //     });
  // }, [currentPage]);

  useEffect(() => {
    getSolutionsByExam(examId)
      .then((response) => {
        setSolutions(response.data.solutions);
        setTotalItems(response.data.totalCount);
      })
      .catch((e) => console.log(e));
  }, [currentPage]);

  return (
    <>
      <Box style={{ height: "90%", width: "100%" }}>
        <DataGrid
          sx={{ border: "none" }}
          rowHeight={75}
          rows={solutions}
          columns={_columns}
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

export default ViewSolutions;

// import React, { useEffect } from "react";
// import { getSolutionsByExam } from "../../apis/admin/admin";

// const ViewSolutions = () => {
//   const { examId } = useParams();

//   useEffect(() => {
//     getSolutionsByExam(examId)
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((e) => console.log(e));
//   }, []);

//   return <div>{examId}</div>;
// };

// export default ViewSolutions;
