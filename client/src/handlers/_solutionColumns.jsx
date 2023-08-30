import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const _columns = [
  { field: "id", headerName: "ID", width: 150, sortable: false },
  {
    field: "submitter_id",
    headerName: "Student ID",
    width: 150,
    sortable: false,
  },
  {
    field: "expandButton",
    headerName: "Actions",
    width: 200,
    sortable: false,
    renderCell: (params) => (
      <>
        <Button
          sx={{ fontWeight: "bold", textTransform: "capitalize" }}
          variant="contained"
          onClick={() => console.log(params.row.id)}
        >
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`/admin/solution/${params.row.id}`}
          >
            Expand
          </Link>
        </Button>
      </>
    ),
  },
];

export default _columns;
