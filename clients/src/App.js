import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import ListByType from "./components/hotels/ListByType";
import MainHotel from "./pages/mainHotel/MainHotel";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/:slug" element={<ListByType/>}/>
        <Route path="/home/:id/:name" element={<MainHotel/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;