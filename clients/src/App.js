import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import ListHotel from "./components/hotels/ListHotel";
import ListApartment from "./components/apartment/ListApartment";
import ListCabin from "./components/cabin/ListCabin";
import ListVilla from "./components/villa/ListVilla";
import ListResort from "./components/resort/ListResort";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/hotel" element={<ListHotel/>}/>
        <Route path="/apartment" element={<ListApartment/>}/>
        <Route path="/cabin" element={<ListCabin/>}/>
        <Route path="/villa" element={<ListVilla/>}/>
        <Route path="/resort" element={<ListResort/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;