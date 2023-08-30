import { useEffect, useState } from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import Pagination from "../../components/Pagination/Pagination";
import { useNavigate, useParams } from "react-router-dom";
import { getSolutionsByExam } from "../../apis/teacher/teacher";
import useSolutionColumns from "../../handlers/_solutionColumns";

const ViewSolutions = () => {
  const [solutions, setSolutions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(1);

  const { examId } = useParams();

  const _columns = useSolutionColumns("teacher");

  const itemsPerPage = 10;

  const handlePageChange = (e, newPage) => {
    setCurrentPage(newPage);
  };

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