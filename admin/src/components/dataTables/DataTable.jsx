import { Box } from "@mui/material";
import {Link} from "react-router-dom"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns,userRows } from "../../dataTableSource";
import "./dataTable.scss";

const DataTable = () => {


  const handleDelete = async (id) => {
    // try {
    //   await axios.delete(`/${path}/${id}`);
    //   setList(list.filter((item) => item._id !== id));
    // } catch (err) {}
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 130,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/user/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
    <div className="datatableTitle">
      {/* {path} */} Add New User
      <Link to={`/user/new`} className="link">
        Add New
      </Link>
      </div>
    <DataGrid
     className="datagrid"
      rows={userRows}
      columns={userColumns.concat(actionColumn)}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
      disableSelectionOnClick
      experimentalFeatures={{ newEditingApi: true }}
      />
      </div>
  );
};

export default DataTable;
