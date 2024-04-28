import { useLocation } from "react-router-dom"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import "./mainHotel.css"
import MailList from "../../components/mailList/MailList"
import MainHeader from "../../components/mainHeader/MainHeader"
import useFetch from "../../hooks/useFetch"

const MainHotel = () => {
    const location = useLocation();

    const path = location.pathname.split("/")[2]

  const { data, loading } = useFetch(`/hotels/find/${path}`);

  console.log("Data:::",data);

  return (
    <div className="mainHotel">
      <Navbar />
      <MainHeader/>
      

      <MailList />
      <Footer />
    </div>
  );
}

export default MainHotel
