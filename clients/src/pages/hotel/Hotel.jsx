import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const {id} = useParams()
const navigate = useNavigate()
  const { data, loading } = useFetch("/hotels/find/" + id);

console.log("Data:::",data);
  const {dates,options} = useContext(SearchContext)
const {user} = useContext(AuthContext)

const handleReserveOrLogin =()=>{

  if(user){
    setOpenModal(true)
  }else{
    navigate("/login")
  }

}


const dayDifference=(start,end)=>{
  const MILISECOND_PER_DAY = 1000*60*60*24
  const timeDiff = Math.abs(end.getTime()-start.getTime());

  const diffDay = Math.ceil(timeDiff/MILISECOND_PER_DAY);

  return diffDay
}

const days=dayDifference(dates[0].endDate,dates[0].startDate);


  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber)
  };
 
  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading? "Loading": <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={data?.photoAlbum[slideNumber]} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button onClick={handleReserveOrLogin} className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">{data?.name} </h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{data?.address} </span>
          </div>
          <span className="hotelDistance">
            Excellent location – {data?.distance}m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over ₦{data?.cheapestPrice} at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {data.photoAlbum?.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">{data?.title} </h1>
              <p className="hotelDesc">{data?.description} </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a {days}-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>₦{days*data?.cheapestPrice* options.room}</b> ({days} nights)
              </h2>
              <button onClick={handleReserveOrLogin}>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
      }
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id}/>}
    </div>
  );
};

export default Hotel;