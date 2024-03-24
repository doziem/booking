
export const userRows = [
  {
    id: 1,
    username: "Jon Snow",
    img: "https://images.unsplash.com/photo-1482482097755-0b595893ba63?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 35,
    status: "active",
    email: "jsnow@gmail.com",
  },
  {
    id: 2,
    username: "Cersei Lannister",
    img: "https://images.unsplash.com/photo-1482482097755-0b595893ba63?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: "passive",
    email: "cerseiL@gmail",
    age: 42,
  },
  {
    id: 3,
    username: "Jaime Lannister",
    img: "https://images.unsplash.com/photo-1482482097755-0b595893ba63?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: "passive",
    email:"jaimelannister@gmail.com",
    age: 45,
  },
  { 
    id: 4, 
    username: "Arya Stark",
    img: "https://images.unsplash.com/photo-1482482097755-0b595893ba63?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: "pending",
    email:"aryastark@gmail.com",
    age: 16 
  },
  { 
    id: 5,  
    username: "Daenerys Targaryen", 
    img: "https://images.unsplash.com/photo-1482482097755-0b595893ba63?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: "active",
    email:"dtargaryen@yahoo.com",
    age: null 
  },
];

export const userColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
            alt="avatar"
          />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },

  {
    field: "age",
    headerName: "Age",
    width: 130,
  },

  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell:(params)=>{
      return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status} </div>
    }
  },
  // {
  //   field: "country",
  //   headerName: "Country",
  //   width: 100,
  // },
  // {
  //   field: "city",
  //   headerName: "City",
  //   width: 100,
  // },
  // {
  //   field: "phone",
  //   headerName: "Phone",
  //   width: 100,
  // },
];
  
  export const hotelColumns = [
    { field: "_id", headerName: "ID", width: 250 },
    {
      field: "name",
      headerName: "Name",
      width: 150,
    },
    {
      field: "type",
      headerName: "Type",
      width: 100,
    },
    {
      field: "title",
      headerName: "Title",
      width: 230,
    },
    {
      field: "city",
      headerName: "City",
      width: 100,
    },
  ];
  
  export const roomColumns = [
    { field: "_id", headerName: "ID", width: 70 },
    {
      field: "title",
      headerName: "Title",
      width: 230,
    },
    {
      field: "desc",
      headerName: "Description",
      width: 200,
    },
    {
      field: "price",
      headerName: "Price",
      width: 100,
    },
    {
      field: "maxPeople",
      headerName: "Max People",
      width: 100,
    },
  ];