import { Box, Pagination as MuiPagination } from "@mui/material";

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  handlePageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <Box
      sx={{
        height: "90px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MuiPagination
        page={currentPage}
        count={totalPages}
        size="large"
        onChange={handlePageChange}
      />
    </Box>
  );
};

export default Pagination;
