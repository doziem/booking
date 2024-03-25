import {Link, useLocation} from "react-router-dom"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, } from "../../dataTableSource";
import "./dataTable.scss";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch"
import axios from "axios";

const DataTable = () => {
const [list,setList] = useState([])

const location = useLocation()

const path = location.pathname.split("/")[1]

  const {data,loading,error} = useFetch(`/${path}`)

  useEffect(() => {
  setList(data)
  }, [data])
  
console.log(path);
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/${path}/${id}`);
      setList(list.filter((item) => item._id !== id));
    } catch (err) {}
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
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
      rows={list}
      columns={userColumns.concat(actionColumn)}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
      disableSelectionOnClick
      experimentalFeatures={{ newEditingApi: true }}
      getRowId={row=>row._id}
      />
      </div>
  );
};

export default DataTable;
