import DataTable from '../../components/dataTables/DataTable'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'

import "./list.scss"

const List = () => {
  return (
    <div className="list">
    <Sidebar/>
    <div className="listContainer">
      <Navbar/>

      <DataTable 
      // columns={columns}
      />
    </div>
  </div>
  )
}

export default List